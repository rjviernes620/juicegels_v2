import { useState } from "react";
import { Cookie, ChevronDown, ChevronUp, Check, X } from "lucide-react";

interface CookieNoticeProps {
  consent: "accepted" | "declined" | null;
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieNotice({ consent, onAccept, onDecline }: CookieNoticeProps) {
  const [showDetails, setShowDetails] = useState(false);

  if (consent !== null) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: 398, // Fits perfectly inside the 430px mobile frame
        background: "rgba(24, 9, 40, 0.96)",
        backdropFilter: "blur(10px)",
        color: "#ffffff",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
        border: "1px solid rgba(255, 120, 40, 0.4)",
        padding: "16px 18px",
        zIndex: 1000,
        boxSizing: "border-box",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
        <div
          style={{
            background: "rgba(255, 120, 40, 0.2)",
            border: "1px solid rgba(255, 120, 40, 0.3)",
            borderRadius: "50%",
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Cookie size={20} style={{ color: "#ff7828" }} />
        </div>
        <div style={{ flex: 1 }}>
          <h4
            style={{
              margin: "0 0 4px",
              fontFamily: "'Lobster', serif",
              fontSize: 18,
              color: "#ffd3ea",
              letterSpacing: "0.02em",
            }}
          >
            Shopping Storage Notice 🌸
          </h4>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: "#d8c8df" }}>
            We use browser storage to remember the items in your shopping basket so you don't lose them while browsing.
          </p>
        </div>
      </div>

      {showDetails && (
        <div
          style={{
            background: "rgba(12, 3, 20, 0.6)",
            borderRadius: 10,
            padding: 12,
            marginBottom: 12,
            fontSize: 11,
            lineHeight: 1.45,
            color: "#d8c8df",
            border: "1px solid rgba(255, 112, 166, 0.2)",
          }}
        >
          <p style={{ margin: "0 0 6px", fontWeight: 700, textTransform: "uppercase", fontSize: 10, letterSpacing: "0.05em", color: "#ff7828" }}>
            What is stored:
          </p>
          <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>
              <strong>juicegels_cart (Essential):</strong> Saves your selected nail sets, sizing choices, and quantities so they stay in your basket.
            </li>
            <li>
              <strong>juicegels_form (Convenience):</strong> Keeps your delivery details temporarily so you don't have to retype them during checkout.
            </li>
          </ul>
          <p style={{ margin: "8px 0 0 0", fontSize: 10, fontStyle: "italic", color: "#ffd3ea" }}>
            * Note: Opting out will clear existing data and use memory-only temporary storage. Refreshes will reset your cart.
          </p>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          style={{
            background: "none",
            border: "none",
            color: "#ffd3ea",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "4px 0",
            textDecoration: "underline",
          }}
        >
          {showDetails ? (
            <>
              Hide Details <ChevronUp size={14} />
            </>
          ) : (
            <>
              How this works <ChevronDown size={14} />
            </>
          )}
        </button>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={onDecline}
            style={{
              background: "transparent",
              color: "#ffd3ea",
              border: "1.5px solid rgba(255, 112, 166, 0.5)",
              borderRadius: 10,
              padding: "7px 14px",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              boxSizing: "border-box",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 112, 166, 0.15)";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "none";
            }}
          >
            <X size={14} /> Opt Out
          </button>

          <button
            type="button"
            onClick={onAccept}
            style={{
              background: "linear-gradient(135deg, #ff7828 0%, #b026ff 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: 10,
              padding: "8px 16px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(255, 120, 40, 0.3)",
              display: "flex",
              alignItems: "center",
              gap: 4,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(255, 120, 40, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 120, 40, 0.3)";
            }}
          >
            <Check size={14} /> Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
