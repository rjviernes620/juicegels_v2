import React from "react";
import { Shield, Eye, Database, Share2, Lock, FileText, Mail, ArrowLeft } from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export function PrivacyPolicy({
  isMobile,
  isTablet,
  navigate,
}: {
  isMobile?: boolean;
  isTablet?: boolean;
  navigate: (path: string) => void;
}) {
  return (
    <div style={{ background: "#ffd2e6", minHeight: "calc(100vh - 50px)", paddingBottom: 60 }}>
      {/* Hero Header Section */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)",
          padding: isMobile ? "36px 16px 28px" : "48px 20px 36px",
          textAlign: "center",
          borderBottom: "1px solid rgba(212, 84, 122, 0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* ShaderGradient Background */}
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
          pixelDensity={1}
          fov={45}
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={2.91}
            cPolarAngle={120}
            cameraZoom={isMobile ? 1.0 : (isTablet ? 1.5 : 2.5)}
            color1="#ebedff"
            color2="#f3f2f8"
            color3="#dbf8ff"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1}
            positionX={isMobile ? 0 : (isTablet ? 0.5 : 0)}
            positionY={1.8}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={-90}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1}
            uFrequency={5.5}
            uSpeed={0.3}
            uStrength={3}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>

        {/* Content Wrapper */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: "rgba(252, 101, 135, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fc6587",
              marginBottom: 4,
            }}
          >
            <Shield size={26} />
          </div>
          <div>
            <h2
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: isMobile ? 32 : 40,
                color: "#fc6587",
                margin: "0 0 6px",
                lineHeight: 1.2,
              }}
            >
              Privacy Policy
            </h2>
            <p
              style={{
                color: "#4f444a",
                margin: 0,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Last updated: June 30, 2026 🌸
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: isMobile ? "24px 16px" : "40px 24px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            color: "#c4597d",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 24,
            padding: 0,
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        {/* Glassmorphism content card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(12px)",
            borderRadius: 24,
            padding: isMobile ? "24px 20px" : "40px 36px",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 8px 32px rgba(212, 84, 122, 0.06)",
            color: "#4f444a",
            lineHeight: 1.7,
            fontSize: 14,
          }}
        >
          <p style={{ margin: "0 0 24px 0", fontSize: 15, fontWeight: 500, color: "#3a3035" }}>
            At JuiceGels, the privacy of our visitors and customers is one of our main priorities.
            This Privacy Policy document outlines the types of information we collect, how we use it,
            and how we protect your personal data.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid rgba(212, 84, 122, 0.15)", margin: "24px 0" }} />

          {/* Section 1 */}
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: 20,
                color: "#fc6587",
                margin: "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Eye size={18} /> 1. Information We Collect
            </h3>
            <p style={{ margin: "0 0 12px 0" }}>
              We collect personal information that you provide directly to us when placing an order,
              submitting custom order requests, or contacting us:
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <strong>Contact Information:</strong> Your first and last name, email address, physical delivery
                address, phone number, and Instagram handle (used for size and customization confirmation).
              </li>
              <li>
                <strong>Order Details:</strong> Information about the specific nail sets, lengths, shapes, quantities,
                and sizing choices you select.
              </li>
              <li>
                <strong>Payment Information:</strong> Payment processing is handled securely through Stripe.
                We do not store or have access to your full credit/debit card numbers or payment credentials.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: 20,
                color: "#fc6587",
                margin: "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Database size={18} /> 2. Browser Storage & Cookies
            </h3>
            <p style={{ margin: "0 0 12px 0" }}>
              We use local browser storage (such as LocalStorage) to support essential shopping features:
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <strong>juicegels_cart:</strong> Saves your selected nail sets, sizing, and quantities in your basket
                so you do not lose them while browsing.
              </li>
              <li>
                <strong>juicegels_form:</strong> Temporarily keeps your delivery details locally so you do not have to
                retype them if you navigate back.
              </li>
            </ul>
            <p style={{ margin: "12px 0 0 0", fontSize: 13, color: "#6a5c64" }}>
              You can choose to decline local storage through our Cookie Notice. Opting out will mean your cart resets
              upon page refresh.
            </p>
          </div>

          {/* Section 3 */}
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: 20,
                color: "#fc6587",
                margin: "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Lock size={18} /> 3. How We Use Your Information
            </h3>
            <p style={{ margin: "0 0 12px 0" }}>We use the information we collect to:</p>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Process, fulfill, and ship your orders.</li>
              <li>Contact you within 24 hours of payment to confirm your nail sizes, shapes, or custom design details.</li>
              <li>Provide you with photos of your completed sets before shipping.</li>
              <li>Respond to inquiries, support requests, and custom order forms.</li>
              <li>Comply with tax, legal, and financial obligations.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: 20,
                color: "#fc6587",
                margin: "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Share2 size={18} /> 4. Sharing Your Information
            </h3>
            <p style={{ margin: "0 0 12px 0" }}>
              We do not sell, lease, or distribute your personal data to third parties. We share data only with trusted partners necessary to process and deliver your order:
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>
                <strong>Payment Processors:</strong> Stripe (to process transactions).
              </li>
              <li>
                <strong>Delivery Services:</strong> Royal Mail (or other courier services) to deliver your packages.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: 20,
                color: "#fc6587",
                margin: "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Lock size={18} /> 5. Data Security
            </h3>
            <p style={{ margin: 0 }}>
              We implement a variety of security measures to maintain the safety of your personal information.
              Your transactions are encrypted using Secure Socket Layer (SSL) technology by our third-party payment processor, Stripe.
            </p>
          </div>

          {/* Section 6 */}
          <div style={{ marginBottom: 0 }}>
            <h3
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: 20,
                color: "#fc6587",
                margin: "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FileText size={18} /> 6. Your Rights & Contacts
            </h3>
            <p style={{ margin: "0 0 16px 0" }}>
              Depending on your location, you may have rights under applicable privacy laws (such as the UK GDPR/Data Protection Act)
              to access, correct, update, or request the deletion of your personal data.
            </p>
            <div
              style={{
                background: "rgba(252, 101, 135, 0.08)",
                borderRadius: 12,
                padding: "16px 20px",
                border: "1px solid rgba(252, 101, 135, 0.15)",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Mail size={16} style={{ color: "#fc6587" }} />
                <span>
                  Email:{" "}
                  <a href="mailto:juicegels@gmail.com" style={{ color: "#c4597d", fontWeight: 600, textDecoration: "underline" }}>
                    juicegels@gmail.com
                  </a>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 16 }}>📸</span>
                <span>
                  Instagram:{" "}
                  <a
                    href="https://instagram.com/juicegels"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c4597d", fontWeight: 600, textDecoration: "underline" }}
                  >
                    @juicegels
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
