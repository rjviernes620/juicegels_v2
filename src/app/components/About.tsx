import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram } from "lucide-react";

function TiktokIcon({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
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

export function About() {
  return (
    <div style={{ background: "#ffd2e6", minHeight: "calc(100vh - 50px)", paddingBottom: 60 }}>
      {/* Hero Header Section */}
      <div 
        style={{ 
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
              alt="Alyssa - Founder of Juice Gels" 
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
            Hey, I'm Alyssa
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
            Founder of Juice Gels 🌸
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Intro */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            I'm the founder of Juice Gels, a small business built from my love of beauty, creativity, and all things nails.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            But the truth is, my journey with nails didn't start with confidence.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            I've been a nail biter for as long as I can remember. Growing up, I often felt insecure about my hands and avoided showing them whenever I could. I loved nail art and beautiful manicures, but salon nails weren't always accessible to me, and that feeling of being left out stuck with me.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            When I started university, I realised there had to be another option.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            I wanted nails that were affordable, easy to wear, and didn't require a salon appointment every few weeks. More importantly, I wanted something for people who love expressing themselves through nails but also want the freedom to switch up their look whenever they want.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a", fontWeight: 500 }}>
            That's how Juice Gels was born.
          </p>
        </div>

        {/* More than just nails */}
        <div 
          style={{ 
            background: "#e0a2b4", 
            borderRadius: 16, 
            padding: "20px 18px", 
            border: "1px solid rgba(212, 84, 122, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
          }}
        >
          <h3 
            style={{ 
              fontFamily: "'Lobster', serif", 
              fontSize: 22, 
              color: "#fff9fb", 
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: 8
            }}
          >
            More than just nails ✨
          </h3>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#4f444a" }}>
            I've always seen nails as tiny pieces of art.
          </p>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#4f444a" }}>
            They're a way to show off your personality, match your mood, celebrate a special occasion, or simply make an ordinary day feel a little more exciting.
          </p>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#4f444a" }}>
            Our hands are some of the hardest-working parts of our bodies. We see them every single day. I love the idea that every time you look down at your hands, you're greeted by something beautiful, creative, and uniquely you.
          </p>
        </div>

        {/* Why Juice Gels? */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h3 
            style={{ 
              fontFamily: "'Lobster', serif", 
              fontSize: 22, 
              color: "#fff9fb", 
              margin: "0 0 4px"
            }}
          >
            Why Juice Gels?
          </h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            Because beauty should be fun, flexible, and accessible.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            Whether you're looking for a confidence boost, getting ready for a night out, planning a holiday, or just want a new set because you're obsessed with a trend you've seen on TikTok, Juice Gels gives you the freedom to wear the nails you want, when you want.
          </p>
          
          <div 
            style={{ 
              background: "#e0a2b4", 
              borderRadius: 14, 
              padding: "16px", 
              display: "flex", 
              flexDirection: "column", 
              gap: 10,
              marginTop: 6
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, color: "#fff9fb" }}>🌸</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a", fontWeight: 500 }}>
                No expensive salon appointments.
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, color: "#fff9fb" }}>🌸</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a", fontWeight: 500 }}>
                No long-term commitment.
              </span>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, color: "#fff9fb" }}>🌸</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a", fontWeight: 500 }}>
                Just beautiful nails designed to help you feel like your best self.
              </span>
            </div>
          </div>
        </div>

        {/* From me to you */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid rgba(212, 84, 122, 0.18)", paddingTop: 20 }}>
          <h3 
            style={{ 
              fontFamily: "'Lobster', serif", 
              fontSize: 22, 
              color: "#fff9fb", 
              margin: 0
            }}
          >
            From me to you 💌
          </h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            Every order, message, tag, and recommendation means the world to me. As a small business owner, I'm incredibly grateful for every person who chooses to support Juice Gels.
          </p>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#4f444a" }}>
            Thank you for being here and for helping me turn a personal insecurity into something creative, empowering, and beautiful.
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
                color: "#fff9fb", 
                margin: "4px 0 0",
                letterSpacing: "0.05em"
              }}
            >
              Alyssa x
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
              Follow me on TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
