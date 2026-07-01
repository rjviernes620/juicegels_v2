import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ExpressCheckoutElement } from "@stripe/react-stripe-js";
import { type CartItem, type CouponSummary } from "../types";
import { CHECKOUT_API_BASE } from "../utils/shopHelpers";

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
  const [clientSecret, setClientSecret] = useState<string>("");
  const [canPay, setCanPay] = useState<boolean | null>(null);

  useEffect(() => {
    if (!stripePromise) return;

    let active = true;
    const fetchSecret = async () => {
      try {
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
            form: {
              contactMethod: contactMethod,
              instagram: instagramHandle,
            },
            coupon: couponSummary?.code ?? null,
            promotionCodeId: couponSummary?.promotionCodeId ?? null,
            turnstileToken: "Bypassed_For_Express_Checkout",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create Stripe Checkout Session");
        }

        const data = await response.json();
        if (active && data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      } catch (err) {
        console.error("Error pre-loading Stripe session:", err);
      }
    };

    // Debounce the call to avoid hitting the API on every single keystroke
    const timer = setTimeout(() => {
      fetchSecret();
    }, 450);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [cart, orderTotal, couponSummary, contactMethod, instagramHandle]);

  if (!stripePromise) {
    return (
      <div style={{ color: "#ffd6e9", fontSize: 12, textAlign: "center", margin: "10px 0", opacity: 0.8 }}>
        Stripe is not initialized. Please verify your Stripe publishable key in .env.
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 0" }}>
        <span style={{ color: "#ffd6e9", fontSize: 12, opacity: 0.8 }}>Loading express payment option...</span>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", marginTop: 14 }}>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <ExpressButtonInner
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

interface InnerProps {
  contactMethod: "instagram" | "email";
  instagramHandle: string;
  onValidationError: (msg: string | null, fieldErrors?: Record<string, string>) => void;
  setCanPay: (val: boolean) => void;
}

function ExpressButtonInner({
  contactMethod,
  instagramHandle,
  onValidationError,
  setCanPay,
}: InnerProps) {
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

      // Validate the custom fields synchronously before triggering payment sheet
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
      onConfirm={() => {
        // Stripe automatically redirects on session confirmation
        console.log("Express payment authorized. Redirecting to confirmation page...");
      }}
    />
  );
}
