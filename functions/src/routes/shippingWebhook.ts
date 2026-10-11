import { Router, Request, Response } from "express";
import { updateOrderInFirestore, getOrderFromFirestore } from "../services/firestore.js";
import { updateOrderInSanity, getOrderFromSanity } from "../services/sanity.js";
import { sendOrderDispatchedEmail, sendOrderDeliveredEmail } from "../services/email.js";

export const shippingWebhookRouter = Router();

shippingWebhookRouter.post("/api/shipping-webhook", async (req: Request, res: Response): Promise<void> => {
  const payload = req.body || {};
  console.log("Received shipping webhook:", JSON.stringify(payload));

  const action = payload.action; // Sendcloud
  const event = payload.event; // Shippo / custom

  let statusType: "dispatched" | "delivered" | null = null;
  let trackingNumber: string | undefined;
  let carrierName = "Royal Mail";
  let referenceId: string | undefined;

  if (action === "parcel_status_changed") {
    const parcel = payload.parcel || {};
    const statusObj = parcel.status || {};
    const statusId = statusObj.id;
    const statusMsg = (statusObj.message || "").toLowerCase();

    if (
      statusId === 1 ||
      statusId === 1000 ||
      statusMsg.includes("ready to send") ||
      statusMsg.includes("announced") ||
      statusMsg.includes("parcel announced")
    ) {
      statusType = "dispatched";
    } else if (statusId === 2000 || statusMsg.includes("delivered") || statusObj.code === "delivered") {
      statusType = "delivered";
    } else {
      console.log(`Sendcloud status '${statusMsg}' (${statusId}) is not dispatch or delivery milestone.`);
      res.json({ success: true, message: "Ignored status" });
      return;
    }

    trackingNumber = parcel.tracking_number;
    const carrierCode = (parcel.carrier?.code || "").toLowerCase();
    if (carrierCode.includes("royal_mail")) {
      carrierName = "Royal Mail";
    } else if (carrierCode.includes("evri") || carrierCode.includes("hermes")) {
      carrierName = "Evri";
    } else if (carrierCode.includes("yodel")) {
      carrierName = "Yodel";
    } else {
      carrierName = parcel.carrier?.name || "Courier";
    }

    referenceId = parcel.client_reference || parcel.external_order_id;
  } else if (event === "transaction_created") {
    const data = payload.data || {};
    if (data.status === "SUCCESS") {
      statusType = "dispatched";
      trackingNumber = data.tracking_number;
      referenceId = data.metadata;
    }
  }

  if (!referenceId) {
    res.status(400).json({ error: "Missing order reference in webhook" });
    return;
  }

  const cleanId = String(referenceId).replace(/^order-/, "").trim();
  console.log(`Processing shipping milestone '${statusType}' for order ${cleanId}`);

  // Fetch order from Firestore or Sanity
  let order = await getOrderFromFirestore(cleanId);
  if (!order) {
    order = await getOrderFromSanity(cleanId);
  }

  if (!order) {
    console.warn(`Order ${cleanId} not found in Firestore or Sanity.`);
    res.status(404).json({ error: "Order not found" });
    return;
  }

  const mappedStatus = statusType === "dispatched" ? "dispatched" : "delivered";

  // Update in Firestore and Sanity
  await Promise.allSettled([
    updateOrderInFirestore(cleanId, {
      status: mappedStatus,
      carrier: carrierName,
      trackingNumber: trackingNumber || ""
    }),
    updateOrderInSanity(cleanId, mappedStatus, carrierName, trackingNumber)
  ]);

  // Send appropriate customer notification email
  if (statusType === "dispatched") {
    await sendOrderDispatchedEmail(order, trackingNumber, carrierName);
  } else if (statusType === "delivered") {
    await sendOrderDeliveredEmail(order, trackingNumber, carrierName);
  }

  res.json({ success: true, message: `Processed ${statusType} for order ${cleanId}` });
});
