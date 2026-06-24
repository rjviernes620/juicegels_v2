import React from "react";
import { Instagram, Mail, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";


export function Contact({ isMobile, isTablet }: { isMobile?: boolean; isTablet?: boolean }) {
  return (
    <div style={{ background: "#ffd2e6", minHeight: "calc(100vh - 50px)", paddingBottom: 60 }}>
      {/* Hero Header Section */}
      <div 
        style={{ 
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)", 
          padding: "36px 20px 28px", 
          textAlign: "center",
          borderBottom: "1px solid rgba(212, 84, 122, 0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12
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
            pointerEvents: "none"
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
            cameraZoom={isMobile ? 1 : 1.5}
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
            positionX={isMobile ? 0 : 0.8}
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
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 32 }}>✉️</span>
          <div>
            <h2 
              style={{ 
                fontFamily: "'Lobster', serif", 
                fontSize: 32, 
                color: "#fc6587", 
                margin: "0 0 6px",
                lineHeight: 1.2
              }}
            >
              Contact Us
            </h2>
            <p 
              style={{ 
                color: "#4f444a", 
                margin: 0, 
                fontSize: 13, 
                fontWeight: 500,
                letterSpacing: "0.02em" 
              }}
            >
              Have a question or need help with your order? 🌸
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 24, width: "100%", boxSizing: "border-box" }}>
        
        {/* Intro */}
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a", textAlign: "center" }}>
           Always happy to help! Reach out via Instagram or Email and we'll get back to you as soon as possible
        </p>

        {/* Instagram DM Deep Link Card */}
        <div 
          style={{ 
            background: "#ff8fc7", 
            borderRadius: 16, 
            padding: "20px 18px", 
            border: "1px solid rgba(212, 84, 122, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div 
              style={{ 
                width: 38, 
                height: 38, 
                borderRadius: "50%", 
                background: "rgba(242, 78, 120, 0.1)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#ffd6e9"
              }}
            >
              <Instagram size={20} />
            </div>
            <h3 
              style={{ 
                fontFamily: "'Lobster', serif", 
                fontSize: 22, 
                color: "#fff9fb", 
                margin: 0 
              }}
            >
              Instagram DM
            </h3>
          </div>
          
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#4f444a" }}>
            Send a direct message for the fastest response. Perfect for sizing questions, custom design inquiries, or quick updates on your order.
          </p>

          <a 
            href="https://ig.me/m/juicegels" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              justifyContent: "center",
              gap: 8, 
              background: "#f24e77", 
              color: "#fff", 
              padding: "12px 20px", 
              borderRadius: 12, 
              fontSize: 14, 
              fontWeight: 600, 
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(242, 78, 119, 0.2)",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <MessageCircle size={16} />
            Message @juicegels
            <ExternalLink size={12} style={{ opacity: 0.8 }} />
          </a>
        </div>

        {/* Email Card */}
        <div 
          style={{ 
            background: "#ff8fc7", 
            borderRadius: 16, 
            padding: "20px 18px", 
            border: "1px solid rgba(212, 84, 122, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div 
              style={{ 
                width: 38, 
                height: 38, 
                borderRadius: "50%", 
                background: "rgba(242, 78, 120, 0.1)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#ffd6e9"
              }}
            >
              <Mail size={20} />
            </div>
            <h3 
              style={{ 
                fontFamily: "'Lobster', serif", 
                fontSize: 22, 
                color: "#fff9fb", 
                margin: 0 
              }}
            >
              Email Support
            </h3>
          </div>
          
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#4f444a" }}>
            Prefer email? Send a message directly. We aim to reply within 24 hours.
          </p>

          <a 
            href="mailto:juicegels@gmail.com" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              justifyContent: "center",
              gap: 8, 
              background: "#fc6587", 
              color: "#fff9fb", 
              border: "1.5px solid rgba(212, 84, 122, 0.18)",
              padding: "12px 20px", 
              borderRadius: 12, 
              fontSize: 14, 
              fontWeight: 600, 
              textDecoration: "none",
              transition: "transform 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <Mail size={16} style={{ color: "#ffd6e9" }} />
            juicegels@gmail.com
          </a>
        </div>

        {/* Response Time & Sizing Tips Info Box */}
        <div 
          style={{ 
            background: "rgba(255, 255, 255, 0.03)", 
            borderRadius: 14, 
            padding: "16px", 
            border: "1px dashed rgba(212, 84, 122, 0.18)",
            display: "flex", 
            flexDirection: "column", 
            gap: 12
          }}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Clock size={16} style={{ color: "#ffd6e9", marginTop: 2, flexShrink: 0 }} />
            <div style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a" }}>
              <strong style={{ color: "#fff9fb" }}>Response Times:</strong> We typically respond to Instagram DMs and Emails within 24 hours.
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, flexShrink: 0, marginTop: -2 }}>📏</span>
            <div style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a" }}>
              <strong style={{ color: "#fff9fb" }}>Nail Sizing:</strong> You will be contacted up to 24 hours after checkout to confirm your sizing. If your Instagram is private, please message @juicegels first!
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
