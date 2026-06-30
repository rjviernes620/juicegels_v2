import React from "react";
import { FileText, BookOpen, Sparkles, DollarSign, Truck, RotateCcw, Activity, ShieldAlert, ArrowLeft } from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export function TermsOfService({
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
            <FileText size={26} />
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
              Terms of Service
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
            Welcome to JuiceGels! By accessing our website (https://juicegels.com) and placing an order,
            you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
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
              <BookOpen size={18} /> 1. General Conditions
            </h3>
            <p style={{ margin: 0 }}>
              JuiceGels specializes in handmade, custom press-on gel nails. We reserve the right to refuse service,
              modify designs, or adjust pricing at our discretion. All materials and content on this site are property of JuiceGels.
            </p>
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
              <Sparkles size={18} /> 2. Sizing and Customization
            </h3>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <strong>Customer Sizing Responsibility:</strong> Every JuiceGels set is custom-crafted to your specific dimensions.
                It is the customer's sole responsibility to ensure natural nail measurements are correct.
                We highly recommend purchasing a <strong>Juice Gels Sizing Kit</strong> prior to ordering.
              </li>
              <li>
                <strong>Confirmation Window:</strong> We will attempt to contact you up to 24 hours after checkout to confirm your nail sizes.
                We will contact you via Instagram (@juicegels) only if you have selected it as your preferred communication method for sizing;
                otherwise, we will communicate via email. If your Instagram account is private, you must message us first to initiate contact.
                If we are unable to reach you or receive sizing details within a reasonable timeframe, your order may be subject to cancellation.
              </li>
              <li>
                <strong>Variations:</strong> Because every nail set is individually handmade by AlyJuice, minor variations in nail art,
                color shades, or minor detailing may occur. These are characteristic of artisanal, handmade goods and are not considered defects.
              </li>
            </ul>
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
              <DollarSign size={18} /> 3. Payments, Pricing, and Orders
            </h3>
            <p style={{ margin: "0 0 12px 0" }}>
              All transactions are securely processed through Stripe. We reserve the right to cancel and refund any order if there are issues with payment authorization, stock, or if we are unable to accommodate custom designs.
            </p>
            <p style={{ margin: 0 }}>
              Prices for our products are subject to change without notice. We reserve the right to modify or discontinue any product or service at any time.
            </p>
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
              <Truck size={18} /> 4. Shipping and Delivery
            </h3>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                Orders are shipped using tracked postal services (such as Royal Mail Tracked 24/48 in the UK, or international tracked services).
              </li>
              <li>
                Delivery estimates are approximate and do not include handcrafting/processing times.
              </li>
              <li>
                JuiceGels is not responsible for shipping delays, package loss, or theft once the carrier has accepted the package and tracking shows dispatch. In any instance regarding issues with delivery, please get in contact with Royal Mail first before reaching out to us.
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
              <RotateCcw size={18} /> 5. Returns, Refunds, and Cancellations
            </h3>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <strong>All Sales Are Final:</strong> Due to the hygienic nature of cosmetic press-on nails and because each set is custom-made to your specific size requirements, we do not accept returns, exchanges, or refunds for incorrect size choices or change of mind. This does not affect your statutory rights under the Consumer Rights Act 2015 (or other applicable consumer protection laws in your jurisdiction).
              </li>
              <li>
                <strong>Errors on Our Part:</strong> If we made an error in fulfilling your order (e.g., incorrect design or length sent), please contact us within 7 days of delivery at juicegels@gmail.com with photos, and we will arrange a replacement or refund.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
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
              <Activity size={18} /> 6. Nail Health and Safety
            </h3>
            <p style={{ margin: 0 }}>
              JuiceGels is not liable for any allergic reactions or natural nail damage arising from the use of nail glue, sticky tabs, prep tools, or incorrect application/removal techniques. Please read and follow the application and removal instructions carefully.
            </p>
          </div>

          {/* Section 7 */}
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
              <ShieldAlert size={18} /> 7. Governing Law
            </h3>
            <p style={{ margin: 0 }}>
              These terms are governed by and construed in accordance with the laws of the United Kingdom.
              Any disputes arising out of or related to your use of this site or purchases made shall be subject to the exclusive jurisdiction of the UK courts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
