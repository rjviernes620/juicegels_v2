import React, { useEffect, useRef } from "react";

declare const __CLOUDFLARE_TURNSTILE_SITE_KEY__: string;

const DEFAULT_SITE_KEY =
  (typeof __CLOUDFLARE_TURNSTILE_SITE_KEY__ !== "undefined" &&
    __CLOUDFLARE_TURNSTILE_SITE_KEY__) ||
  "1x00000000000000000000AA";

interface TurnstileProps {
  siteKey?: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export function Turnstile({
  siteKey = DEFAULT_SITE_KEY,
  onVerify,
  onExpire,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbacksRef = useRef({ onVerify, onExpire });

  // Keep callbacks updated without triggering effect re-run
  useEffect(() => {
    callbacksRef.current = { onVerify, onExpire };
  });

  useEffect(() => {
    // 1. Ensure Turnstile script is loaded
    if (!document.getElementById("cloudflare-turnstile-script")) {
      const script = document.createElement("script");
      script.id = "cloudflare-turnstile-script";
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    let widgetId: string | null = null;
    let isMounted = true;

    const renderWidget = () => {
      if (containerRef.current && (window as any).turnstile) {
        try {
          widgetId = (window as any).turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              if (isMounted) callbacksRef.current.onVerify(token);
            },
            "expired-callback": () => {
              if (isMounted && callbacksRef.current.onExpire) {
                callbacksRef.current.onExpire();
              }
            },
          });
        } catch (err) {
          console.error("Failed to render Turnstile widget:", err);
        }
      }
    };

    const checkAndRender = () => {
      if ((window as any).turnstile) {
        renderWidget();
      } else {
        setTimeout(checkAndRender, 100);
      }
    };

    checkAndRender();

    return () => {
      isMounted = false;
      if (widgetId && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(widgetId);
        } catch (err) {
          console.error("Failed to remove Turnstile widget:", err);
        }
      }
    };
  }, [siteKey]);

  return <div ref={containerRef} />;
}
