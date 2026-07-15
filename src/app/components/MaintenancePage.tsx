import React, { useState, useRef, useEffect } from "react";
import { Instagram, Lock, Loader2 } from "lucide-react";
import { CHECKOUT_API_BASE } from "../utils/shopHelpers";

interface MaintenancePageProps {
  onBypassSuccess?: (token: string) => void;
}

export function MaintenancePage({ onBypassSuccess }: MaintenancePageProps) {
  const [clickCount, setClickCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when form is shown
  useEffect(() => {
    if (showLogin && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showLogin]);

  const handlePadlockClick = () => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setShowLogin(true);
        setError("");
        setCode("");
        return 0;
      }
      return next;
    });
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || code.length < 6) {
      setError("Please enter a 6-digit code.");
      triggerShake();
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${CHECKOUT_API_BASE}/api/maintenance-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (response.ok && data.success && data.token) {
        setSuccess(true);
        if (onBypassSuccess) {
          setTimeout(() => {
            onBypassSuccess(data.token);
          }, 800);
        } else {
          localStorage.setItem("maintenance_bypass_token", data.token);
          // Reload to let fetch interceptor load storefront
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } else {
        setError(data.message || "Invalid verification code.");
        triggerShake();
      }
    } catch (err) {
      setError("Failed to connect to authentication server.");
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

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
          onClick={handlePadlockClick}
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
            cursor: "pointer",
            userSelect: "none",
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

        {showLogin ? (
          <form
            onSubmit={handleLoginSubmit}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              animation: shake ? "shake 0.5s" : undefined,
            }}
          >
            <style>{`
              @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
              }
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .custom-spinner {
                animation: spin 1s linear infinite;
              }
            `}</style>
            
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#4e2333", margin: "0 0 8px 0" }}>
                Admin Access
              </h2>
              <p style={{ fontSize: "14px", color: "#6b3b4f", margin: 0 }}>
                Enter the 6-digit TOTP code from your authenticator app.
              </p>
            </div>

            {error && (
              <div
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: "rgba(255, 75, 75, 0.1)",
                  border: "1px solid rgba(255, 75, 75, 0.2)",
                  borderRadius: "12px",
                  color: "#cc3333",
                  fontSize: "13px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            {success && (
              <div
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: "rgba(75, 181, 67, 0.1)",
                  border: "1px solid rgba(75, 181, 67, 0.2)",
                  borderRadius: "12px",
                  color: "#2e7d32",
                  fontSize: "13px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Success! Bypassing maintenance mode...
              </div>
            )}

            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              placeholder="000000"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              disabled={loading || success}
              style={{
                width: "100%",
                maxWidth: "200px",
                padding: "12px 16px",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "8px",
                textAlign: "center",
                borderRadius: "14px",
                border: "1px solid rgba(212, 84, 122, 0.3)",
                background: "rgba(255, 255, 255, 0.8)",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)",
                outline: "none",
                color: "#4e2333",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#d4547a";
                e.target.style.boxShadow = "0 0 0 3px rgba(212, 84, 122, 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(212, 84, 122, 0.3)";
                e.target.style.boxShadow = "none";
              }}
            />

            <div style={{ display: "flex", gap: "12px", width: "100%" }}>
              <button
                type="button"
                onClick={() => {
                  setShowLogin(false);
                  setError("");
                  setCode("");
                }}
                disabled={loading || success}
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: "14px",
                  border: "1px solid rgba(212, 84, 122, 0.2)",
                  background: "transparent",
                  color: "#d4547a",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212, 84, 122, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading || success}
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: "14px",
                  border: "none",
                  background: "linear-gradient(45deg, #d4547a 0%, #832d47 100%)",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(212, 84, 122, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 84, 122, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(212, 84, 122, 0.2)";
                }}
              >
                {loading ? (
                  <Loader2 className="custom-spinner" size={16} />
                ) : (
                  "Verify Code"
                )}
              </button>
            </div>
          </form>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

