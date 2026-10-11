import Stripe from "stripe";
import { CONFIG } from "../config.js";
export function getStripeClient(isTestMode = false) {
    const secretKey = isTestMode ? CONFIG.STRIPE_TEST_SECRET_KEY : CONFIG.STRIPE_SECRET_KEY;
    const keyToUse = secretKey || CONFIG.STRIPE_SECRET_KEY || CONFIG.STRIPE_TEST_SECRET_KEY;
    if (!keyToUse) {
        throw new Error("No Stripe secret key configured.");
    }
    return new Stripe(keyToUse, {
        apiVersion: "2025-02-24.acacia"
    });
}
export function normalizeCouponCode(code) {
    return (code || "").trim().toUpperCase();
}
export const HALLOWEEN_SET_BASE_IDS = [2447, 2462, 2477, 2492, 1277, 1247, 196, 1262];
export const HALLOWEEN_SET_NAMES = [
    "booquette",
    "scream queen",
    "hello horror",
    "boo belle",
    "pink-o-ween",
    "sparkle scream",
    "pearl noir",
    "midnight muse"
];
export function isHalloweenProduct(product) {
    if (!product)
        return false;
    const col = (product.collection || "").toLowerCase();
    if (col.includes("halloween") || col.includes("juice ghouls"))
        return true;
    if (product.tags?.some((t) => /halloween|juice ghouls/i.test(t)))
        return true;
    if (product.groupId) {
        const g = product.groupId.toLowerCase();
        if (HALLOWEEN_SET_NAMES.some((n) => g.includes(n.replace(/\s+/g, ""))))
            return true;
    }
    if (product.id) {
        const num = parseInt(String(product.id).replace(/\D/g, ""), 10);
        if (!isNaN(num)) {
            for (const base of HALLOWEEN_SET_BASE_IDS) {
                if (num >= base && num < base + 15)
                    return true;
            }
        }
    }
    if (product.name) {
        const lower = product.name.trim().toLowerCase();
        if (lower.includes("halloween") || lower.includes("juice ghouls"))
            return true;
        if (HALLOWEEN_SET_NAMES.some((n) => lower.includes(n)))
            return true;
    }
    return false;
}
export function isHalloweenCoupon(code) {
    const norm = (code || "").trim().toLowerCase();
    return (norm === "eu3xxiba" ||
        norm === "halloween" ||
        norm === "halloween20" ||
        norm === "halloweensale" ||
        norm === "spooky" ||
        norm === "juiceghouls" ||
        norm === "juice ghouls" ||
        norm === "coven");
}
export async function resolveCouponSummary(stripe, rawCode, subtotalPence, items = []) {
    const trimmed = (rawCode || "").trim();
    if (!trimmed) {
        throw new Error("Enter a coupon code.");
    }
    const normalized = normalizeCouponCode(trimmed);
    let promotionCode = null;
    let coupon = null;
    // Handle Halloween special promo: discount is calculated PER HALLOWEEN PRODUCT rather than whole basket
    if (isHalloweenCoupon(trimmed)) {
        let halloweenSubtotalPence = 0;
        if (items && items.length > 0) {
            for (const item of items) {
                const prod = item.product || {};
                if (isHalloweenProduct(prod)) {
                    const pricePence = Math.round((parseFloat(prod.price) || 0) * 100);
                    const qty = parseInt(item.quantity, 10) || 1;
                    halloweenSubtotalPence += pricePence * qty;
                }
            }
        }
        else {
            halloweenSubtotalPence = subtotalPence;
        }
        const discountPence = Math.round(halloweenSubtotalPence * 0.2);
        return {
            code: "Juice Ghouls (20% OFF)",
            discount_pence: discountPence,
            percent_off: 20,
            coupon_id: "eU3xxIba"
        };
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
        }
        catch {
            // Continue to try direct coupon
        }
    }
    if (!coupon) {
        try {
            coupon = await stripe.coupons.retrieve(trimmed);
        }
        catch {
            try {
                coupon = await stripe.coupons.retrieve(normalized);
            }
            catch {
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
    }
    else if (coupon.amount_off) {
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
export async function isFirstTimeBuyer(stripe, email) {
    if (!email || !email.includes("@"))
        return false;
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
            if (hasPaid)
                return false;
        }
        return true;
    }
    catch (err) {
        console.error("Error checking first time buyer:", err);
        return false;
    }
}
export function resolveShippingOption(optionId, subtotalPence, country, isTestMode = false, hasFreeShippingCoupon = false) {
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
//# sourceMappingURL=stripeHelpers.js.map