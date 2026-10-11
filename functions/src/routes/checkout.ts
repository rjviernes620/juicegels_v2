import { Router, Request, Response } from "express";
import { CONFIG } from "../config.js";
import { isMaintenanceActive } from "../services/firestore.js";
import { verifyTurnstile } from "../utils/security.js";
import {
  getStripeClient,
  resolveCouponSummary,
  isFirstTimeBuyer,
  resolveShippingOption
} from "../utils/stripeHelpers.js";

export const checkoutRouter = Router();

function buildCheckoutItemsParam(items: any[]): string {
  const parts: string[] = [];
  for (const item of items) {
    const prod = item.product || {};
    const prodId = encodeURIComponent(String(prod.id || "").trim());
    const shape = encodeURIComponent(String(item.shape || "").trim());
    const length = encodeURIComponent(String(item.length || "").trim());
    const qty = encodeURIComponent(String(parseInt(item.quantity, 10) || 1));
    parts.push([prodId, shape, length, qty].join("|"));
  }
  return parts.join(",");
}

checkoutRouter.post(["/create-checkout-session", "/api/create-checkout-session"], async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body || {};
    const turnstileToken = payload.turnstileToken;

    const isExpressCheckout = turnstileToken === "Bypassed_For_Express_Checkout";
    if (!isExpressCheckout) {
      const remoteIp = (req.headers["x-forwarded-for"] as string || req.socket.remoteAddress || "").split(",")[0].trim();
      const isValid = await verifyTurnstile(turnstileToken, remoteIp);
      if (!isValid) {
        res.status(400).json({ error: "Security check failed. Please complete the security check." });
        return;
      }
    }

    const items = payload.items || [];
    const form = payload.form || {};
    const rawCouponCode = payload.coupon || "";
    let shippingOptionId = payload.shippingOptionId || "";
    const origin = (req.headers.origin as string) || "https://juicegels.com";
    const itemsParam = buildCheckoutItemsParam(items);

    const maintenanceActive = await isMaintenanceActive();
    const stripe = getStripeClient(maintenanceActive);

    let subtotalPence = 0;
    const lineItems: any[] = [];

    for (const item of items) {
      const product = item.product || {};
      const shape = item.shape || "";
      const length = item.length || "";
      const quantity = parseInt(item.quantity, 10) || 1;
      const name = product.name || "Product";
      const price = parseFloat(product.price) || 0;
      const imageUrl = product.image || "";
      const unitAmount = Math.round(price * 100);
      subtotalPence += unitAmount * quantity;

      const isSizeGuide = product.id === CONFIG.NAIL_SIZE_GUIDE_PRODUCT_ID || name.toLowerCase().includes("nail sizing guide");
      const displayName = isSizeGuide ? name : `${name} - ${shape} - ${length}`.replace(/^ - | - $/g, "");

      let resolvedImg = imageUrl;
      if (resolvedImg && resolvedImg.startsWith("/")) {
        resolvedImg = `${origin}${resolvedImg}`;
      }

      const metadata: Record<string, string> = {
        productid: product.id || ""
      };
      if (!isSizeGuide) {
        metadata.shape = shape;
        metadata.length = length;
      }

      const productData: any = {
        name: displayName,
        metadata
      };
      if (resolvedImg) {
        productData.images = [resolvedImg];
      }

      lineItems.push({
        price_data: {
          currency: "gbp",
          unit_amount: unitAmount,
          product_data: productData
        },
        quantity
      });
    }

    let couponSummary: any = null;
    if (rawCouponCode) {
      try {
        couponSummary = await resolveCouponSummary(stripe, rawCouponCode, subtotalPence);
      } catch (err: any) {
        res.status(400).json({ error: err.message || "Invalid coupon" });
        return;
      }
    }

    const customerEmail = (form.email || "").trim();
    let hasSizeGuide = false;
    let hasNailSet = false;
    let sizeGuideDiscountPence = 0;

    for (const item of items) {
      const product = item.product || {};
      const isSizeGuide = product.id === CONFIG.NAIL_SIZE_GUIDE_PRODUCT_ID || (product.name || "").toLowerCase().includes("nail sizing guide");
      if (isSizeGuide) {
        hasSizeGuide = true;
        const price = parseFloat(product.price) || 0;
        sizeGuideDiscountPence = Math.round(price * 100);
      } else {
        hasNailSet = true;
      }
    }

    let applySizeGuideCoupon = false;
    if (hasSizeGuide && hasNailSet && customerEmail) {
      if (await isFirstTimeBuyer(stripe, customerEmail)) {
        applySizeGuideCoupon = true;
      }
    }

    let discountedSubtotalPence = subtotalPence;
    if (couponSummary) {
      discountedSubtotalPence -= couponSummary.discount_pence;
    } else if (applySizeGuideCoupon) {
      discountedSubtotalPence -= sizeGuideDiscountPence;
    }
    discountedSubtotalPence = Math.max(0, discountedSubtotalPence);

    const country = String(form.country || "GB").trim();
    const isEmbedded = Boolean(payload.embedded);
    if (isEmbedded && !shippingOptionId) {
      shippingOptionId = "tracked48";
    }

    const shippingOption = resolveShippingOption(
      shippingOptionId,
      discountedSubtotalPence,
      country,
      maintenanceActive
    );

    const metadata: Record<string, string> = {
      first_name: form.firstName || "",
      last_name: form.lastName || "",
      phone: form.phone || "",
      instagram: form.instagram || "",
      contact_preference: form.contactMethod || "instagram",
      notes: form.notes || "",
      shipping_address: form.address || "",
      shipping_city: form.city || "",
      shipping_postcode: form.postcode || "",
      shipping_country: country,
      coupon_code: couponSummary ? couponSummary.code : applySizeGuideCoupon ? "SIZEGUIDEFREE" : "",
      shipping_option_id: shippingOption.id,
      shipping_method: shippingOption.label,
      shipping_amount_pence: String(shippingOption.amount_pence),
      items: itemsParam
    };

    if (isEmbedded) {
      const intentParams: any = {
        amount: discountedSubtotalPence + shippingOption.amount_pence,
        currency: "gbp",
        metadata,
        automatic_payment_methods: { enabled: true }
      };
      if (customerEmail) {
        intentParams.receipt_email = customerEmail;
      }
      const intent = await stripe.paymentIntents.create(intentParams);
      res.json({ clientSecret: intent.client_secret });
      return;
    }

    const sessionParams: any = {
      line_items: lineItems,
      customer_email: customerEmail || undefined,
      billing_address_collection: "required",
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingOption.amount_pence,
              currency: "gbp"
            },
            display_name: shippingOption.label
          }
        }
      ],
      metadata,
      mode: "payment",
      success_url: `${origin}/confirmation?checkout=success&session_id={CHECKOUT_SESSION_ID}&items=${itemsParam}`,
      cancel_url: `${origin}/basket?items=${itemsParam}`
    };

    if (couponSummary) {
      if (couponSummary.promotion_code_id) {
        sessionParams.discounts = [{ promotion_code: couponSummary.promotion_code_id }];
      } else if (couponSummary.coupon_id) {
        sessionParams.discounts = [{ coupon: couponSummary.coupon_id }];
      }
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    res.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message || "Failed to create checkout session" });
  }
});

