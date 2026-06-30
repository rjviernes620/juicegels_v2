import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram } from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";


export function TiktokIcon({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function About({ isMobile, isTablet }: { isMobile?: boolean; isTablet?: boolean }) {
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
          gap: 16
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
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative" }}>
            <div 
              style={{ 
                width: 144, 
                height: 144, 
                borderRadius: "50%", 
                overflow: "hidden",
                border: "4px solid #ffd6e9",
                boxShadow: "0 8px 24px rgba(212, 16, 71, 0.15)",
                background: "#e0a2b4"
              }}
            >
              <ImageWithFallback 
                src="images/about_alyssa.png" 
                alt="AlyJuice - Founder of Juice Gels" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span 
              style={{ 
                position: "absolute", 
                bottom: 4, 
                right: 8, 
                background: "#fc6587", 
                color: "#3d1a24", 
                borderRadius: "50%", 
                width: 32, 
                height: 32, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontSize: 16,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
              }}
            >
              👋
            </span>
          </div>

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
              Hi, I'm AlyJuice
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
              🌸 Founder of Juice Gels 🌸
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 24, width: "100%", boxSizing: "border-box" }}>
        
        {/* More Than Just Nails Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h3 
            style={{ 
              fontFamily: "'Lobster', serif", 
              fontSize: 22, 
              color: "#fc6587", 
              margin: 0
            }}
          >
            Nails are art in motion 💃
          </h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            These hands are some of the hardest-working parts of our bodies, carrying us through everyday tasks, work, hobbies and the moments that make up our lives. They're also one of the parts of ourselves we see most often.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            There's something special about looking down and being greeted by something beautiful, creative and expressive. Nail art has the power to reflect a mood, complete an outfit, celebrate a moment or simply make an ordinary day feel a little more exciting.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            Juice Gels was created with a simple goal: to make beautiful nails more accessible, flexible and fun.
          </p>
        </div>

        {/* Highlighted box on freedom */}
        <div 
          style={{ 
            background: "#ffb8d8", 
            borderRadius: 16, 
            padding: "20px 18px", 
            border: "1px solid rgba(212, 84, 122, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
          }}
        >
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#4f444a" }}>
            Not everyone can wear long-term salon nails. Whether it's work, studies, lifestyle or personal preference, many people don't have the freedom to commit to a manicure for weeks at a time. People working in regulated industries deserve the opportunity to enjoy nail art too.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#e34c88", fontWeight: 700 }}>
            Press-on nails offer that freedom.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#4f444a", fontWeight: 500 }}>
            That's how Juice Gels was born.
          </p>
        </div>

        {/* Why Juice Gels? */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h3 
            style={{ 
              fontFamily: "'Lobster', serif", 
              fontSize: 22, 
              color: "#fc6587", 
              margin: "0 0 4px"
            }}
          >
            Why Juice Gels? 💌
          </h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a", fontWeight: 500 }}>
            Because beauty should be fun, flexible and accessible.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            Whether you're looking for a confidence boost, getting ready for a night out, planning a holiday, dressing for a special occasion or simply obsessed with a new trend you've seen online, Juice Gels gives you the freedom to wear the nails you want, when you want.
          </p>
          
          <div 
            style={{ 
              background: "#ffb8d8", 
              borderRadius: 14, 
              padding: "16px", 
              display: "flex", 
              flexDirection: "column", 
              gap: 10,
              marginTop: 6
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, color: "#fc6587" }}>🌸</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a", fontWeight: 500 }}>
                No expensive salon appointments
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, color: "#fc6587" }}>🌸</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a", fontWeight: 500 }}>
                No long-term commitment
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, color: "#fc6587" }}>🌸</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a", fontWeight: 500 }}>
                Reusable designs to wear, re-wear and collect
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, color: "#fc6587" }}>🌸</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a", fontWeight: 500 }}>
                Beautiful nails designed to fit around your life
              </span>
            </div>
          </div>
        </div>

        {/* From AlyJuice */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid rgba(212, 84, 122, 0.18)", paddingTop: 20 }}>

          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            Every order, message, tag and recommendation means the world.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            Thank you for supporting a small business built around creativity, self-expression and the belief that beautiful nails should be accessible to everyone.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            I can't wait to see how you wear your Juice Gels.
          </p>
          
          <div style={{ marginTop: 10 }}>
            <p style={{ margin: 0, fontSize: 14, color: "#4f444a" }}>Love,</p>
            <p 
              style={{ 
                fontFamily: "'Lobster', serif", 
                fontSize: 26, 
                color: "#fc6587", 
                margin: "4px 0 0",
                letterSpacing: "0.05em"
              }}
            >
              AlyJuice x
            </p>
          </div>
        </div>

        {/* Instagram/Footer link block */}
        <div 
          style={{ 
            marginTop: 16,
            padding: "16px",
            background: "linear-gradient(135deg, #fce4ea 0%, #ffd6e9 100%)",
            borderRadius: 16,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            border: "1px solid rgba(212, 84, 122, 0.18)"
          }}
        >
          <p style={{ margin: 0, fontSize: 12, color: "#4f444a", fontWeight: 500 }}>
            Want to see daily updates & new nail drops?
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <a 
              href="https://instagram.com/juicegels" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center",
                gap: 8, 
                background: "#f24e77", 
                color: "#fff", 
                padding: "10px 20px", 
                borderRadius: 24, 
                fontSize: 13, 
                fontWeight: 600, 
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(242, 78, 119, 0.2)"
              }}
            >
              <Instagram size={16} />
              Follow @juicegels
            </a>
            <a 
              href="https://tiktok.com/@juice.gels" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center",
                gap: 8, 
                background: "#f24e77", 
                color: "#fff", 
                padding: "10px 20px", 
                borderRadius: 24, 
                fontSize: 13, 
                fontWeight: 600, 
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(242, 78, 119, 0.2)"
              }}
            >
              <TiktokIcon size={16} />
              Follow @juice.gels
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
