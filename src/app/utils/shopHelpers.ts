import { type Product } from "./parseProducts";
import { EUROPEAN_COUNTRIES } from "./countries";
import {
  type CartItem,
  type NailLength,
  type ShippingOption,
  type ShippingOptionId,
  type CollectionDetails
} from "../types";

export const LOCKED_VARIATION_PRODUCT_IDS = new Set(["JUICEGELS-0286"]);
export const META_CART_ORIGIN = "meta_shops";
export const CHECKOUT_API_BASE = import.meta.env.VITE_CHECKOUT_API_BASE ||
  (import.meta.env.DEV ? "http://localhost:4000" : "https://juicegels-backend-41674538724.europe-west1.run.app");
export const isLocalDev = () =>
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

export const SHIPPING_FREE_THRESHOLD = 30;
export const SHIPPING_RATE_IDS: Record<ShippingOptionId, string> = {
  tracked24: isLocalDev() ? "shr_1TjOFhK9S4gHGvxwGcIJ8ICh" : "shr_1Ti0hyK4CROOpWXUhiIhLqWy",
  tracked48: isLocalDev() ? "shr_1TjOJVK9S4gHGvxRClQMfr1" : "shr_1Ti0ieK4CROOpWXU5Cbop3Ii",
  international: isLocalDev() ? "shr_1TlIyvK9S4gHGvxwwsl3tfgS" : "shr_1To72LK4CROOpWXUQ4DKmzFE",
};

export const STRIPE_FREE_SHIPPING_PROMO_ID = isLocalDev()
  ? (import.meta.env.VITE_STRIPE_FREE_SHIPPING_PROMO_ID || "promo_1ToCW2K4CROOpWXUXvpVGOFN")
  : (import.meta.env.VITE_STRIPE_FREE_SHIPPING_PROMO_ID_LIVE || "");

export function getStripeShippingRateIds(stripePublishableKey?: string): Record<ShippingOptionId, string> {
  const isTestMode = stripePublishableKey
    ? stripePublishableKey.startsWith("pk_test")
    : isLocalDev();
  return {
    tracked24: isTestMode ? "shr_1TjOFhK9S4gHGvxwGcIJ8ICh" : "shr_1Ti0hyK4CROOpWXUhiIhLqWy",
    tracked48: isTestMode ? "shr_1TjOJVK9S4gHGvxRClQMfr1" : "shr_1Ti0ieK4CROOpWXU5Cbop3Ii",
    international: isTestMode ? "shr_1TlIyvK9S4gHGvxwwsl3tfgS" : "shr_1To72LK4CROOpWXUQ4DKmzFE",
  };
}

export function getStripeFreeShippingPromoId(stripePublishableKey?: string): string {
  const isTestMode = stripePublishableKey
    ? stripePublishableKey.startsWith("pk_test")
    : isLocalDev();
  return isTestMode
    ? (import.meta.env.VITE_STRIPE_FREE_SHIPPING_PROMO_ID || "promo_1ToCW2K4CROOpWXUXvpVGOFN")
    : (import.meta.env.VITE_STRIPE_FREE_SHIPPING_PROMO_ID_LIVE || "");
}


export const validLengths: NailLength[] = ["Short", "Medium", "Long"];

export function isVariationLocked(product: Product) {
  return LOCKED_VARIATION_PRODUCT_IDS.has(product.id);
}

export function getProductRouteId(product: Product) {
  return product.id;
}

export function getProductShapes(product: Product): string[] {
  const raw = (product as Product & { shapes?: string[] }).shapes;
  return Array.isArray(raw) && raw.length > 0 ? raw : ["Short Almond", "Medium Almond", "Long Almond"];
}

export function getProductLengths(product: Product): NailLength[] {
  const raw = (product as Product & { lengths?: NailLength[] }).lengths;
  return Array.isArray(raw) && raw.length > 0 ? raw : validLengths;
}

export function formatMoney(amount: number) {
  return `£${amount.toFixed(2)}`;
}

