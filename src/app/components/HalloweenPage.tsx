import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { ArrowLeft, ShoppingBag, Sparkles, Check, Info, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { type Product, type NailLength } from "../utils/parseProducts";
import { type CartItem } from "../types";
import {
  formatMoney,
  SHIPPING_FREE_THRESHOLD,
  STRIPE_HALLOWEEN_COUPON_ID,
  buildBasketUrl,
  META_CART_ORIGIN
} from "../utils/shopHelpers";

export interface HalloweenPageProps {
  navigate: (path: string) => void;
  isMobile: boolean;
  isTablet: boolean;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  currentBasketUrl: (items: CartItem[]) => string;
}

interface SetDefinition {
  id: string;
  numericProductId: number;
  groupId: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  category: "spooky-cute" | "dark-glam";
  badge: string;
  previewIcons: string;
  paletteText: string;
  description: string;
  imageUrl: string;
  defaultShape: string;
  shapes: string[];
  gradientStyle: string;
  accentColor: string;
}

const DEFAULT_SHAPES = ["Square", "Oval", "Stiletto", "Coffin", "Almond"] as const;
const DEFAULT_LENGTHS = ["Short", "Medium", "Long"] as const;

export const HALLOWEEN_SETS: SetDefinition[] = [
  {
    id: "JUICEGELS-2447",
    numericProductId: 2447,
    groupId: "juicegels_booquetteset",
    name: "Booquette",
    originalPrice: 15.0,
    discountedPrice: 12.0,
    category: "spooky-cute",
    badge: "👻 Spooky Cute",
    previewIcons: "👻 💐",
    paletteText: "Floral Ghosts • Pink Bloom • Shimmer",
    description: "Cute ghost floral bouquet art on pearlescent baby pink builder gel with fine micro-sparkles.",
    imageUrl: "https://cdn.sanity.io/images/5co5ooqr/production/d1a069b629dd8fab238d070dca546041df10090b-2798x2798.jpg",
    defaultShape: "Almond",
    shapes: ["Almond", "Stiletto", "Coffin", "Square", "Oval"],
    gradientStyle: "from-[#ffd3ea] via-[#ff70a6] to-[#b026ff]",
    accentColor: "#ff70a6"
  },
  {
    id: "JUICEGELS-2462",
    numericProductId: 2462,
    groupId: "juicegels_screamqueenset",
    name: "Scream Queen",
    originalPrice: 15.0,
    discountedPrice: 12.0,
    category: "dark-glam",
    badge: "👑 Scream Royalty",
    previewIcons: "😱 👑",
    paletteText: "Gothic Romance • Ghostface Glam • Velvet",
    description: "Moody horror-glam nail art with spooky statement details, chrome accents, and high-shine gloss.",
    imageUrl: "https://cdn.sanity.io/images/5co5ooqr/production/5d0515ae6d1d8ae5ecd98a6ec548352a2dbe8061-2886x2886.jpg",
    defaultShape: "Stiletto",
    shapes: ["Almond", "Stiletto", "Coffin", "Square", "Oval"],
    gradientStyle: "from-[#881337] via-[#e11d48] to-[#1e0208]",
    accentColor: "#e11d48"
  },
  {
    id: "JUICEGELS-2477",
    numericProductId: 2477,
    groupId: "juicegels_hellohorrorset",
    name: "Hello Horror",
    originalPrice: 15.5,
    discountedPrice: 12.4,
    category: "spooky-cute",
    badge: "🎀 Spooky Cute",
    previewIcons: "🎀 🔪",
    paletteText: "Cute Horror • Bows & Stitches • Pastel Goth",
    description: "Spooky-cute mashup featuring playful bows, gothic stitching accents, and adorable horror motifs.",
    imageUrl: "https://cdn.sanity.io/images/5co5ooqr/production/3609c391b4232825e76673e57ac0868322ff72c8-3717x3717.jpg",
    defaultShape: "Almond",
    shapes: ["Almond", "Stiletto", "Coffin", "Square", "Oval"],
    gradientStyle: "from-[#3b0764] via-[#7e22ce] to-[#0f011d]",
    accentColor: "#b026ff"
  },
  {
    id: "JUICEGELS-2492",
    numericProductId: 2492,
    groupId: "juicegels_boobelleset",
    name: "Boo Belle",
    originalPrice: 15.0,
    discountedPrice: 12.0,
    category: "spooky-cute",
    badge: "🎃 Spooky Chic",
    previewIcons: "👻 ✨",
    paletteText: "Elegance & Eerie • Pearls • French Tips",
    description: "Sophisticated spooky chic with delicate ghost silhouettes, romantic pearls, and dreamy French styling.",
    imageUrl: "https://cdn.sanity.io/images/5co5ooqr/production/cc4aa655ef79eb6700cb684d126171f057b97ca5-4004x4004.jpg",
    defaultShape: "Almond",
    shapes: ["Almond", "Stiletto", "Coffin", "Square", "Oval"],
    gradientStyle: "from-[#f97316] via-[#c2410c] to-[#431407]",
    accentColor: "#ff7828"
  },
  {
    id: "JUICEGELS-1277",
    numericProductId: 1277,
    groupId: "juicegels_pinkoweenset",
    name: "Pink-o-ween",
    originalPrice: 15.0,
    discountedPrice: 12.0,
    category: "spooky-cute",
    badge: "🌸 Pastel Halloween",
    previewIcons: "🌸 🎃",
    paletteText: "Baby Pink • Mini Pumpkins • Candy Spooks",
    description: "Signature JuiceGels pastel pink Halloween aesthetic with sweet ghosts, stars, and glitter French tips.",
    imageUrl: "https://cdn.sanity.io/images/5co5ooqr/production/169d1c8e77f2d05604878ba3bc4bd897150e9429-1080x1080.jpg",
    defaultShape: "Almond",
    shapes: ["Almond", "Stiletto", "Coffin", "Square", "Oval"],
    gradientStyle: "from-[#ffd3ea] via-[#ff70a6] to-[#b026ff]",
    accentColor: "#ff70a6"
  },
  {
    id: "JUICEGELS-1247",
    numericProductId: 1247,
    groupId: "juicegels_sparklescreamset",
    name: "Sparkle Scream",
    originalPrice: 15.0,
    discountedPrice: 12.0,
    category: "dark-glam",
    badge: "✨ Glitter Horror",
    previewIcons: "✨ 👻",
    paletteText: "Sparkle Overlay • Scream Art • Silver Shimmer",
    description: "Glitter-dusted ghostface accents with shimmering holo foil and midnight sparkles.",
    imageUrl: "https://cdn.sanity.io/images/5co5ooqr/production/fd3afa6fe8a10e2be34f3636aff89ec95c326836-1080x1080.jpg",
    defaultShape: "Stiletto",
    shapes: ["Almond", "Stiletto", "Coffin", "Square", "Oval"],
    gradientStyle: "from-[#881337] via-[#e11d48] to-[#1e0208]",
    accentColor: "#e11d48"
  },
  {
    id: "JUICEGELS-0196",
    numericProductId: 196,
    groupId: "juicegels_pearlnoirset",
    name: "Pearl Noir",
    originalPrice: 18.5,
    discountedPrice: 14.8,
    category: "dark-glam",
    badge: "🖤 Gothic Chic",
    previewIcons: "🖤 🦪",
    paletteText: "Glossy Obsidian • Black Pearls • Chrome",
    description: "High-luxe obsidian black gel adorned with dark iridescent pearls and moody chrome reflections.",
    imageUrl: "https://cdn.sanity.io/images/5co5ooqr/production/fc7542b91978a8dd16ecb3f965ba26c8d70bd982-3000x3000.jpg",
    defaultShape: "Almond",
    shapes: ["Almond", "Stiletto", "Coffin", "Square", "Oval"],
    gradientStyle: "from-[#1e1b4b] via-[#312e81] to-[#0f011d]",
    accentColor: "#a855f7"
  },
  {
    id: "JUICEGELS-1262",
    numericProductId: 1262,
    groupId: "juicegels_midnightmuseset",
    name: "Midnight Muse",
    originalPrice: 15.0,
    discountedPrice: 12.0,
    category: "dark-glam",
    badge: "🔮 Midnight Cat-Eye",
    previewIcons: "🌙 🔮",
    paletteText: "Deep Plum • Cat-Eye Magnet • Star Aura",
    description: "Hypnotic midnight magnetic cat-eye shimmer with celestial stars and deep dimensional aura.",
    imageUrl: "https://cdn.sanity.io/images/5co5ooqr/production/48b57cd0381c78a0bc1c3cf1416f446abdfa2d67-1080x1080.jpg",
    defaultShape: "Almond",
    shapes: ["Almond", "Stiletto", "Coffin", "Square", "Oval"],
    gradientStyle: "from-[#3b0764] via-[#7e22ce] to-[#0f011d]",
    accentColor: "#b026ff"
  }
];

export function HalloweenPage({
  navigate,
  isMobile,
  isTablet,
  cart,
  setCart,
  currentBasketUrl
}: HalloweenPageProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "spooky-cute" | "dark-glam">("all");
  const [selectedShapes, setSelectedShapes] = useState<Record<string, string>>({
    "JUICEGELS-2447": "Almond",
    "JUICEGELS-2462": "Stiletto",
    "JUICEGELS-2477": "Almond",
    "JUICEGELS-2492": "Almond",
    "JUICEGELS-1277": "Almond",
    "JUICEGELS-1247": "Stiletto",
    "JUICEGELS-0196": "Almond",
    "JUICEGELS-1262": "Almond",
  });
  const [selectedLengths, setSelectedLengths] = useState<Record<string, NailLength>>({
    "JUICEGELS-2447": "Medium",
    "JUICEGELS-2462": "Medium",
    "JUICEGELS-2477": "Medium",
    "JUICEGELS-2492": "Medium",
    "JUICEGELS-1277": "Medium",
    "JUICEGELS-1247": "Medium",
    "JUICEGELS-0196": "Medium",
    "JUICEGELS-1262": "Medium",
  });
  const [addedSetIds, setAddedSetIds] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) audioCtxRef.current = new AudioCtx();
    }
  };

  const playSpookyChime = (freq = 440) => {
    if (!soundEnabled) return;
    initAudio();
    if (!audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {}
  };

  const filteredSets = HALLOWEEN_SETS.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  const handleAddSetToCart = (setDef: SetDefinition) => {
    playSpookyChime(580);
    const chosenShape = selectedShapes[setDef.id] || setDef.defaultShape || "Almond";
    const chosenLength = selectedLengths[setDef.id] || "Medium";

    // Compute exact JuiceGels variant ID matching store matrix
    const sIdx = Math.max(0, DEFAULT_SHAPES.indexOf(chosenShape as any));
    const lIdx = Math.max(0, DEFAULT_LENGTHS.indexOf(chosenLength));
    const offset = sIdx * 3 + lIdx;
    const idNum = setDef.numericProductId + offset;
    const variantId = `JUICEGELS-${idNum.toString().padStart(4, "0")}`;

    // Create valid Product entity
    const productItem: Product = {
      id: variantId,
      groupId: setDef.groupId,
      name: `${setDef.name} (Halloween Edition)`,
      price: setDef.originalPrice,
      description: setDef.description,
      image: setDef.imageUrl,
      extraImages: [],
      shapes: [chosenShape],
      shape: chosenShape,
      length: chosenLength,
      tags: ["Halloween", "20% OFF", "Limited Edition"],
      collection: "Halloween Collection"
    };

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === productItem.id && item.shape === chosenShape && item.length === chosenLength
      );

      let nextCart: CartItem[];
      if (existingIndex >= 0) {
        nextCart = [...prev];
        nextCart[existingIndex] = {
          ...nextCart[existingIndex],
          quantity: nextCart[existingIndex].quantity + 1,
        };
      } else {
        nextCart = [
          ...prev,
          {
            product: productItem,
            shape: chosenShape,
            length: chosenLength,
            quantity: 1,
          },
        ];
      }
      return nextCart;
    });

    setAddedSetIds((prev) => [...prev, setDef.id]);
    setTimeout(() => {
      setAddedSetIds((prev) => prev.filter((id) => id !== setDef.id));
    }, 2000);

    // Mini confetti burst
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#ff70a6", "#ff7828", "#b026ff", "#39ff14"]
    });
  };

  const handleProceedToBasket = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff70a6", "#ff7828", "#b026ff", "#39ff14"]
    });

    setTimeout(() => {
      navigate(
        buildBasketUrl(cart, {
          coupon: STRIPE_HALLOWEEN_COUPON_ID,
          includeCoupon: true,
          cartOrigin: META_CART_ORIGIN,
        })
      );
    }, 400);
  };

  const halloweenSetIds = new Set(HALLOWEEN_SETS.map((s) => s.id));
  const halloweenGroupIds = new Set(HALLOWEEN_SETS.map((s) => s.groupId));

  const halloweenItemsInCart = cart.filter(
    (item) =>
      item.product.tags?.includes("Halloween") ||
      item.product.collection === "Halloween Collection" ||
      halloweenSetIds.has(item.product.id) ||
      halloweenGroupIds.has(item.product.groupId)
  );
  const halloweenCartCount = halloweenItemsInCart.reduce((acc, item) => acc + item.quantity, 0);
  const halloweenCartOriginalTotal = halloweenItemsInCart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const halloweenCartDiscountedTotal = halloweenCartOriginalTotal * 0.8;
  const totalCartValue = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div style={{
      background: "#08030e",
      color: "#ffffff",
      minHeight: "100vh",
      position: "relative",
      overflowX: "hidden",
      paddingBottom: halloweenCartCount > 0 ? "110px" : "60px"
    }}>

      {/* Atmospheric Fog Effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "550px",
        background: "radial-gradient(ellipse at 50% 10%, rgba(176, 38, 255, 0.18) 0%, rgba(255, 120, 40, 0.12) 45%, transparent 75%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Top Bar with Back Button & Sound Toggle */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: 1200,
        margin: "0 auto",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 112, 166, 0.25)",
            borderRadius: "20px",
            color: "#ffd3ea",
            padding: "8px 16px",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)")}
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            onClick={() => {
              initAudio();
              setSoundEnabled(!soundEnabled);
            }}
            style={{
              background: soundEnabled ? "rgba(74, 222, 128, 0.2)" : "rgba(0,0,0,0.4)",
              border: `1px solid ${soundEnabled ? "#4ade80" : "rgba(255, 255, 255, 0.2)"}`,
              borderRadius: "20px",
              color: soundEnabled ? "#4ade80" : "#d1d5db",
              padding: "6px 12px",
              fontSize: "11px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6
            }}
          >
            <span>{soundEnabled ? "🔊 SFX ON" : "🔈 Spooky SFX"}</span>
          </button>
        </div>
      </div>

      {/* Hero Presentation */}
      <header style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        padding: isMobile ? "24px 16px 36px" : "36px 20px 48px",
        maxWidth: 850,
        margin: "0 auto"
      }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(30, 10, 45, 0.8)",
            border: "1px solid rgba(255, 120, 40, 0.5)",
            borderRadius: "30px",
            padding: "6px 16px",
            fontSize: "11px",
            fontWeight: 800,
            color: "#ff9f43",
            marginBottom: "16px",
            boxShadow: "0 0 20px rgba(255, 120, 40, 0.2)"
          }}
        >
          <span>🔮 LIMITED HALLOWEEN DROP</span>
          <span>•</span>
          <span style={{ color: "#ffd3ea" }}>ALL 8 SETS 20% OFF</span>
        </motion.div>

        <h1 style={{
          fontFamily: "'Lobster', serif",
          fontSize: isMobile ? 44 : 64,
          margin: "0 0 14px",
          background: "linear-gradient(135deg, #ffd3ea 0%, #ff70a6 35%, #ff7828 70%, #b026ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.15
        }}>
          The Coven Collection 🎃
        </h1>

        <p style={{
          fontSize: isMobile ? 14 : 16,
          color: "rgba(255, 211, 234, 0.85)",
          maxWidth: 640,
          margin: "0 auto 24px",
          lineHeight: 1.6
        }}>
          8 bewitching handmade gel sets designed to enchant. Every set in this drop is discounted by <strong>20%</strong> for spooky season and includes our full application prep kit!
        </p>

        {/* Free Shipping & Cutoff Callout */}
        <div style={{
          display: "inline-flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          background: "rgba(22, 8, 34, 0.9)",
          border: "1px solid rgba(255, 112, 166, 0.3)",
          borderRadius: 16,
          padding: "10px 18px",
          fontSize: "12px"
        }}>
          <span style={{ color: "#ff9f43", fontWeight: 700 }}>
            ⏳ Order by Oct 20th for guaranteed Halloween delivery
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
          <span style={{ color: "#4ade80", fontWeight: 700 }}>
            ✨ Free Tracked 48 Delivery on orders over £{SHIPPING_FREE_THRESHOLD}
          </span>
        </div>
      </header>

      {/* Category Filter Pills */}
      <section style={{
        position: "relative",
        zIndex: 10,
        maxWidth: 1100,
        margin: "0 auto 32px",
        padding: "0 16px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap"
        }}>
          {[
            { id: "all", label: "All 8 Sets 🎃" },
            { id: "spooky-cute", label: "Spooky Cute 👻" },
            { id: "dark-glam", label: "Dark Glam 🩸" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playSpookyChime(420);
                setActiveCategory(cat.id as any);
              }}
              style={{
                background: activeCategory === cat.id ? "linear-gradient(135deg, #ff70a6, #ff7828)" : "rgba(24, 9, 36, 0.8)",
                color: activeCategory === cat.id ? "#08030e" : "#ffd3ea",
                border: `1px solid ${activeCategory === cat.id ? "#ff7828" : "rgba(255, 112, 166, 0.25)"}`,
                borderRadius: 14,
                padding: "8px 20px",
                fontSize: "13px",
                fontWeight: 800,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: activeCategory === cat.id ? "0 4px 18px rgba(255, 120, 40, 0.35)" : "none"
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 8 Sets Grid */}
      <main style={{
        position: "relative",
        zIndex: 10,
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 16px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
        gap: 24
      }}>
        {filteredSets.map((set) => {
          const isAdded = addedSetIds.includes(set.id);
          const chosenShape = selectedShapes[set.id] || set.defaultShape || "Almond";
          const chosenLength = selectedLengths[set.id] || "Medium";

          return (
            <motion.div
              key={set.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "linear-gradient(170deg, rgba(28, 12, 44, 0.9) 0%, rgba(14, 5, 24, 0.95) 100%)",
                border: "1px solid rgba(255, 112, 166, 0.25)",
                borderRadius: 24,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            >
              {/* Card Image Display with Real Sanity Photography */}
              <div
                onClick={() => navigate(`/product/${set.id}`)}
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  background: "#160724",
                  cursor: "pointer",
                  overflow: "hidden",
                  borderBottom: "1px solid rgba(255, 112, 166, 0.15)"
                }}
              >
                <ImageWithFallback
                  src={set.imageUrl}
                  alt={set.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease"
                  }}
                />

                {/* Gradient vignette */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(14, 5, 24, 0.88) 0%, rgba(14, 5, 24, 0.15) 45%, rgba(14, 5, 24, 0.45) 100%)",
                  pointerEvents: "none"
                }} />

                {/* Badge tags */}
                <div style={{ position: "absolute", top: 12, left: 12, zIndex: 5 }}>
                  <span style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255, 112, 166, 0.4)",
                    color: "#ffd3ea",
                    padding: "3px 10px",
                    borderRadius: 20
                  }}>
                    {set.badge}
                  </span>
                </div>

                <div style={{ position: "absolute", top: 12, right: 12, zIndex: 5 }}>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: 900,
                    background: "#ff7828",
                    color: "#08030e",
                    padding: "3px 8px",
                    borderRadius: 8,
                    boxShadow: "0 0 10px rgba(255, 120, 40, 0.5)"
                  }}>
                    20% OFF
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div style={{
                  position: "absolute",
                  bottom: 10,
                  left: 12,
                  right: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  zIndex: 4,
                  fontSize: "11px",
                  color: "rgba(255, 211, 234, 0.95)",
                  fontWeight: 600,
                  textShadow: "0 1px 4px rgba(0,0,0,0.8)"
                }}>
                  <span>{set.previewIcons} {set.paletteText}</span>
                  <span style={{
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid rgba(255, 112, 166, 0.35)",
                    padding: "2px 8px",
                    borderRadius: 10,
                    fontSize: "10px",
                    color: "#ffd3ea"
                  }}>
                    {chosenShape} • {chosenLength}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                    <h3
                      onClick={() => navigate(`/product/${set.id}`)}
                      style={{
                        fontSize: "18px",
                        fontWeight: 800,
                        margin: 0,
                        color: "#ffffff",
                        cursor: "pointer",
                        transition: "color 0.2s"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ff70a6")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                    >
                      {set.name}
                    </h3>
                  </div>

                  <p style={{ fontSize: "12px", color: "rgba(255, 211, 234, 0.75)", lineHeight: 1.5, margin: "0 0 14px" }}>
                    {set.description}
                  </p>

                  {/* Dedicated Shape Selector */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 700, color: "#ffd3ea", marginBottom: 6 }}>
                      <span>Selected Shape:</span>
                      <span style={{ color: "#ff70a6" }}>{chosenShape}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
                      {(set.shapes || DEFAULT_SHAPES).map((shape) => (
                        <button
                          key={shape}
                          onClick={() => {
                            playSpookyChime(420);
                            setSelectedShapes((prev) => ({ ...prev, [set.id]: shape }));
                          }}
                          style={{
                            background: chosenShape === shape ? "linear-gradient(135deg, #ff70a6, #ff7828)" : "rgba(255, 255, 255, 0.05)",
                            border: `1px solid ${chosenShape === shape ? "#ff7828" : "rgba(255, 255, 255, 0.1)"}`,
                            color: chosenShape === shape ? "#08030e" : "#e5e7eb",
                            borderRadius: 8,
                            padding: "6px 2px",
                            fontSize: "10.5px",
                            fontWeight: 800,
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                            textAlign: "center"
                          }}
                        >
                          {shape}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Length Selector */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", fontWeight: 700, color: "#ffd3ea", marginBottom: 6 }}>
                      <span>Selected Length:</span>
                      <span style={{ color: "#ff7828" }}>{chosenLength}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
                      {DEFAULT_LENGTHS.map((len) => (
                        <button
                          key={len}
                          onClick={() => {
                            playSpookyChime(380);
                            setSelectedLengths((prev) => ({ ...prev, [set.id]: len }));
                          }}
                          style={{
                            background: chosenLength === len ? "rgba(255, 112, 166, 0.25)" : "rgba(255, 255, 255, 0.05)",
                            border: `1px solid ${chosenLength === len ? "#ff70a6" : "rgba(255, 255, 255, 0.1)"}`,
                            color: chosenLength === len ? "#ff70a6" : "#e5e7eb",
                            borderRadius: 8,
                            padding: "6px 0",
                            fontSize: "11px",
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.15s ease"
                          }}
                        >
                          {len}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing (20% OFF) */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 16 }}>
                    <span style={{ fontSize: "22px", fontWeight: 900, color: "#ffd3ea" }}>
                      {formatMoney(set.discountedPrice)}
                    </span>
                    <span style={{ fontSize: "13px", color: "#9ca3af", textDecoration: "line-through" }}>
                      {formatMoney(set.originalPrice)}
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#4ade80", background: "rgba(74, 222, 128, 0.15)", padding: "2px 6px", borderRadius: 6 }}>
                      Save £{(set.originalPrice - set.discountedPrice).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {/* Add to Basket Action */}
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleAddSetToCart(set)}
                    style={{
                      width: "100%",
                      background: isAdded
                        ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                        : "linear-gradient(135deg, #ff70a6 0%, #ff7828 100%)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: 14,
                      padding: "12px",
                      fontWeight: 800,
                      fontSize: "12px",
                      letterSpacing: "0.04em",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      boxShadow: "0 6px 16px rgba(255, 112, 166, 0.25)"
                    }}
                  >
                    {isAdded ? (
                      <>
                        <Check size={16} />
                        <span>Added to Potion!</span>
                      </>
                    ) : (
                      <>
                        <span>Add to Basket (20% OFF)</span>
                        <span>🧪</span>
                      </>
                    )}
                  </motion.button>

                  {/* View Details Link */}
                  <button
                    onClick={() => navigate(`/product/${set.id}`)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255, 211, 234, 0.7)",
                      fontSize: "11px",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ff7828")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 211, 234, 0.7)")}
                  >
                    <span>View full set details</span>
                    <ExternalLink size={11} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </main>

      {/* Sizing Reassurance Card */}
      <section style={{ maxWidth: 850, margin: "48px auto 0", padding: "0 16px" }}>
        <div style={{
          background: "linear-gradient(135deg, #1b0a2c 0%, #290f42 100%)",
          border: "1px solid rgba(255, 112, 166, 0.2)",
          borderRadius: 20,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 32 }}>📏</span>
            <div>
              <h4 style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 700, color: "#fff" }}>
                Unsure about your nail sizing?
              </h4>
              <p style={{ margin: 0, fontSize: 12, color: "rgba(255, 211, 234, 0.75)" }}>
                You can select custom size or order our £3.50 Sizing Kit first for a guaranteed 100% custom fit.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/product/JUICEGELS-0286")}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 112, 166, 0.3)",
              color: "#ffd3ea",
              padding: "8px 16px",
              borderRadius: 12,
              fontSize: "12px",
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            View Size Guide →
          </button>
        </div>
      </section>

      {/* Sticky Bottom Cauldron Cart Dock */}
      {halloweenCartCount > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "rgba(18, 6, 28, 0.95)",
            backdropFilter: "blur(14px)",
            borderTop: "1.5px solid rgba(255, 120, 40, 0.5)",
            padding: "12px 20px",
            boxShadow: "0 -10px 30px rgba(0,0,0,0.6)"
          }}
        >
          <div style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                position: "relative",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #180928, #ff7828)",
                border: "1px solid #ffd3ea",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22
              }}>
                🔮
                <span style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  background: "#ff70a6",
                  color: "#ffffff",
                  fontSize: 10,
                  fontWeight: 900,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {halloweenCartCount}
                </span>
              </div>
              <div>
                <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 800, color: "#ffd3ea" }}>
                  20% Halloween Discount Applied
                </p>
                <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
                  Total: <span style={{ color: "#ffd3ea", fontSize: 15 }}>{formatMoney(halloweenCartDiscountedTotal)}</span>
                  <span style={{ color: "rgba(255, 211, 234, 0.6)", textDecoration: "line-through", marginLeft: 6, fontSize: 12 }}>
                    {formatMoney(halloweenCartOriginalTotal)}
                  </span>
                  {totalCartValue >= SHIPPING_FREE_THRESHOLD ? (
                    <span style={{ color: "#4ade80", marginLeft: 8 }}>• ✨ Free UK Shipping Unlocked!</span>
                  ) : (
                    <span style={{ color: "#ff7828", marginLeft: 8 }}>• Add £{(SHIPPING_FREE_THRESHOLD - totalCartValue).toFixed(2)} for Free Shipping</span>
                  )}
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleProceedToBasket}
              style={{
                background: "linear-gradient(135deg, #ff70a6 0%, #ff7828 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: 30,
                padding: "12px 28px",
                fontWeight: 800,
                fontSize: 13,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 18px rgba(255, 120, 40, 0.4)"
              }}
            >
              <ShoppingBag size={15} />
              <span>Proceed to Checkout</span>
              <span>→</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
