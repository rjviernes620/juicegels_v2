import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ExpressCheckoutElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { type CartItem, type CouponSummary } from "../types";
import { CHECKOUT_API_BASE, buildShippingOptions } from "../utils/shopHelpers";

// Retrieve the publishable key from environment variables
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

interface StripeExpressCheckoutProps {
  cart: CartItem[];
  orderTotal: number;
  couponSummary: CouponSummary | null;
  contactMethod: "instagram" | "email";
  instagramHandle: string;
  onValidationError: (msg: string | null, fieldErrors?: Record<string, string>) => void;
}

export function StripeExpressCheckout({
  cart,
  orderTotal,
  couponSummary,
  contactMethod,
  instagramHandle,
  onValidationError,
}: StripeExpressCheckoutProps) {
  const [canPay, setCanPay] = useState<boolean | null>(null);

  if (!stripePromise) {
    return (
      <div style={{ color: "#ffd6e9", fontSize: 12, textAlign: "center", margin: "10px 0", opacity: 0.8 }}>
        Stripe is not initialized. Please verify your Stripe publishable key in .env.
      </div>
    );
  }

  // Define Elements options for deferred intent configuration (recommended by Stripe for Express elements)
  const elementsOptions = {
    mode: "payment" as const,
    amount: Math.max(1, Math.round(orderTotal * 100)), // smallest currency subunit (pence)
    currency: "gbp",
  };

  return (
    <div style={{ width: "100%", marginTop: 14 }}>
      <Elements stripe={stripePromise} options={elementsOptions}>
        <ExpressButtonInner
          cart={cart}
          orderTotal={orderTotal}
          couponSummary={couponSummary}
          contactMethod={contactMethod}
          instagramHandle={instagramHandle}
          onValidationError={onValidationError}
          setCanPay={setCanPay}
        />
      </Elements>
      {canPay === false && (
        <p style={{ color: "#ffd6e9", fontSize: 12, textAlign: "center", marginTop: 8, opacity: 0.8 }}>
          Google Pay / Apple Pay is not available on this device or browser.
        </p>
      )}
    </div>
  );
}

interface InnerProps extends StripeExpressCheckoutProps {
  setCanPay: (val: boolean) => void;
}

function ExpressButtonInner({
  cart,
  orderTotal,
  couponSummary,
  contactMethod,
  instagramHandle,
  onValidationError,
  setCanPay,
}: InnerProps) {
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!elements) return;

    const expressCheckoutElement = elements.getElement("expressCheckout");
    if (expressCheckoutElement) {
      // Dynamic shipping calculation inside the payment sheet
      const handleShippingAddressChange = (event: any) => {
        const { address, resolve } = event;
        
        // Replicate free shipping promo code checks from App.tsx
        const isFreeShippingPromoApplied = !!(
          couponSummary &&
          (couponSummary.code.toUpperCase() === "DEV_JUNJUN" ||
           couponSummary.promotionCodeId === "promo_1ToCW2K4CROOpWXUXvpVGOFN")
        );

        const options = buildShippingOptions(
          orderTotal,
          address.country || "GB",
          isFreeShippingPromoApplied
        );

        const rates = options.map((option) => ({
          id: option.id,
          displayName: option.label,
          amount: Math.round(option.amount * 100),
          detail: option.estimate,
        }));

        resolve({ shippingRates: rates });
      };

      const handleShippingRateChange = (event: any) => {
        const { resolve } = event;
        resolve({});
      };

      expressCheckoutElement.on("shippingaddresschange", handleShippingAddressChange);
      expressCheckoutElement.on("shippingratechange", handleShippingRateChange);

      return () => {
        expressCheckoutElement.off("shippingaddresschange", handleShippingAddressChange);
        expressCheckoutElement.off("shippingratechange", handleShippingRateChange);
      };
    }
  }, [elements, orderTotal, couponSummary]);

  const handleConfirm = async (event: any) => {
    if (!stripe || !elements) return;

    const { shippingAddress, shippingRate, billingDetails } = event;
    const nameParts = (shippingAddress.name || "").trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const formPayload = {
      contactMethod: contactMethod,
      instagram: instagramHandle,
      firstName: firstName,
      lastName: lastName,
      email: billingDetails?.email || shippingAddress?.email || "",
      phone: billingDetails?.phone || shippingAddress?.phone || "",
      address: shippingAddress.address.line1 || "",
      city: shippingAddress.address.city || "",
      postcode: shippingAddress.address.postal_code || shippingAddress.address.postalCode || "",
      country: shippingAddress.address.country || "GB",
    };

    try {
      // 1. Create PaymentIntent dynamically on confirmation
      const response = await fetch(`${CHECKOUT_API_BASE}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embedded: true,
          items: cart.map((item) => ({
            product: {
              id: item.product.id,
              name: item.product.name,
              price: item.product.price,
              description: item.product.description,
              image: item.product.image,
            },
            shape: item.shape,
            length: item.length,
            quantity: item.quantity,
          })),
          form: formPayload,
          shippingOptionId: shippingRate.id,
          coupon: couponSummary?.code ?? null,
          promotionCodeId: couponSummary?.promotionCodeId ?? null,
          turnstileToken: "Bypassed_For_Express_Checkout",
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to initialize payment.");
      }

      const { clientSecret } = await response.json();

      // 2. Submit payment intent confirmation to Stripe
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/confirmation?checkout=success&items=${buildItemsParam(cart)}`,
        },
      });

      if (error) {
        onValidationError(error.message);
      }
    } catch (err: any) {
      console.error("Error during payment confirmation:", err);
      onValidationError(err.message || "An unexpected error occurred during checkout.");
    }
  };

  const expressOptions = {
    shippingAddressRequired: true,
    allowedShippingCountries: ["GB", "US", "CA", "AU", "NZ", "IE", "FR", "DE"],
    buttonType: {
      applePay: "buy" as const,
      googlePay: "buy" as const,
    },
    buttonTheme: {
      applePay: "black" as const,
      googlePay: "black" as const,
    },
    onClick: (event: any) => {
      const { resolve, reject } = event;
      onValidationError(null);

      // Enforce custom username validation
      if (contactMethod === "instagram" && !instagramHandle.trim()) {
        onValidationError("Instagram handle is required to confirm press-on nail sizes.", { instagram: "Required" });
        reject();
        return;
      }

      resolve();
    },
  };

  return (
    <ExpressCheckoutElement
      options={expressOptions}
      onReady={({ availablePaymentMethods }) => {
        const hasMethods = !!(
          availablePaymentMethods &&
          (availablePaymentMethods.applePay || availablePaymentMethods.googlePay || availablePaymentMethods.link)
        );
        setCanPay(hasMethods);
      }}
      onConfirm={handleConfirm}
    />
  );
}

function buildItemsParam(cart: CartItem[]) {
  return cart
    .map((item) => {
      const prodId = encodeURIComponent(item.product.id);
      const shape = encodeURIComponent(item.shape);
      const length = encodeURIComponent(item.length);
      const qty = encodeURIComponent(item.quantity);
      return `${prodId}|${shape}|${length}|${qty}`;
    })
    .join(",");
}