checkoutRouter.post(["/validate-coupon", "/api/validate-coupon"], async (req: Request, res: Response): Promise<void> => {
  try {
    const code = (req.body?.coupon || req.body?.code || "").trim();
    const subtotalPence = parseInt(req.body?.subtotalPence, 10) || 0;

    if (!code) {
      res.status(400).json({ error: "Coupon code is required" });
      return;
    }

    const maintenanceActive = await isMaintenanceActive();
    const stripe = getStripeClient(maintenanceActive);

    const summary = await resolveCouponSummary(stripe, code, subtotalPence);
    res.json({
      valid: true,
      code: summary.code,
      discount_pence: summary.discount_pence,
      percent_off: summary.percent_off,
      amount_off_pence: summary.amount_off_pence
    });
  } catch (err: any) {
    res.status(400).json({ valid: false, error: err.message || "Invalid coupon code" });
  }
});

checkoutRouter.post(["/check-eligibility", "/api/check-eligibility"], async (req: Request, res: Response): Promise<void> => {
  try {
    const email = (req.body?.email || "").trim();
    if (!email) {
      res.status(400).json({ eligible: false, message: "Email required" });
      return;
    }

    const maintenanceActive = await isMaintenanceActive();
    const stripe = getStripeClient(maintenanceActive);

    const eligible = await isFirstTimeBuyer(stripe, email);
    res.json({ eligible });
  } catch (err: any) {
    console.error("Error checking eligibility:", err);
    res.status(500).json({ eligible: false, error: err.message });
  }
});

checkoutRouter.get("/api/checkout-session/:sessionId", async (req: Request, res: Response): Promise<void> => {
  try {
    const sessionId = Array.isArray(req.params.sessionId) ? req.params.sessionId[0] : req.params.sessionId;
    const maintenanceActive = await isMaintenanceActive();
    const stripe = getStripeClient(maintenanceActive);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["customer_details", "line_items"]
    });
    res.json(session);
  } catch (err: any) {
    console.error("Error retrieving checkout session:", err);
    res.status(500).json({ error: err.message || "Failed to retrieve session" });
  }
});

checkoutRouter.get("/api/payment-intent/:intentId", async (req: Request, res: Response): Promise<void> => {
  try {
    const intentId = Array.isArray(req.params.intentId) ? req.params.intentId[0] : req.params.intentId;
    const maintenanceActive = await isMaintenanceActive();
    const stripe = getStripeClient(maintenanceActive);

    const intent = await stripe.paymentIntents.retrieve(intentId);
    res.json(intent);
  } catch (err: any) {
    console.error("Error retrieving payment intent:", err);
    res.status(500).json({ error: err.message || "Failed to retrieve payment intent" });
  }
});

checkoutRouter.post(["/create-custom-order", "/api/create-custom-order"], async (req: Request, res: Response): Promise<void> => {
  const payload = req.body || {};
  const turnstileToken = payload.turnstileToken;
  const remoteIp = (req.headers["x-forwarded-for"] as string || req.socket.remoteAddress || "").split(",")[0].trim();

  const isValid = await verifyTurnstile(turnstileToken, remoteIp);
  if (!isValid) {
    res.status(400).json({ error: "Security check failed." });
    return;
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const instagram = String(payload.instagram || "").trim();
  const details = String(payload.details || "").trim();

  if (!name || !email || !instagram || !details) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  console.log(`Received custom order request from ${name} (${email}, @${instagram})`);
  res.json({ success: true });
});
