import * as fs from "fs";
import * as path from "path";
import { CONFIG } from "../config.js";
import { OrderSummary } from "./firestore.js";

function getTemplatesDir(): string {
  const candidateDirs = [
    path.join(process.cwd(), "templates"),
    path.join(process.cwd(), "functions", "templates"),
    path.join(process.cwd(), "lib", "templates")
  ];

  for (const dir of candidateDirs) {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      return dir;
    }
  }
  return path.join(process.cwd(), "templates");
}

function loadEmailTemplate(filename: string): string {
  const templatePath = path.join(getTemplatesDir(), filename);
  if (fs.existsSync(templatePath)) {
    return fs.readFileSync(templatePath, "utf-8");
  }
  console.warn(`Template file ${filename} not found at ${templatePath}. Using fallback template.`);
  return "";
}

function escapeHtml(str: any): string {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendPingramNotification(payload: {
  toEmail: string;
  subject: string;
  htmlContent: string;
  senderName?: string;
  senderEmail?: string;
}): Promise<boolean> {
  const apiKey = CONFIG.PINGRAM_API_KEY;
  if (!apiKey) {
    console.warn("PINGRAM_API_KEY is not configured. Skipping email dispatch.");
    return false;
  }

  const endpoint = `${CONFIG.PINGRAM_BASE_URL.replace(/\/+$/, "")}/send`;
  const body = {
    type: "email_compose_preview",
    to: {
      email: payload.toEmail
    },
    email: {
      subject: payload.subject,
      html: payload.htmlContent,
      senderName: payload.senderName || CONFIG.PINGRAM_FROM_NAME,
      senderEmail: payload.senderEmail || CONFIG.PINGRAM_FROM_EMAIL
    }
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`Pingram email API error (Status ${res.status}): ${errText}`);
      return false;
    }

    console.log(`Pingram email successfully sent to ${payload.toEmail}`);
    return true;
  } catch (error) {
    console.error("Failed to call Pingram API:", error);
    return false;
  }
}

export function buildCustomerItemsTable(items: OrderSummary["line_items"]): string {
  if (!items || items.length === 0) {
    return `<p style="margin:0 0 24px; color:#4f444a; font-style:italic;">No items found in this order.</p>`;
  }

  const rows = items
    .map(
      (item) => `
    <tr>
      <td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); font-weight:500; font-size:15px; color:#3d1a24;">${escapeHtml(item.description)}</td>
      <td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:center; font-size:15px; color:#4f444a;">${escapeHtml(item.quantity)}</td>
      <td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:right; font-size:15px; color:#4f444a;">${escapeHtml(item.unit_price)}</td>
      <td style="padding:12px 10px; border-bottom:1px solid rgba(212, 84, 122, 0.15); text-align:right; font-weight:500; font-size:15px; color:#3d1a24;">${escapeHtml(item.line_total)}</td>
    </tr>`
    )
    .join("");

  return `
    <table style="border-collapse:collapse; width:100%; margin:0 0 10px;">
      <thead>
        <tr>
          <th style="text-align:left; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase;">Item</th>
          <th style="text-align:center; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:60px;">Qty</th>
          <th style="text-align:right; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:80px;">Unit</th>
          <th style="text-align:right; padding:12px 10px; border-bottom:2px solid #fc6587; color:#fc6587; font-weight:700; font-size:14px; text-transform:uppercase; width:80px;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>`;
}

export async function sendCustomerOrderEmail(orderSummary: OrderSummary): Promise<boolean> {
  const customerEmail = (orderSummary.customer_email || "").trim();
  if (!customerEmail) {
    console.warn("Customer email is missing. Skipping customer confirmation email.");
    return false;
  }

  const rawTemplate = loadEmailTemplate("order_confirmation.html");
  const customerName = `${orderSummary.first_name || ""} ${orderSummary.last_name || ""}`.trim() || "Customer";
  const instagram = orderSummary.instagram ? `@${orderSummary.instagram.replace(/^@/, "")}` : "your email";

  let htmlContent = rawTemplate
    ? rawTemplate
        .replace(/Jane Doe/g, escapeHtml(customerName))
        .replace(/@jane_nails/g, escapeHtml(instagram))
        .replace(/£45\.00/g, escapeHtml(orderSummary.subtotal))
        .replace(/-£9\.00/g, escapeHtml(orderSummary.discount || "£0.00"))
        .replace(/£4\.00/g, escapeHtml(orderSummary.shipping || "£0.00"))
        .replace(/£40\.00/g, escapeHtml(orderSummary.total))
    : `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Order Confirmation - Juice Gels</h2>
        <p>Hi ${escapeHtml(customerName)},</p>
        <p>Thank you for your order! Your payment was successful.</p>
        <p><strong>Order Number:</strong> ${escapeHtml(orderSummary.order_number || orderSummary.session_id)}</p>
        <p><strong>Total:</strong> ${escapeHtml(orderSummary.total)}</p>
        ${buildCustomerItemsTable(orderSummary.line_items)}
      </div>`;

  return sendPingramNotification({
    toEmail: customerEmail,
    subject: `Order Confirmed - Juice Gels (${orderSummary.order_number || orderSummary.session_id})`,
    htmlContent
  });
}