export function buildShippingOptions(
  itemsTotal: number,
  country: string,
  isFreeShippingApplied: boolean = false,
  stripePublishableKey?: string
): ShippingOption[] {
  const rateIds = getStripeShippingRateIds(stripePublishableKey);
  if (country === "GB" || !country) {
    const tracked48IsFree = isFreeShippingApplied || itemsTotal >= SHIPPING_FREE_THRESHOLD;

    return [
      {
        id: "tracked48",
        stripeRateId: rateIds.tracked48,
        label: "Royal Mail Tracked 48",
        description: tracked48IsFree
          ? isFreeShippingApplied
            ? "Free shipping applied."
            : `Free on orders of ${formatMoney(SHIPPING_FREE_THRESHOLD)} or more.`
          : "Standard tracked delivery. (Free on Orders over £30)",
        estimate: "Estimated delivery within 2 days after your order is finished.",
        amount: tracked48IsFree ? 0 : 1.99,
        isFree: tracked48IsFree,
      },
      {
        id: "tracked24",
        stripeRateId: rateIds.tracked24,
        label: "Royal Mail Tracked 24",
        description: isFreeShippingApplied ? "Free priority shipping applied." : "Priority tracked delivery.",
        estimate: "Estimated delivery within 1 business day after your order is finished.",
        amount: isFreeShippingApplied ? 0 : 4,
        isFree: isFreeShippingApplied,
      },
    ];
  } else {
    const isEurope = EUROPEAN_COUNTRIES.has(country.toUpperCase());
    const internationalIsFree = isFreeShippingApplied;
    return [
      {
        id: "international",
        stripeRateId: rateIds.international,
        label: "Royal Mail International Tracked",
        description: internationalIsFree ? "Free international shipping applied." : "International tracked delivery.",
        estimate: isEurope
          ? "Estimated delivery within 3-5 business days after your order is finished."
          : "Estimated delivery within 6-7 business days after your order is finished.",
        amount: internationalIsFree ? 0 : 9.50,
        isFree: internationalIsFree,
      },
    ];
  }
}

export function isNailSizeGuideItem(item: CartItem) {
  return item.product.id === "JUICEGELS-0286";
}

export function getCartItemDetailText(item: CartItem) {
  if (isNailSizeGuideItem(item)) {
    return `×${item.quantity} · £${(item.product.price * item.quantity).toFixed(2)}`;
  }

  return `${item.shape} · ${item.length} · ×${item.quantity} · £${(item.product.price * item.quantity).toFixed(2)}`;
}

export function getOrderSummaryLabel(item: CartItem) {
  if (isNailSizeGuideItem(item)) {
    return `${item.product.name} ×${item.quantity}`;
  }

  return `${item.product.name} (${item.shape} · ${item.length}) ×${item.quantity}`;
}

export function normalizeGroupKey(value: string) {
  return value.trim().toLowerCase();
}

