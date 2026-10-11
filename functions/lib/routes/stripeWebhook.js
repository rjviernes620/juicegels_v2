import { Router } from "express";
import { CONFIG } from "../config.js";
import { getStripeClient } from "../utils/stripeHelpers.js";
import { getNextOrderNumber, saveOrderToFirestore, isMaintenanceActive } from "../services/firestore.js";
import { saveOrderToSanity } from "../services/sanity.js";
import { sendCustomerOrderEmail, sendStoreOwnerOrderEmail } from "../services/email.js";
export const stripeWebhookRouter = Router();
function formatMoney(amountPence, currency = "gbp") {
    const symbol = currency.toLowerCase() === "gbp" ? "£" : "$";
    return `${symbol}${(amountPence / 100).toFixed(2)}`;
}
async function processCompletedSession(session, stripe) {
    const metadata = session.metadata || {};
    const isLive = session.livemode;
    const lineItemsList = await stripe.checkout.sessions.listLineItems(session.id, {
        limit: 100,
        expand: ["data.price.product"]
    });
    const lineItems = lineItemsList.data.map((item) => {
        const product = item.price?.product;
        const img = product?.images?.[0] || "";
        const unitPence = item.price?.unit_amount || 0;
        const qty = item.quantity || 1;
        return {
            description: item.description || "Nail Set",
            quantity: qty,
            unit_price: formatMoney(unitPence, session.currency || "gbp"),
            line_total: formatMoney(unitPence * qty, session.currency || "gbp"),
            image: img,
            imageUrl: img
        };
    });
    const customerDetails = session.customer_details || {};
    const shippingDetails = session.shipping_details || {};
    const shippingAddress = shippingDetails.address || customerDetails.address || {};
    const addressStr = [
        shippingAddress.line1,
        shippingAddress.line2,
        shippingAddress.city,
        shippingAddress.state,
        shippingAddress.postal_code,
        shippingAddress.country
    ]
        .filter(Boolean)
        .join(", ");
    const subtotalPence = session.amount_subtotal || 0;
    const totalPence = session.amount_total || 0;
    const discountPence = session.total_details?.amount_discount || 0;
    const shippingPence = session.total_details?.amount_shipping || 0;
    const orderNumber = await getNextOrderNumber(isLive);
    const orderSummary = {
        session_id: session.id,
        order_number: orderNumber,
        created_at: new Date(session.created * 1000).toISOString(),
        payment_status: session.payment_status || "paid",
        currency: (session.currency || "gbp").toUpperCase(),
        subtotal: formatMoney(subtotalPence, session.currency || "gbp"),
        discount: discountPence > 0 ? `-${formatMoney(discountPence, session.currency || "gbp")}` : "£0.00",
        shipping: formatMoney(shippingPence, session.currency || "gbp"),
        total: formatMoney(totalPence, session.currency || "gbp"),
        coupon_code: metadata.coupon_code || "",
        first_name: metadata.first_name || customerDetails.name?.split(" ")[0] || "",
        last_name: metadata.last_name || customerDetails.name?.split(" ").slice(1).join(" ") || "",
        customer_email: customerDetails.email || session.customer_email || "",
        phone: customerDetails.phone || metadata.phone || "",
        instagram: metadata.instagram || "",
        contact_preference: metadata.contact_preference || "instagram",
        notes: metadata.notes || "",
        shipping_method: metadata.shipping_method || "Standard Delivery",
        shipping_address: addressStr,
        billing_address: addressStr,
        payment_method_type: session.payment_method_types?.[0] || "card",
        livemode: isLive,
        line_items: lineItems
    };
    console.log(`Saving order ${orderNumber} (${session.id}) to Cloud Firestore...`);
    await saveOrderToFirestore(orderSummary);
    console.log(`Mirroring order ${orderNumber} to Sanity CMS...`);
    await saveOrderToSanity(orderSummary);
    console.log(`Dispatching confirmation emails for order ${orderNumber}...`);
    await Promise.allSettled([
        sendCustomerOrderEmail(orderSummary),
        sendStoreOwnerOrderEmail(orderSummary)
    ]);
}
stripeWebhookRouter.post(["/stripe-webhook", "/api/stripe-webhook"], async (req, res) => {
    const signature = req.headers["stripe-signature"];
    if (!signature) {
        res.status(400).json({ error: "Missing Stripe signature." });
        return;
    }
    const maintenanceActive = await isMaintenanceActive();
    const stripe = getStripeClient(maintenanceActive);
    const primarySecret = maintenanceActive
        ? CONFIG.STRIPE_TEST_WEBHOOK_SECRET || CONFIG.STRIPE_WEBHOOK_SECRET
        : CONFIG.STRIPE_WEBHOOK_SECRET || CONFIG.STRIPE_TEST_WEBHOOK_SECRET;
    const altSecret = maintenanceActive
        ? CONFIG.STRIPE_WEBHOOK_SECRET
        : CONFIG.STRIPE_TEST_WEBHOOK_SECRET;
    let event = null;
    const rawBody = req.rawBody || req.body;
    try {
        event = stripe.webhooks.constructEvent(rawBody, signature, primarySecret);
    }
    catch (err) {
        if (altSecret && altSecret !== primarySecret) {
            try {
                event = stripe.webhooks.constructEvent(rawBody, signature, altSecret);
            }
            catch {
                res.status(400).json({ error: "Invalid webhook signature." });
                return;
            }
        }
        else {
            res.status(400).json({ error: "Invalid webhook signature." });
            return;
        }
    }
    if (!event) {
        res.status(400).json({ error: "Could not construct webhook event." });
        return;
    }
    console.log(`Received Stripe Webhook event: ${event.type} (${event.id})`);
    try {
        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            if (session.payment_status === "paid") {
                await processCompletedSession(session, stripe);
            }
        }
        res.json({ received: true });
    }
    catch (error) {
        console.error(`Error processing Stripe event ${event.id}:`, error);
        res.status(500).json({ error: "Error processing webhook." });
    }
});
//# sourceMappingURL=stripeWebhook.js.map