import React, { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AmbientGradient } from "./ui/AmbientGradient";
import { type Product } from "../utils/parseProducts";
import {
  isHalloweenProduct,
  getHalloweenSalePrice,
  getCollectionStyle
} from "../utils/shopHelpers";

const HeroShaderBackground = lazy(() =>
  import("./HeroShaderBackground").then((m) => ({ default: m.HeroShaderBackground }))
);

export interface HomePageProps {
  isMobile: boolean;
  isTablet: boolean;
  navigate: (path: string) => void;
  trendingProducts: Product[];
  openProduct: (product: Product) => void;
}

export function HomePage({
  isMobile,
  isTablet,
  navigate,
  trendingProducts,
  openProduct
}: HomePageProps) {
  return (
    <main>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(160deg, #180928 0%, #2e0d42 50%, #0c0314 100%)",
          padding: isMobile ? "40px 10px 48px" : "60px 20px 64px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* AmbientGradient base with lazy-loaded animated HeroShaderBackground */}
        <AmbientGradient variant="brand" />
        <Suspense fallback={null}>
          <HeroShaderBackground />
        </Suspense>

        {/* Hero Content Wrapper */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,120,40,0.08) 0%, rgba(255,120,40,0) 70%)",
              top: "-50px",
              right: "-100px",
              pointerEvents: "none"
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(176,38,255,0.08) 0%, rgba(176,38,255,0) 70%)",
              bottom: "-150px",
              left: "-150px",
              pointerEvents: "none"
            }}
          />

          {/* Logo Area */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              height: isMobile ? "240px" : "320px",
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Logo - Full size in the center */}
            <motion.div
              initial={{ scale: 0.3, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.4, type: "spring", stiffness: 55, damping: 12 }}
              whileHover={{ scale: 1.03, rotate: 1, transition: { duration: 0.3 } }}
              onClick={() => navigate("/shop")}
              style={{
                width: isMobile ? 220 : 300,
                height: isMobile ? 220 : 300,
                zIndex: 10,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src="images/jg circle 2.png"
                alt="Juice Gels Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  filter: "drop-shadow(0 15px 35px rgba(255, 120, 40, 0.35))"
                }}
              />
            </motion.div>
          </div>

          {/* Brand Introduction Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p
              style={{
                color: "#ff7828",
                margin: "0 0 8px",
                letterSpacing: "0.15em",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase"
              }}
            >
              🌟 Handcrafted Press-on Nail Studio 🌟
            </p>
            <h2
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: isMobile ? 40 : 56,
                color: "#ffffff",
                margin: "0 0 16px",
                lineHeight: 1.15,
                textShadow: "0 0 24px rgba(255, 120, 40, 0.6), 0 0 48px rgba(176, 38, 255, 0.35)"
              }}
            >
              Juice Gels
            </h2>
            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto 24px",
                fontSize: isMobile ? 15 : 18,
                color: "#e2d4e8",
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              Salon-quality, reusable manicures in minutes.
              Every set is lovingly handcrafted with professional-grade gel polish,
              specifically designed to fit your unique style.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop: 28
              }}
            >
              <motion.button
                onClick={() => navigate("/halloween")}
                animate={{
                  boxShadow: [
                    "0 0 14px rgba(255, 112, 166, 0.45)",
                    "0 0 28px rgba(255, 120, 40, 0.7)",
                    "0 0 14px rgba(255, 112, 166, 0.45)",
                  ]
                }}
                transition={{
                  boxShadow: { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "linear-gradient(135deg, #180928 0%, #3b104f 45%, #ff7828 100%)",
                  color: "#ffffff",
                  border: "1.5px solid rgba(255, 112, 166, 0.6)",
                  borderRadius: "30px",
                  padding: "13px 26px",
                  fontSize: "14px",
                  fontWeight: "800",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  style={{ fontSize: 16 }}
                >
                  🎃
                </motion.span>
                <span>Juice Ghouls Drop</span>
                <span
                  style={{
                    background: "#ff7828",
                    color: "#08030e",
                    fontSize: 10,
                    fontWeight: 900,
                    padding: "2px 7px",
                    borderRadius: "10px",
                    letterSpacing: "0.04em",
                  }}
                >
                  20% OFF
                </span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.button>

              <button
                onClick={() => navigate("/shop")}
                style={{
                  background: "linear-gradient(135deg, #ff7828 0%, #b026ff 100%)",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 112, 166, 0.3)",
                  borderRadius: "30px",
                  padding: "14px 32px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(255, 120, 40, 0.35)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 120, 40, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 120, 40, 0.35)";
                }}
              >
                Shop Nail Sets 💅
              </button>
              <button
                onClick={() => navigate("/custom-orders")}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#ffd3ea",
                  border: "2px solid #ff70a6",
                  borderRadius: "30px",
                  padding: "12px 30px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 112, 166, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Custom Request ✨
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Promotional Split Banner ── */}
      <div
        style={{
          background: "#140620",
          padding: isMobile ? "28px 16px 20px" : "36px 28px 24px",
          borderTop: "1px solid rgba(255,112,166,0.15)",
          borderBottom: "1px solid rgba(255,112,166,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 14 : 18,
          }}
        >
          {/* Custom Orders Card */}
          <button
            type="button"
            onClick={() => navigate("/custom-orders")}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "linear-gradient(135deg, #260a3a 0%, #4a154b 100%)",
              border: "1px solid rgba(255, 112, 166, 0.3)",
              borderRadius: 16,
              padding: isMobile ? "22px 20px" : "28px 26px",
              cursor: "pointer",
              color: "#e2d4e8",
              fontFamily: "inherit",
              textAlign: "left",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              minHeight: isMobile ? 130 : 150,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(176, 38, 255, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.35)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -30,
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                width: 70,
                height: 70,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: isMobile ? 28 : 33,
                color: "#ffd3ea",
                margin: "0 0 6px",
                lineHeight: 1.15,
                textShadow: "0 0 12px rgba(255, 112, 166, 0.4)",
                position: "relative",
                zIndex: 1,
              }}
            >
              Want custom nails? 💅
            </p>
            <p
              style={{
                color: "#d8c8df",
                margin: "0 0 10px",
                fontSize: isMobile ? 12 : 13,
                lineHeight: 1.5,
                position: "relative",
                zIndex: 1,
              }}
            >
              Bring your dream nail concept to life! Tell us your design ideas, shape, and length.
            </p>
            <span
              style={{
                display: "inline-block",
                background: "rgba(255, 112, 166, 0.2)",
                border: "1px solid rgba(255, 112, 166, 0.35)",
                backdropFilter: "blur(6px)",
                borderRadius: 20,
                padding: "5px 14px",
                fontSize: 11,
                fontWeight: 700,
                color: "#ff70a6",
                position: "relative",
                zIndex: 1,
              }}
            >
              Request Your Custom Set Here 🌸
            </span>
          </button>

          {/* Size Guide Discount Card */}
          <button
            type="button"
            onClick={() => navigate("/product/JUICEGELS-0286")}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "linear-gradient(135deg, #331304 0%, #5a1e05 100%)",
              border: "1px solid rgba(255, 120, 40, 0.35)",
              borderRadius: 16,
              padding: isMobile ? "22px 20px" : "28px 26px",
              cursor: "pointer",
              color: "inherit",
              fontFamily: "inherit",
              textAlign: "left",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              minHeight: isMobile ? 130 : 150,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(255, 120, 40, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.35)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -25,
                right: -25,
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -15,
                left: -15,
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: isMobile ? 26 : 30,
                color: "#ffeed8",
                margin: "0 0 6px",
                lineHeight: 1.15,
                textShadow: "0 0 12px rgba(255, 120, 40, 0.4)",
                position: "relative",
                zIndex: 1,
              }}
            >
              Need your nail sizes? 📏
            </p>
            <p
              style={{
                color: "#fed7aa",
                margin: "0 0 10px",
                fontSize: isMobile ? 12 : 13,
                lineHeight: 1.5,
                position: "relative",
                zIndex: 1,
              }}
            >
              Get our Nail Sizing Guide — <strong>£4.00 off</strong> when ordered with any nail set!
            </p>
            <span
              style={{
                display: "inline-block",
                background: "rgba(255, 120, 40, 0.2)",
                border: "1px solid rgba(255, 120, 40, 0.35)",
                backdropFilter: "blur(6px)",
                borderRadius: 20,
                padding: "5px 14px",
                fontSize: 11,
                fontWeight: 700,
                color: "#ff7828",
                position: "relative",
                zIndex: 1,
              }}
            >
              Applied at Checkout 🌸
            </span>
          </button>
        </div>

      </div>

      {/* How It Works Guide Section */}
      <div
        style={{
          background: "#12051c",
          padding: "54px 20px 48px",
          borderTop: "1px solid rgba(255,112,166,0.12)",
          borderBottom: "1px solid rgba(255,112,166,0.12)"
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 28, color: "#ff70a6", marginBottom: 28 }}>
            How It Works
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 28,
              justifyContent: "space-between"
            }}
          >
            {[
              {
                step: "1",
                title: "Choose your Gels",
                desc: "Select from our wide variety of nail designs. Choose your Shape and length and place your order."
              },
              {
                step: "2",
                title: "Size your Gels",
                desc: "We will reach out to you via your chosen contact method to clarify your nail sizes before your nails get produced."
              },
              {
                step: "3",
                title: "Wear your Gels",
                desc: "Once your nails are made and you're happy with them. We ship out your nails via Royal Mail so you can wear your gels in no time!"
              }
            ].map((item, i) => (
              <div key={i} style={{ flex: 1, position: "relative" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #ff7828 0%, #b026ff 100%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 700,
                    margin: "0 auto 14px",
                    boxShadow: "0 4px 14px rgba(255, 120, 40, 0.3)"
                  }}
                >
                  {item.step}
                </div>
                <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>
                  {item.title}
                </h4>
                <p style={{ color: "#d8c8df", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Propositions / Why Press-Ons */}
      <div
        style={{
          background: "#150721",
          padding: "54px 20px 48px",
          borderBottom: "1px solid rgba(255,112,166,0.12)"
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 28, color: "#ff7828", marginBottom: 12 }}>
            Why Press-Ons?
          </h3>
          <p style={{ color: "#d8c8df", fontSize: 13, maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.5 }}>
            The luxury of salon manicures without the time, expense, or damage.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr 1fr",
              gap: 20
            }}
          >
            {[
              {
                title: "Reusable",
                desc: "Handcrafted using strong builder gel. Apply with nail tabs or glue to wear them again and again.",
                icon: "♻️"
              },
              {
                title: "Perfect Fit",
                desc: "Available in standard sizes or custom measurements. Check our sizing guide to find your perfect fit.",
                icon: "📏"
              },
              {
                title: "Salon Grade",
                desc: "We use only premium, professional gel polish products. No cheap plastic or machine printing.",
                icon: "💅"
              },
              {
                title: "Damage Free",
                desc: "Quick and easy application and removal processes that keep your natural nails healthy.",
                icon: "⏱️"
              }
            ].map((feat, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(28, 12, 44, 0.75)",
                  borderRadius: 16,
                  padding: 24,
                  border: "1px solid rgba(255, 112, 166, 0.2)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{feat.icon}</div>
                <h4 style={{ color: "#ffd3ea", fontWeight: 700, fontSize: 15, margin: "0 0 8px" }}>
                  {feat.title}
                </h4>
                <p style={{ color: "#d8c8df", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curated Products Showcase Section */}
      <div
        style={{
          padding: "54px 20px 48px",
          background: "#0c0314",
          borderTop: "1px solid rgba(255,112,166,0.12)"
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 30,
              flexWrap: "wrap",
              gap: 12
            }}
          >
            <div>
              <h3 style={{ fontFamily: "'Lobster', serif", fontSize: 30, color: "#ff70a6", margin: 0 }}>
                Trending Designs
              </h3>
              <p style={{ color: "#d8c8df", fontSize: 13, margin: "4px 0 0" }}>
                Check out some of our most popular handmade sets.
              </p>
            </div>
            <button
              onClick={() => navigate("/shop")}
              style={{
                background: "none",
                border: "none",
                color: "#ff7828",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "4px 8px",
                borderRadius: 8,
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 120, 40, 0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              View All Sets 💅
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : `repeat(${Math.min(trendingProducts.length || 1, 5)}, 1fr)`,
              gap: isMobile ? 12 : 16
            }}
          >
            {trendingProducts.map((p) => {
              const isHalloween = isHalloweenProduct(p);
              const style = p.collection
                ? getCollectionStyle(p.collection)
                : isHalloween
                  ? getCollectionStyle("Juice Ghouls Collection")
                  : null;
              const salePrice = isHalloween ? getHalloweenSalePrice(p.price) : p.price;
              return (
                <button
                  key={p.id}
                  onClick={() => openProduct(p)}
                  style={{
                    background: style ? style.cardGradient : "linear-gradient(135deg, #180928 0%, #300c42 100%)",
                    border: `1px solid ${isHalloween ? "rgba(255, 120, 40, 0.45)" : "rgba(255, 112, 166, 0.25)"}`,
                    borderRadius: 14,
                    overflow: "hidden",
                    textAlign: "left",
                    cursor: "pointer",
                    padding: 0,
                    position: "relative",
                    display: "block",
                    width: "100%",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 120, 40, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {isHalloween && (
                    <div style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}>
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 900,
                          background: "#ff7828",
                          color: "#08030e",
                          padding: "2px 6px",
                          borderRadius: 6,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em"
                        }}
                      >
                        20% OFF
                      </span>
                    </div>
                  )}
                  <ImageWithFallback
                    src={p.image}
                    alt={p.name}
                    style={{ width: "100%", height: 180, objectFit: "cover", display: "block", background: "#180928" }}
                  />
                  <div
                    style={{
                      padding: "8px 10px 10px",
                      background: style ? style.cardGradient : "linear-gradient(135deg, #180928 0%, #300c42 100%)"
                    }}
                  >
                    {(p.collection || isHalloween) && style && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 3,
                          marginBottom: 4
                        }}
                      >
                        <span
                          style={{
                            fontSize: 9,
                            background: style.badgeBg,
                            color: "#ffffff",
                            padding: "1.5px 5px",
                            borderRadius: 4,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.03em"
                          }}
                        >
                          {style.emoji} {(p.collection || "Juice Ghouls Collection").replace(" Collection", "")}
                        </span>
                        {isHalloween && (
                          <span
                            style={{
                              fontSize: 9,
                              fontWeight: 800,
                              background: "#ff7828",
                              color: "#08030e",
                              padding: "1px 5px",
                              borderRadius: 4,
                              textTransform: "uppercase",
                              letterSpacing: "0.02em"
                            }}
                          >
                            SALE
                          </span>
                        )}
                      </div>
                    )}
                    <p
                      style={{
                        margin: "0 0 4px",
                        fontSize: 13,
                        color: "#ffffff",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {p.name}
                    </p>
                    {isHalloween ? (
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                        <span style={{ color: "#ffffff", fontWeight: 800, fontSize: 14 }}>
                          £{salePrice.toFixed(2)}
                        </span>
                        <span style={{ color: "rgba(255, 255, 255, 0.65)", textDecoration: "line-through", fontSize: 11, fontWeight: 500 }}>
                          £{p.price.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span style={{ color: p.collection ? "#ffd3ea" : "#ff7828", fontWeight: 700, fontSize: 14 }}>
                        £{p.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Orders Bottom Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #180928 0%, #3b104f 50%, #ff7828 100%)",
          borderTop: "1px solid rgba(255, 112, 166, 0.2)",
          borderBottom: "1px solid rgba(255, 112, 166, 0.2)",
          padding: "48px 20px",
          textAlign: "center",
          color: "#ffffff"
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "'Lobster', serif",
              fontSize: 32,
              color: "#ffffff",
              margin: "0 0 10px",
              textShadow: "0 0 16px rgba(255, 120, 40, 0.5)"
            }}
          >
            Dreaming of a Unique Design? 💭
          </h3>
          <p style={{ color: "#ffd3ea", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px" }}>
            Let's bring your nail art dreams to life! Request a completely custom set. Send us your inspo pics and details, and we'll quote and craft it for you.
          </p>
          <button
            onClick={() => navigate("/custom-orders")}
            style={{
              background: "#ff7828",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "30px",
              padding: "12px 28px",
              fontSize: "13px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(255, 120, 40, 0.35)",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.background = "#ffa256";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#ff7828";
            }}
          >
            Start Custom Order 💅
          </button>
        </div>
      </div>
    </main>
  );
}
