import Stripe from "stripe";
import { CONFIG } from "../config.js";

export function getStripeClient(isTestMode = false): Stripe {
  const secretKey = isTestMode ? CONFIG.STRIPE_TEST_SECRET_KEY : CONFIG.STRIPE_SECRET_KEY;
  const keyToUse = secretKey || CONFIG.STRIPE_SECRET_KEY || CONFIG.STRIPE_TEST_SECRET_KEY;
  if (!keyToUse) {
    throw new Error("No Stripe secret key configured.");
  }
  return new Stripe(keyToUse, {
    apiVersion: "2025-02-24.acacia" as any
  });
}

export interface CouponSummary {
  code: string;
  discount_pence: number;
  percent_off?: number;
  amount_off_pence?: number;
  coupon_id?: string;
  promotion_code_id?: string;
}

export function normalizeCouponCode(code: string): string {
  return (code || "").trim().toUpperCase();
}

export function isHalloweenCoupon(code: string): boolean {
  const norm = (code || "").trim().toLowerCase();
  return (
    norm === "eu3xxiba" ||
    norm === "halloween" ||
    norm === "halloween20" ||
    norm === "halloweensale" ||
    norm === "spooky" ||
    norm === "juiceghouls" ||
    norm === "juice ghouls" ||
    norm === "coven"
  );
}

export async function resolveCouponSummary(
  stripe: Stripe,
  rawCode: string,
  subtotalPence: number
): Promise<CouponSummary> {
  const trimmed = (rawCode || "").trim();
  if (!trimmed) {
    throw new Error("Enter a coupon code.");
  }

  const normalized = normalizeCouponCode(trimmed);
  let promotionCode: Stripe.PromotionCode | null = null;
  let coupon: Stripe.Coupon | null = null;

  // Handle Halloween special promo
  if (isHalloweenCoupon(trimmed)) {
    try {
      coupon = await stripe.coupons.retrieve("eU3xxIba");
    } catch {
      // Fallback 20% off
      return {
        code: "Juice Ghouls (20% OFF)",
        discount_pence: Math.round(subtotalPence * 0.2),
        percent_off: 20,
        coupon_id: "eU3xxIba"
      };
    }
  }

  if (!coupon) {
    try {
      const promoList = await stripe.promotionCodes.list({
        code: normalized,
        active: true,
        limit: 5,
        expand: ["data.coupon"]
      });
      if (promoList.data.length > 0) {
        promotionCode = promoList.data[0];
        coupon = promotionCode.coupon;
      }
    } catch {
      // Continue to try direct coupon
    }
  }

  if (!coupon) {
    try {
      coupon = await stripe.coupons.retrieve(trimmed);
    } catch {
      try {
        coupon = await stripe.coupons.retrieve(normalized);
      } catch {
        throw new Error("Coupon code is invalid or has expired.");
      }
    }
  }

  if (!coupon.valid) {
    throw new Error("This coupon is no longer valid.");
  }

  let discountPence = 0;
  if (coupon.percent_off) {
    discountPence = Math.round(subtotalPence * (coupon.percent_off / 100));
  } else if (coupon.amount_off) {
    discountPence = coupon.amount_off;
  }

  discountPence = Math.min(discountPence, subtotalPence);

  return {
    code: promotionCode ? promotionCode.code : (coupon.name || coupon.id),
    discount_pence: discountPence,
    percent_off: coupon.percent_off || undefined,
    amount_off_pence: coupon.amount_off || undefined,
    coupon_id: coupon.id,
    promotion_code_id: promotionCode?.id
  };
}

export async function isFirstTimeBuyer(stripe: Stripe, email: string): Promise<boolean> {
  if (!email || !email.includes("@")) return false;

  try {
    const customers = await stripe.customers.list({
      email: email.trim().toLowerCase(),
      limit: 5
    });

    if (customers.data.length === 0) {
      return true;
    }

    for (const cust of customers.data) {
      const charges = await stripe.charges.list({
        customer: cust.id,
        limit: 10
      });
      const hasPaid = charges.data.some((c) => c.status === "succeeded" && c.paid);
      if (hasPaid) return false;
    }

    return true;
  } catch (err) {
    console.error("Error checking first time buyer:", err);
    return false;
  }
}

export interface ShippingOption {
  id: "tracked24" | "tracked48" | "international";
  label: string;
  amount_pence: number;
  stripe_shipping_rate_id: string;
}

export function resolveShippingOption(
  optionId: string,
  subtotalPence: number,
  country: string,
  isTestMode = false,
  hasFreeShippingCoupon = false
): ShippingOption {
  const isUK = country.toUpperCase() === "GB" || country.toUpperCase() === "UK";

  if (!isUK) {
    const rateId = isTestMode ? "shr_1TlIyvK9S4gHGvxwwsl3tfgS" : "shr_1To72LK4CROOpWXUQ4DKmzFE";
    return {
      id: "international",
      label: "International Tracked",
      amount_pence: 1000,
      stripe_shipping_rate_id: rateId
    };
  }

  const qualifiesForFreeTracked48 = subtotalPence >= CONFIG.FREE_TRACKED48_THRESHOLD_PENCE || hasFreeShippingCoupon;

  if (optionId === "tracked24") {
    const rateId = isTestMode ? "shr_1TjOFhK9S4gHGvxwGcIJ8ICh" : "shr_1Ti0hyK4CROOpWXUhiIhLqWy";
    return {
      id: "tracked24",
      label: "Royal Mail Tracked 24",
      amount_pence: 400,
      stripe_shipping_rate_id: rateId
    };
  }

  // Default to Tracked 48
  const rateId = isTestMode ? "shr_1TjOJVK9S4gHGvxRClQMfr1" : "shr_1Ti0ieK4CROOpWXU5Cbop3Ii";
  return {
    id: "tracked48",
    label: qualifiesForFreeTracked48 ? "Royal Mail Tracked 48 (Free)" : "Royal Mail Tracked 48",
    amount_pence: qualifiesForFreeTracked48 ? 0 : 300,
    stripe_shipping_rate_id: rateId
  };
}
