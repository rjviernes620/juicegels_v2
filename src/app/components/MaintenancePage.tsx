import React from "react";
import { Instagram, Lock } from "lucide-react";

export function MaintenancePage() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe5f1 0%, #ffd2e6 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: "#221219",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "rgba(255, 255, 255, 0.45)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          borderRadius: "24px",
          padding: "40px 32px",
          boxShadow: "0 10px 30px rgba(212, 84, 122, 0.1)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Decorative Circle Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#fff0f6",
            border: "2px solid #ffd6e9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(212, 84, 122, 0.05)",
          }}
        >
          <Lock size={36} color="#d4547a" />
        </div>

        {/* Brand Name */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            margin: 0,
            background: "linear-gradient(45deg, #d4547a 0%, #832d47 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          JuiceGels
        </h1>

        {/* Heading */}
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            margin: 0,
            color: "#4e2333",
          }}
        >
          Temporarily Closed
        </h2>

        {/* Message */}
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
            color: "#6b3b4f",
            margin: "0 0 8px 0",
          }}
        >
          We are currently performing maintenance and restocking our collection to bring you more premium, hand-crafted press-on gel nails. We will be back online shortly!
        </p>

        {/* Instagram link box */}
        <div
          style={{
            width: "100%",
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            border: "1px solid rgba(255, 255, 255, 0.8)",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              margin: 0,
              color: "#832d47",
            }}
          >
            Have an open order or need support?
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <a
              href="https://instagram.com/juicegels"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                color: "#d4547a",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <Instagram size={18} />
              @juicegels
            </a>
          </div>
        </div>

        {/* Footer */}
        <p
          style={{
            fontSize: "12px",
            color: "#a4808f",
            margin: 0,
          }}
        >
          Thank you for your patience! ✨
        </p>
      </div>
    </div>
  );
}