export async function sendStoreOwnerOrderEmail(orderSummary: OrderSummary): Promise<boolean> {
  const recipient = CONFIG.PINGRAM_ORDER_RECIPIENT;
  const orderId = orderSummary.order_number || orderSummary.session_id;
  const customerName = `${orderSummary.first_name || ""} ${orderSummary.last_name || ""}`.trim();

  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
      <h2 style="color: #fc6587;">New Juice Gels Order Received! 💅</h2>
      <p><strong>Order ID:</strong> ${escapeHtml(orderId)}</p>
      <p><strong>Customer:</strong> ${escapeHtml(customerName)} (${escapeHtml(orderSummary.customer_email)})</p>
      <p><strong>Instagram:</strong> ${escapeHtml(orderSummary.instagram || "None")}</p>
      <p><strong>Contact Preference:</strong> ${escapeHtml(orderSummary.contact_preference || "instagram")}</p>
      <p><strong>Total Paid:</strong> ${escapeHtml(orderSummary.total)} (${escapeHtml(orderSummary.currency)})</p>
      <p><strong>Shipping:</strong> ${escapeHtml(orderSummary.shipping_method)} - ${escapeHtml(orderSummary.shipping_address)}</p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
      <h3>Ordered Items:</h3>
      ${buildCustomerItemsTable(orderSummary.line_items)}
    </div>`;

  return sendPingramNotification({
    toEmail: recipient,
    subject: `🎉 New Order: ${orderId} (${orderSummary.total}) - ${customerName}`,
    htmlContent
  });
}

export async function sendOrderDispatchedEmail(
  order: Record<string, any>,
  trackingNumber?: string,
  carrier?: string
): Promise<boolean> {
  const email = order.customer?.email || order.customer_email;
  if (!email) return false;

  const rawTemplate = loadEmailTemplate("order_despatched.html");
  const customerName = `${order.customer?.firstName || order.first_name || ""} ${order.customer?.lastName || order.last_name || ""}`.trim() || "Customer";
  const orderId = order.orderId || order.order_number || order.stripeSessionId || "";

  let htmlContent = rawTemplate
    ? rawTemplate
        .replace(/Jane Doe/g, escapeHtml(customerName))
        .replace(/JG-0000/g, escapeHtml(orderId))
        .replace(/TRACKING_NUMBER_PLACEHOLDER/g, escapeHtml(trackingNumber || "N/A"))
        .replace(/CARRIER_PLACEHOLDER/g, escapeHtml(carrier || "Royal Mail"))
    : `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Your Juice Gels Order has Dispatched! 📦</h2>
        <p>Hi ${escapeHtml(customerName)},</p>
        <p>Your custom press-on nails are on their way!</p>
        <p><strong>Order:</strong> ${escapeHtml(orderId)}</p>
        <p><strong>Carrier:</strong> ${escapeHtml(carrier || "Royal Mail")}</p>
        <p><strong>Tracking Number:</strong> ${escapeHtml(trackingNumber || "N/A")}</p>
      </div>`;

  return sendPingramNotification({
    toEmail: email,
    subject: `Your Juice Gels Order has been Dispatched! (${orderId})`,
    htmlContent
  });
}

export async function sendOrderDeliveredEmail(
  order: Record<string, any>,
  trackingNumber?: string,
  carrier?: string
): Promise<boolean> {
  const email = order.customer?.email || order.customer_email;
  if (!email) return false;

  const rawTemplate = loadEmailTemplate("order_delivered.html");
  const customerName = `${order.customer?.firstName || order.first_name || ""} ${order.customer?.lastName || order.last_name || ""}`.trim() || "Customer";
  const orderId = order.orderId || order.order_number || order.stripeSessionId || "";

  let htmlContent = rawTemplate
    ? rawTemplate
        .replace(/Jane Doe/g, escapeHtml(customerName))
        .replace(/JG-0000/g, escapeHtml(orderId))
    : `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Your Juice Gels Order has Delivered! 🎉</h2>
        <p>Hi ${escapeHtml(customerName)},</p>
        <p>Your order ${escapeHtml(orderId)} has been successfully delivered. We hope you love your new nails!</p>
      </div>`;

  return sendPingramNotification({
    toEmail: email,
    subject: `Delivered: Your Juice Gels Order (${orderId})`,
    htmlContent
  });
}