export function getCollectionDetails(product: Product, allProducts: Product[]): CollectionDetails | null {
  if (!product.collection) return null;

  const taglines: Record<string, string> = {
    "Kamado Collection": "inspired by the iconic Demon Slayer siblings 🌿🌸",
    "Stargirl Collection": "inspired by celestial beauty ✨🌌",
    "Bloom Collection": "bringing the freshness of spring flowers 🌸🌼",
    "Stardust Collection": "star-studded Sanrio inspired designs 🎀✨",
    "Sweet Mystery Collection": "surprise nail sets full of sweet picks 🍬🎲"
  };

  // Find all unique products in the same collection
  const seen = new Set<string>();
  const otherProducts = allProducts.filter(p => {
    if (!p.collection || p.collection !== product.collection) return false;
    if (p.groupId === product.groupId) return false;

    const key = p.groupId.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return {
    name: product.collection,
    tagline: taglines[product.collection] || "Take a look at the other nails in this collection ✨",
    otherProducts
  };
}

export function getCollectionStyle(collectionName: string) {
  switch (collectionName) {
    case "Kamado Collection":
      return {
        cardGradient: "linear-gradient(135deg, #065f46 0%, #991b1b 100%)",
        bannerBg: "linear-gradient(135deg, rgba(6, 95, 70, 0.12) 0%, rgba(153, 27, 27, 0.12) 100%)",
        border: "rgba(6, 95, 70, 0.28)",
        textColor: "#065f46",
        badgeBg: "rgba(255, 255, 255, 0.18)",
        emoji: "🌿"
      };
    case "Stargirl Collection":
      return {
        cardGradient: "linear-gradient(135deg, #312e81 0%, #4c1d95 100%)",
        bannerBg: "linear-gradient(135deg, rgba(49, 46, 129, 0.12) 0%, rgba(76, 29, 149, 0.12) 100%)",
        border: "rgba(76, 29, 149, 0.28)",
        textColor: "#4c1d95",
        badgeBg: "rgba(255, 255, 255, 0.18)",
        emoji: "✨"
      };
    case "Bloom Collection":
      return {
        cardGradient: "linear-gradient(135deg, #db2777 0%, #f59e0b 100%)",
        bannerBg: "linear-gradient(135deg, rgba(219, 39, 119, 0.12) 0%, rgba(245, 158, 11, 0.12) 100%)",
        border: "rgba(219, 39, 119, 0.28)",
        textColor: "#db2777",
        badgeBg: "rgba(255, 255, 255, 0.22)",
        emoji: "🌸"
      };
    case "Stardust Collection":
      return {
        cardGradient: "linear-gradient(135deg, #111827 0%, #ec4899 100%)",
        bannerBg: "linear-gradient(135deg, rgba(17, 24, 39, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%)",
        border: "rgba(236, 72, 153, 0.28)",
        textColor: "#be185d",
        badgeBg: "rgba(255, 255, 255, 0.18)",
        emoji: "🎀"
      };
    case "Sweet Mystery Collection":
      return {
        cardGradient: "linear-gradient(135deg, #0d9488 0%, #c026d3 100%)",
        bannerBg: "linear-gradient(135deg, rgba(13, 148, 136, 0.12) 0%, rgba(192, 38, 211, 0.12) 100%)",
        border: "rgba(13, 148, 136, 0.28)",
        textColor: "#0d9488",
        badgeBg: "rgba(255, 255, 255, 0.20)",
        emoji: "🍬"
      };
    default:
      return {
        cardGradient: "linear-gradient(135deg, #a855f7 0%, #db2777 100%)",
        bannerBg: "linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(219, 39, 119, 0.12) 100%)",
        border: "rgba(168, 85, 247, 0.28)",
        textColor: "#a855f7",
        badgeBg: "rgba(255, 255, 255, 0.25)",
        emoji: "✨"
      };
  }
}

export function buildMetaBasketProductsParam(items: CartItem[]) {
  return items
    .map((item) => `${encodeURIComponent(item.product.id)}:${encodeURIComponent(String(item.quantity))}`)
    .join(",");
}

export function buildBasketUrl(
  items: CartItem[],
  options?: { coupon?: string | null; includeCoupon?: boolean; cartOrigin?: string | null }
) {
  if (items.length === 0) return "/basket";

  const params = [
    `products=${buildMetaBasketProductsParam(items)}`,
  ];

  if (options?.includeCoupon) {
    params.push(options.coupon ? `coupon=${encodeURIComponent(options.coupon)}` : "coupon");
  }

  if (options?.cartOrigin) {
    params.push(`cart_origin=${encodeURIComponent(options.cartOrigin)}`);
  }

  return `/basket?${params.join("&")}`;
}

export function parseMetaBasketProductsParam(productsParam: string, products: Product[]): CartItem[] {
  return productsParam
    .split(",")
    .map((entry) => {
      const [rawId, rawQty] = entry.split(":");
      const id = decodeURIComponent(rawId ?? "").trim();
      const quantity = Math.max(1, Number(decodeURIComponent(rawQty ?? "1")));

      const product = products.find((p) => p.id === id);
      if (!product || Number.isNaN(quantity)) return null;

      return {
        product,
        shape: product.shape,
        length: product.length,
        quantity,
      };
    })
    .filter(Boolean) as CartItem[];
}

export function parseBasketItemsParam(itemsParam: string, products: Product[]): CartItem[] {
  return itemsParam
    .split(",")
    .map((entry) => {
      const [rawId, rawShape, rawLength, rawQty] = entry.split("|");

      const id = decodeURIComponent(rawId ?? "").trim();
      const shape = decodeURIComponent(rawShape ?? "").trim();
      const length = decodeURIComponent(rawLength ?? "Medium") as NailLength;
      const quantity = Math.max(1, Number(decodeURIComponent(rawQty ?? "1")));

      const product = products.find((p) => p.id === id);
      if (!product || !shape || Number.isNaN(quantity)) return null;

      return {
        product,
        shape,
        length,
        quantity,
      };
    })
    .filter(Boolean) as CartItem[];
}
