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
        background: "rgba(252, 101, 135, 0.98)", // Premium Juice Gels pink with high opacity
        backdropFilter: "blur(8px)",
        color: "#ffffff",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(34, 18, 25, 0.22)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        padding: "16px 18px",
        zIndex: 1000,
        boxSizing: "border-box",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Cookie size={20} style={{ color: "#ffd6e9" }} />
        </div>
        <div style={{ flex: 1 }}>
          <h4
            style={{
              margin: "0 0 4px",
              fontFamily: "'Lobster', serif",
              fontSize: 18,
              color: "#fff9fb",
              letterSpacing: "0.02em",
            }}
          >
            Shopping Storage Notice 🌸
          </h4>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: "#fff0f4" }}>
            We use browser storage to remember the items in your shopping basket so you don't lose them while browsing.
          </p>
        </div>
      </div>

      {showDetails && (
        <div
          style={{
            background: "rgba(34, 18, 25, 0.15)",
            borderRadius: 10,
            padding: 12,
            marginBottom: 12,
            fontSize: 11,
            lineHeight: 1.45,
            color: "#fff0f4",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <p style={{ margin: "0 0 6px", fontWeight: 700, textTransform: "uppercase", fontSize: 10, letterSpacing: "0.05em", color: "#ffd6e9" }}>
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
          <p style={{ margin: "8px 0 0 0", fontSize: 10, fontStyle: "italic", color: "#ffd6e9" }}>
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
            color: "#ffd6e9",
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
              color: "#ffd6e9",
              border: "1.5px solid #ffd6e9",
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
              e.currentTarget.style.background = "rgba(255, 214, 233, 0.15)";
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
              background: "#ffd6e9",
              color: "#c281a9",
              border: "none",
              borderRadius: 10,
              padding: "8px 16px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
              display: "flex",
              alignItems: "center",
              gap: 4,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffd6e9";
              e.currentTarget.style.transform = "none";
            }}
          >
            <Check size={14} /> Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
