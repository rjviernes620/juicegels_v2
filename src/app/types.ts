import { type Product } from "./utils/parseProducts";

export type NailLength = "Short" | "Medium" | "Long";
export type CartItem = { product: Product; shape: string; quantity: number; length: NailLength };
export type Page = "home" | "shop" | "product" | "basket" | "preorder" | "confirmation" | "about" | "videos" | "search" | "contact" | "custom-orders" | "faq" | "privacy-policy" | "terms-of-service";
export type FormData = { firstName: string; lastName: string; email: string; phone: string; address: string; instagram: string; city: string; postcode: string; notes: string; contactMethod: "instagram" | "email"; country: string; };
export type ShippingOptionId = "tracked24" | "tracked48" | "international";

export type CouponSummary = {
  code: string;
  promotionCodeId: string;
  description: string;
  discountAmount: number;
};

export type ShippingOption = {
  id: ShippingOptionId;
  stripeRateId: string;
  label: string;
  description: string;
  estimate: string;
  amount: number;
  isFree: boolean;
};

export interface CollectionDetails {
  name: string;
  tagline: string;
  otherProducts: Product[];
}
