import { createClient } from "@sanity/client";
import { CONFIG } from "../config.js";
import { OrderSummary } from "./firestore.js";

export function getSanityClient() {
  const token = CONFIG.SANITY_WRITE_TOKEN;
  return createClient({
    projectId: CONFIG.SANITY_PROJECT_ID,
    dataset: CONFIG.SANITY_DATASET,
    token: token || undefined,
    useCdn: false,
    apiVersion: "2021-10-21"
  });
}

export async function saveOrderToSanity(orderSummary: OrderSummary): Promise<any> {
  const token = CONFIG.SANITY_WRITE_TOKEN;
  if (!token) {
    console.warn("SANITY_WRITE_TOKEN is not configured. Skipping saving order to Sanity CMS.");
    return null;
  }

  const client = getSanityClient();
  const stripeSessionId = orderSummary.session_id || "";
  const sanitizedId = `order-${stripeSessionId}`;

  const items = (orderSummary.line_items || []).map((item, idx) => ({
    _key: `item-${idx}`,
    _type: "object",
    description: item.description || "",
    quantity: item.quantity || 1,
    unitPrice: item.unit_price || "",
    lineTotal: item.line_total || "",
    imageUrl: item.image || item.imageUrl || ""
  }));

  const orderDoc: Record<string, any> = {
    _id: sanitizedId,
    _type: "order",
    orderId: orderSummary.order_number || "",
    stripeSessionId: stripeSessionId,
    status: "pending_sizes",
    createdAt: orderSummary.created_at || new Date().toISOString(),
    testOrder: !orderSummary.livemode,
    customer: {
      firstName: orderSummary.first_name || "",
      lastName: orderSummary.last_name || "",
      email: orderSummary.customer_email || "",
      phone: orderSummary.phone || "",
      instagram: orderSummary.instagram || "",
      contactPreference: orderSummary.contact_preference || "instagram"
    },
    items: items,
    financials: {
      subtotal: orderSummary.subtotal || "",
      discount: orderSummary.discount || "",
      shipping: orderSummary.shipping || "",
      total: orderSummary.total || "",
      currency: orderSummary.currency || "GBP",
      paymentStatus: orderSummary.payment_status || "paid",
      paymentMethodType: orderSummary.payment_method_type || "",
      cardBrand: orderSummary.card_brand || "",
      cardLast4: orderSummary.card_last4 || "",
      cardWalletType: orderSummary.card_wallet_type || ""
    },
    shipping: {
      shippingMethod: orderSummary.shipping_method || "",
      shippingAddress: orderSummary.shipping_address || "",
      billingAddress: orderSummary.billing_address || ""
    },
    customerNotes: orderSummary.notes || ""
  };

  try {
    const res = await client.createOrReplace(orderDoc as any);
    console.log(`Successfully mirrored order ${sanitizedId} to Sanity CMS. Result ID: ${res._id}`);
    return res;
  } catch (error) {
    console.error(`Failed to save order ${sanitizedId} to Sanity CMS:`, error);
    return null;
  }
}

export async function getOrderFromSanity(sessionIdOrOrderId: string): Promise<any> {
  const client = getSanityClient();
  const cleanId = sessionIdOrOrderId.trim();
  const query = `*[_type == "order" && (stripeSessionId == $cleanId || orderId == $cleanId || _id == $orderDocId)][0]`;
  try {
    return await client.fetch(query, { cleanId, orderDocId: `order-${cleanId}` });
  } catch (e) {
    console.error(`Error querying Sanity for order ${cleanId}:`, e);
    return null;
  }
}

export async function updateOrderInSanity(
  orderIdOrSessionId: string,
  status: string,
  carrier?: string,
  trackingNumber?: string
): Promise<any> {
  const token = CONFIG.SANITY_WRITE_TOKEN;
  if (!token) {
    console.warn("SANITY_WRITE_TOKEN is not configured. Skipping updating order in Sanity.");
    return null;
  }

  const existing = await getOrderFromSanity(orderIdOrSessionId);
  if (!existing || !existing._id) {
    console.warn(`Order ${orderIdOrSessionId} not found in Sanity. Cannot update.`);
    return null;
  }

  const client = getSanityClient();
  const patch = client.patch(existing._id).set({ status });

  if (carrier || trackingNumber) {
    const shippingPatch: Record<string, any> = {};
    if (carrier) shippingPatch.carrier = carrier;
    if (trackingNumber) shippingPatch.trackingNumber = trackingNumber;
    patch.set({ shipping: { ...(existing.shipping || {}), ...shippingPatch } });
  }

  try {
    const res = await patch.commit();
    console.log(`Successfully updated order ${existing._id} in Sanity. New status: ${status}`);
    return res;
  } catch (err) {
    console.error(`Error updating order in Sanity:`, err);
    return null;
  }
}

export async function fetchCatalogProducts(): Promise<any[]> {
  const client = getSanityClient();
  const query = `*[_type == "product" && !(_id in path("drafts.**"))] {
    productId,
    title,
    price,
    description,
    "imageUrl": image.asset->url,
    "image2Url": image2.asset->url,
    "image3Url": image3.asset->url,
    tags,
    collection
  }`;
  try {
    return await client.fetch(query);
  } catch (e) {
    console.error("Error fetching catalog from Sanity:", e);
    return [];
  }
}
