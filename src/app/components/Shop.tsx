import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ShoppingBag, Heart, Check, Trash2, Plus, Minus, X, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { PortableText } from "./PortableText";
import { TiktokIcon } from "./About";
import { type Product } from "../utils/parseProducts";
import { COUNTRIES } from "../utils/countries";
import {
  type NailLength,
  type CartItem,
  type Page,
  type FormData,
  type ShippingOptionId,
  type CouponSummary,
  type ShippingOption,
  type CollectionDetails
} from "../types";
import {
  isVariationLocked,
  getProductShapes,
  getProductLengths,
  getCollectionStyle,
  formatMoney,
  isNailSizeGuideItem,
  getCartItemDetailText,
  getOrderSummaryLabel
} from "../utils/shopHelpers";

// ── Field Component ──
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: "#fc6587", letterSpacing: "0.03em", textTransform: "uppercase" }}>{label}</label>
      {children}
      {error && <span style={{ fontSize: 11, color: "#c0392b" }}>{error}</span>}
    </div>
  );
}

// ── mkInput Style Helper ──
function mkInput(hasError: boolean): React.CSSProperties {
  return { background: "#fff0f4", border: `1.5px solid ${hasError ? "#c0392b" : "rgba(212, 84, 122, 0.18)"}`, borderRadius: 9, padding: "10px 13px", fontSize: 14, color: "#000000", outline: "none", width: "100%", boxSizing: "border-box" };
}

// ── HomeCarouselProps ──
interface HomeCarouselProps {
  navigate: (path: string) => void;
  isMobile: boolean;
}

export function HomeCarousel({ navigate, isMobile }: HomeCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const isJuly2026Active = () => {
    const now = new Date();
    const saleEnd = new Date("2026-08-01T00:00:00");
    return now < saleEnd;
  };

  const slides = useMemo(() => {
    const list = [];

    if (isJuly2026Active()) {
      list.push({
        id: "summer-sale",
        content: (
          <button
            type="button"
            onClick={() => {
              const productsEl = document.getElementById("products-grid");
              if (productsEl) {
                productsEl.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              display: "flex",
              width: "100%",
              background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
              border: "none",
              borderRadius: 14,
              padding: "16px 18px",
              alignItems: "center",
              gap: 16,
              textAlign: "left",
              cursor: "pointer",
              color: "#1e1b4b",
              fontFamily: "inherit",
              boxSizing: "border-box",
              minHeight: 116,
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "'Lobster', serif", color: "#fff9bd", margin: "0 0 4px", fontSize: 33 }}>Its Juicy July! ☀️</p>
              <p style={{ color: "#312e81", margin: 0, fontSize: 13, lineHeight: 1.45 }}>
                Get 20% off your basket when you buy ONLY nail sets! Ends at the end of July. <br />
                <span style={{ color: "#4338ca", fontWeight: 700 }}>Discount Applied Automatically 🌸</span>
              </p>
            </div>
          </button>
        )
      });
    }

    list.push({
      id: "size-guide",
      content: (
        <button
          type="button"
          onClick={() => navigate("/product/JUICEGELS-0286")}
          style={{
            display: "flex",
            width: "100%",
            background: "#ff8fc7",
            border: "none",
            borderRadius: 14,
            padding: "16px 18px",
            alignItems: "center",
            gap: 16,
            textAlign: "left",
            cursor: "pointer",
            color: "inherit",
            fontFamily: "inherit",
            boxSizing: "border-box",
            minHeight: 116,
          }}
        >
          <ImageWithFallback
            src="images/JUICEGELS-0286.jpg"
            alt="Nail Sizing Guide"
            style={{
              width: 84,
              height: 84,
              objectFit: "cover",
              borderRadius: 12,
              flexShrink: 0,
              background: "#ff8fc7"
            }}
          />
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "'Lobster', serif", color: "#fddaf6", margin: "0 0 4px", fontSize: 28 }}>Need your nail sizes?</p>
            <p style={{ color: "rgb(181, 88, 140)", margin: 0, fontSize: 13, lineHeight: 1.45 }}>
              Get our Nail Sizing Guide - £4.00 off when ordered with any nail set! <br />
              <span style={{ color: "#ffd6e9", fontWeight: 600 }}>Applied at Checkout 🌸</span>
            </p>
          </div>
        </button>
      )
    });

    list.push({
      id: "custom-orders",
      content: (
        <button
          type="button"
          onClick={() => navigate("/custom-orders")}
          style={{
            display: "flex",
            width: "100%",
            background: "linear-gradient(135deg, #f9d5e0 0%, #fbc2eb 100%)",
            border: "none",
            borderRadius: 14,
            padding: "16px 18px",
            alignItems: "center",
            gap: 16,
            textAlign: "left",
            cursor: "pointer",
            color: "#5c4c54",
            fontFamily: "inherit",
            boxSizing: "border-box",
            minHeight: 116,
          }}
        >
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "'Lobster', serif", color: "#c4597d", margin: "0 0 4px", fontSize: 32 }}>Want custom nails? 💅</p>
            <p style={{ color: "#5c4c54", margin: 0, fontSize: 13, lineHeight: 1.45 }}>
              Bring your dream nail concept to life! Tell us your design ideas, shape, and length. <br />
              <span style={{ color: "#ab3a60", fontWeight: 700 }}>Request Your Custom Set Here 🌸</span>
            </p>
          </div>
        </button>
      )
    });

    return list;
  }, [navigate]);

  const startTimer = () => {
    stopTimer();
    if (slides.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [slides.length]);

  return (
    <div
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      style={{
        position: "relative",
        margin: isMobile ? "12px 14px 4px" : "12px auto 4px",
        maxWidth: isMobile ? undefined : 800,
        overflow: "hidden",
        borderRadius: 14,
        border: "1px solid rgba(212, 84, 122, 0.18)",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: `translateX(-${activeIndex * 100}%)`,
          width: "100%",
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} style={{ width: "100%", flexShrink: 0 }}>
            {slide.content}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <div style={{
            position: "absolute",
            bottom: 6,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 6,
            zIndex: 10,
          }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  border: "none",
                  background: activeIndex === idx ? "#ffd6e9" : "rgba(0,0,0,0.25)",
                  padding: 0,
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            style={{
              position: "absolute",
              left: 6,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.78)",
              border: "none",
              borderRadius: "50%",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: "bold",
              color: "#fff9fb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              zIndex: 10,
              lineHeight: 1,
              padding: 0,
            }}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
            style={{
              position: "absolute",
              right: 6,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.78)",
              border: "none",
              borderRadius: "50%",
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: "bold",
              color: "#fff9fb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              zIndex: 10,
              lineHeight: 1,
              padding: 0,
            }}
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

// ── ShopPage Component ──
export interface ShopPageProps {
  products: Product[];
  filteredAndSortedProducts: Product[];
  uniqueCollections: string[];
  homeSelectedCollection: string;
  setHomeSelectedCollection: (c: string) => void;
  homeSortBy: string;
  setHomeSortBy: (s: string) => void;
  openProduct: (p: Product) => void;
  toggleWishlist: (id: string) => void;
  wishlist: string[];
  productsLoadError: string | null;
  navigate: (path: string) => void;
  isMobile: boolean;
  isTablet: boolean;
}

export function ShopPage({
  filteredAndSortedProducts,
  uniqueCollections,
  homeSelectedCollection,
  setHomeSelectedCollection,
  homeSortBy,
  setHomeSortBy,
  openProduct,
  toggleWishlist,
  wishlist,
  productsLoadError,
  navigate,
  isMobile,
  isTablet
}: ShopPageProps) {
  return (
    <main>
      <div style={{ background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)", padding: "28px 20px 22px", textAlign: "center" }}>
        <p style={{ color: "#4f444a", margin: "0 0 5px", letterSpacing: "0.12em", fontSize: 11, textTransform: "uppercase" }}>🌟 Press-on Nail Shop 🌟</p>
        <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 30, color: "#fc6587", margin: "0 0 8px", lineHeight: 1.2 }}>💅 Browse Our Sets 💅</h2>
        <p style={{ color: "#4f444a", margin: "0 0 4px", fontSize: 13, lineHeight: 1.6 }}>Find your perfect design, custom-made for you</p>
      </div>

      {productsLoadError ? (
        <div style={{
          margin: "32px 14px",
          background: "#fff5f7",
          border: "1px solid #fecdd3",
          borderRadius: 16,
          padding: "24px 20px",
          color: "#be123c",
          fontSize: 14,
          lineHeight: 1.6,
          textAlign: "center",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
        }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⚠️</div>
          <p style={{ fontWeight: 700, fontSize: 16, margin: "0 0 8px", color: "#9f1239" }}>Store Offline</p>
          <p style={{ margin: 0 }}>{productsLoadError}</p>
        </div>
      ) : (
        <>
          <HomeCarousel navigate={navigate} isMobile={isMobile} />

          {/* Sort & Filter Controls */}
          <div style={{
            margin: isMobile ? "12px 14px 4px" : "12px auto 4px",
            maxWidth: isMobile ? "none" : "800px",
            padding: "12px",
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(8px)",
            borderRadius: "16px",
            border: "1px solid rgba(212, 84, 122, 0.12)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
          }}>
            {/* Horizontal Scrollable Collection Filter Chips */}
            <div className="no-scrollbar" style={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              paddingBottom: "4px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>
              <style dangerouslySetInnerHTML={{__html: `
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}} />
              
              {/* "All Sets" Chip */}
              <button
                onClick={() => setHomeSelectedCollection("All")}
                style={{
                  flexShrink: 0,
                  background: homeSelectedCollection === "All"
                    ? "linear-gradient(135deg, #fc6587 0%, #db2777 100%)"
                    : "#fff9fb",
                  color: homeSelectedCollection === "All" ? "#ffffff" : "#4f444a",
                  border: homeSelectedCollection === "All" ? "none" : "1px solid rgba(212, 84, 122, 0.18)",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "600",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: homeSelectedCollection === "All" ? "0 2px 8px rgba(220, 38, 38, 0.15)" : "none",
                  transition: "all 0.2s ease"
                }}
              >
                💅 All Sets
              </button>

              {/* Collection Chips */}
              {uniqueCollections.map((col) => {
                const isSelected = homeSelectedCollection === col;
                const styleConfig = getCollectionStyle(col);
                const emoji = styleConfig ? styleConfig.emoji : "✨";
                const cleanName = col.replace(" Collection", "");
                return (
                  <button
                    key={col}
                    onClick={() => setHomeSelectedCollection(col)}
                    style={{
                      flexShrink: 0,
                      background: isSelected
                        ? "linear-gradient(135deg, #fc6587 0%, #db2777 100%)"
                        : "#fff9fb",
                      color: isSelected ? "#ffffff" : "#4f444a",
                      border: isSelected ? "none" : "1px solid rgba(212, 84, 122, 0.18)",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "600",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      boxShadow: isSelected ? "0 2px 8px rgba(220, 38, 38, 0.15)" : "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {emoji} {cleanName}
                  </button>
                );
              })}
            </div>

            {/* Info & Sort Selector Row */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{
                fontSize: "12px",
                color: "#4f444a",
                fontWeight: "500"
              }}>
                {homeSelectedCollection === "All"
                  ? `All sets (${filteredAndSortedProducts.length})`
                  : `${homeSelectedCollection.replace(" Collection", "")} (${filteredAndSortedProducts.length})`}
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "11px", color: "#4f444a", fontWeight: "600" }}>Sort:</span>
                <select
                  value={homeSortBy}
                  onChange={(e) => setHomeSortBy(e.target.value)}
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(212, 84, 122, 0.18)",
                    borderRadius: "10px",
                    padding: "5px 24px 5px 10px",
                    fontSize: "12px",
                    color: "#4f444a",
                    fontWeight: "500",
                    cursor: "pointer",
                    outline: "none",
                    appearance: "none",
                    backgroundImage: "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%25234f444a%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 8px top 50%",
                    backgroundSize: "8px auto"
                  }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="alpha-asc">Name: A to Z</option>
                  <option value="alpha-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>

          <div id="products-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 14px", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr", gap: isMobile ? 12 : 16, width: "100%", boxSizing: "border-box" }}>
            {filteredAndSortedProducts.length === 0 ? (
              <div style={{ padding: "40px 20px", textAlign: "center", gridColumn: "1 / -1" }}>
                <p style={{ color: "#4f444a", fontSize: 14 }}>No nail sets found in this collection.</p>
                <button
                  onClick={() => setHomeSelectedCollection("All")}
                  style={{
                    marginTop: 12,
                    background: "#fc6587",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: 12,
                    padding: "8px 16px",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              filteredAndSortedProducts.map((p) => (
                <button key={p.id} onClick={() => openProduct(p)} style={{ background: "#fc6587", border: "1px solid rgba(212, 84, 122, 0.18)", borderRadius: 14, overflow: "hidden", textAlign: "left", cursor: "pointer", padding: 0, position: "relative", display: "block", width: "100%" }}>
                  <button onClick={(e) => { e.stopPropagation(); toggleWishlist(p.id); }} style={{ position: "absolute", top: 7, right: 7, background: "rgba(255,255,255,0.88)", border: "none", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 2 }} aria-label="Wishlist">
                    <Heart size={13} fill={wishlist.includes(p.id) ? "#ffd6e9" : "none"} stroke={wishlist.includes(p.id) ? "#ffd6e9" : "#4f444a"} />
                  </button>
                  <ImageWithFallback src={p.image} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover", display: "block", background: "#b8395d" }} />
                  {(() => {
                    const style = p.collection ? getCollectionStyle(p.collection) : null;
                    return (
                      <div style={{
                        padding: "8px 10px 10px",
                        background: style ? style.cardGradient : "transparent"
                      }}>
                        {p.collection && style && (
                          <div style={{ display: "flex", alignItems: "center", gap: 3, marginBottom: 4 }}>
                            <span style={{
                              fontSize: 9,
                              background: style.badgeBg,
                              color: "#ffffff",
                              padding: "1.5px 5px",
                              borderRadius: 4,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.03em"
                            }}>
                              {style.emoji} {p.collection.replace(" Collection", "")}
                            </span>
                          </div>
                        )}
                        <p style={{ margin: "0 0 5px", fontSize: 12, color: "#fff9fb", lineHeight: 1.3 }}>{p.name}</p>
                        <span style={{ color: p.collection ? "#ffffff" : "#ffd6e9", fontWeight: 600, fontSize: 14 }}>£{p.price.toFixed(2)}</span>
                      </div>
                    );
                  })()}
                </button>
              ))
            )}
          </div>
        </>
      )}
    </main>
  );
}

// ── ProductDetailPage Component ──
export interface ProductDetailPageProps {
  selected: Product;
  setSelected: React.Dispatch<React.SetStateAction<Product | null>>;
  selectedShape: string;
  setSelectedShape: (shape: string) => void;
  selectedLength: NailLength;
  setSelectedLength: (length: NailLength) => void;
  activeImg: number;
  setActiveImg: (i: number) => void;
  collectionDetails: CollectionDetails | null;
  openProduct: (p: Product) => void;
  findVariant: (groupId: string, shape: string, length: NailLength) => Product | undefined;
  toggleWishlist: (id: string) => void;
  wishlist: string[];
  addToBasket: () => void;
  isMobile: boolean;
}

export function ProductDetailPage({
  selected,
  setSelected,
  selectedShape,
  setSelectedShape,
  selectedLength,
  setSelectedLength,
  activeImg,
  setActiveImg,
  collectionDetails,
  openProduct,
  findVariant,
  toggleWishlist,
  wishlist,
  addToBasket,
  isMobile
}: ProductDetailPageProps) {
  return (
    isMobile ? (
      <main>
        <ImageWithFallback
          src={[selected.image, ...selected.extraImages][activeImg]}
          alt={selected.name}
          style={{ width: "100%", height: 320, objectFit: "contain", display: "block", background: "#e0a2b4" }}
        />

        {selected.extraImages.length > 0 && (
          <div style={{ display: "flex", gap: 8, padding: "10px 16px 0", overflowX: "auto" }}>
            {[selected.image, ...selected.extraImages].map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  flexShrink: 0,
                  border: `2px solid ${activeImg === i ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  padding: 0,
                  cursor: "pointer",
                  background: "none"
                }}
              >
                <ImageWithFallback src={img} alt="" style={{ width: 52, height: 52, objectFit: "contain", display: "block", background: "#e0a2b4" }} />
              </button>
            ))}
          </div>
        )}

        <div style={{ padding: "16px 20px 130px" }}>
          <h2 style={{ fontFamily: "'Lobster', serif", margin: "0 0 4px", fontSize: 22, color: "#ae3c6f" }}>
            {selected.name}
          </h2>

          <p style={{ fontSize: 12, color: "#4f444a", margin: "0 0 10px" }}>
            Handmade · Made to order
          </p>

          <span style={{ fontSize: 24, fontWeight: 700, color: "#e988b5" }}>
            £{selected.price.toFixed(2)}
          </span>

          <div style={{ margin: "12px 0 18px" }}>
            {selected.descriptionBlocks ? (
              <PortableText value={selected.descriptionBlocks} />
            ) : (
              <p style={{ color: "#4f444a", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                {selected.description}
              </p>
            )}
          </div>

          {collectionDetails && (() => {
            const style = getCollectionStyle(collectionDetails.name);
            return (
              <div style={{
                background: style.bannerBg,
                border: `1px solid ${style.border}`,
                borderRadius: 14,
                padding: "14px 16px",
                margin: "18px 0",
                color: "#3d1a24",
                boxShadow: `0 2px 8px rgba(0, 0, 0, 0.02)`
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700, fontSize: 13, color: style.textColor, marginBottom: 3 }}>
                  <span style={{ fontSize: 14 }}>{style.emoji}</span> {collectionDetails.name} Set
                </div>
                <p style={{ margin: "0 0 12px 0", fontSize: 12, color: "#4f444a", fontStyle: "italic", lineHeight: 1.4 }}>
                  {collectionDetails.tagline}
                </p>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#4f444a", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 8 }}>
                  Complete the Collection:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {collectionDetails.otherProducts.map(otherProd => (
                    <button
                      key={otherProd.id}
                      onClick={() => openProduct(otherProd)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "#ffffff",
                        border: `1px solid ${style.border}`,
                        borderRadius: 10,
                        padding: "6px 8px",
                        cursor: "pointer",
                        textAlign: "left",
                        width: "100%",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                        transition: "all 0.15s"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = style.textColor; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = style.border; }}
                    >
                      <img src={otherProd.image} alt={otherProd.name} style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#3d1a24", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {otherProd.name}
                        </div>
                        <div style={{ fontSize: 11, color: "#e988b5", fontWeight: 700 }}>
                          £{otherProd.price.toFixed(2)}
                        </div>
                      </div>
                      <span style={{ fontSize: 11, color: style.textColor, fontWeight: 700, paddingRight: 4, display: "flex", alignItems: "center", gap: 2 }}>
                        Shop Set ➔
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          {!isVariationLocked(selected) ? (
            <>
              <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "#fff9fb" }}>
                Nail Shape
              </p>

              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 20 }}>
                {selected.shapes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      const next = findVariant(selected.groupId, s, selectedLength);
                      if (next) {
                        setSelected(next);
                        setSelectedShape(s);
                        setSelectedLength(next.length);
                      }
                    }}
                    style={{
                      border: `1.5px solid ${selectedShape === s ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                      background: selectedShape === s ? "rgba(226, 121, 156, 0.64)" : "#fc6587",
                      color: selectedShape === s ? "#ffffff" : "#fff9fb",
                      borderRadius: 8,
                      padding: "6px 14px",
                      fontSize: 12,
                      cursor: "pointer",
                      transition: "all 0.15s"
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "#fff9fb" }}>
                Nail Length
              </p>

              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 20 }}>
                {(["Short", "Medium", "Long"] as NailLength[]).map((length) => (
                  <button
                    key={length}
                    onClick={() => {
                      const next = findVariant(selected.groupId, selectedShape, length);
                      if (next) {
                        setSelected(next);
                        setSelectedLength(length);
                        setSelectedShape(next.shape);
                      }
                    }}
                    style={{
                      border: `1.5px solid ${selectedLength === length ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                      background: selectedLength === length ? "rgba(226, 121, 156, 0.64)" : "#fc6587",
                      color: selectedLength === length ? "#ffffff" : "#fff9fb",
                      borderRadius: 8,
                      padding: "6px 14px",
                      fontSize: 12,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      textTransform: "capitalize"
                    }}
                  >
                    {length}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          {!isVariationLocked(selected) ? (
            <div
              style={{
                background: "#fce4ea",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 12,
                color: "#4f444a",
                lineHeight: 1.5
              }}
            >
              You will be contacted via Instagram or Email up to 24 hours after payment to confirm your nail sizes.
            </div>
          ) : null}
        </div>

        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 430,
            padding: "14px 18px",
            background: "#fc6587",
            borderTop: "1px solid rgba(212, 84, 122, 0.18)",
            display: "flex",
            gap: 10,
            boxSizing: "border-box"
          }}
        >
          <button
            onClick={() => toggleWishlist(selected.id)}
            style={{
              border: "1.5px solid rgba(212, 84, 122, 0.18)",
              background: "#fc6587",
              borderRadius: 12,
              width: 46,
              height: 46,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0
            }}
          >
            <Heart
              size={17}
              fill={wishlist.includes(selected.id) ? "#ffd6e9" : "none"}
              stroke={wishlist.includes(selected.id) ? "#ffd6e9" : "#4f444a"}
            />
          </button>

          <button
            onClick={addToBasket}
            disabled={!selectedShape || !selectedLength}
            style={{
              flex: 1,
              background: selectedShape && selectedLength ? "rgba(195, 18, 77, 0.64)" : "#fce4ea",
              color: selectedShape && selectedLength ? "#fff" : "#4f444a",
              border: "none",
              borderRadius: 12,
              height: 46,
              fontWeight: 600,
              fontSize: 14,
              cursor: selectedShape && selectedLength ? "pointer" : "not-allowed",
              transition: "all 0.15s"
            }}
          >
            {selectedShape && selectedLength ? "Add to Basket" : "Select shape and length"}
          </button>
        </div>
      </main>
    ) : (
      <main style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32, padding: "28px 24px", maxWidth: 1200, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        {/* Left Column - Product Images */}
        <div style={{ position: "sticky", top: 80, alignSelf: "start" }}>
          <ImageWithFallback
            src={[selected.image, ...selected.extraImages][activeImg]}
            alt={selected.name}
            style={{ width: "100%", height: 420, objectFit: "contain", display: "block", background: "#e0a2b4", borderRadius: 18, border: "1px solid rgba(212, 84, 122, 0.12)" }}
          />

          {selected.extraImages.length > 0 && (
            <div style={{ display: "flex", gap: 8, padding: "12px 0 0", overflowX: "auto" }}>
              {[selected.image, ...selected.extraImages].map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    flexShrink: 0,
                    border: `2px solid ${activeImg === i ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                    borderRadius: 8,
                    overflow: "hidden",
                    padding: 0,
                    cursor: "pointer",
                    background: "none"
                  }}
                >
                  <ImageWithFallback src={img} alt="" style={{ width: 56, height: 56, objectFit: "contain", display: "block", background: "#e0a2b4" }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Details and Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <h2 style={{ fontFamily: "'Lobster', serif", margin: "0 0 6px", fontSize: 28, color: "#ae3c6f" }}>
              {selected.name}
            </h2>
            <p style={{ fontSize: 13, color: "#4f444a", margin: 0 }}>
              Handmade · Made to order
            </p>
          </div>

          <span style={{ fontSize: 26, fontWeight: 700, color: "#e988b5" }}>
            £{selected.price.toFixed(2)}
          </span>

          <div style={{ margin: "4px 0" }}>
            {selected.descriptionBlocks ? (
              <PortableText value={selected.descriptionBlocks} />
            ) : (
              <p style={{ color: "#4f444a", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                {selected.description}
              </p>
            )}
          </div>

          {collectionDetails && (() => {
            const style = getCollectionStyle(collectionDetails.name);
            return (
              <div style={{
                background: style.bannerBg,
                border: `1px solid ${style.border}`,
                borderRadius: 14,
                padding: "14px 16px",
                margin: "4px 0",
                color: "#3d1a24",
                boxShadow: `0 2px 8px rgba(0, 0, 0, 0.02)`
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 700, fontSize: 13, color: style.textColor, marginBottom: 3 }}>
                  <span style={{ fontSize: 14 }}>{style.emoji}</span> {collectionDetails.name} Set
                </div>
                <p style={{ margin: "0 0 12px 0", fontSize: 12, color: "#4f444a", fontStyle: "italic", lineHeight: 1.4 }}>
                  {collectionDetails.tagline}
                </p>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#4f444a", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 8 }}>
                  Complete the Collection:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {collectionDetails.otherProducts.map(otherProd => (
                    <button
                      key={otherProd.id}
                      onClick={() => openProduct(otherProd)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "#ffffff",
                        border: `1px solid ${style.border}`,
                        borderRadius: 10,
                        padding: "6px 8px",
                        cursor: "pointer",
                        textAlign: "left",
                        width: "100%",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                        transition: "all 0.15s"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = style.textColor; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = style.border; }}
                    >
                      <img src={otherProd.image} alt={otherProd.name} style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#3d1a24", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {otherProd.name}
                        </div>
                        <div style={{ fontSize: 11, color: "#e988b5", fontWeight: 700 }}>
                          £{otherProd.price.toFixed(2)}
                        </div>
                      </div>
                      <span style={{ fontSize: 11, color: style.textColor, fontWeight: 700, paddingRight: 4, display: "flex", alignItems: "center", gap: 2 }}>
                        Shop Set ➔
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          {!isVariationLocked(selected) ? (
            <>
              <div>
                <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "#ae3c6f" }}>
                  Nail Shape
                </p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {selected.shapes.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        const next = findVariant(selected.groupId, s, selectedLength);
                        if (next) {
                          setSelected(next);
                          setSelectedShape(s);
                          setSelectedLength(next.length);
                        }
                      }}
                      style={{
                        border: `1.5px solid ${selectedShape === s ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                        background: selectedShape === s ? "rgba(226, 121, 156, 0.64)" : "#fc6587",
                        color: selectedShape === s ? "#ffffff" : "#fff9fb",
                        borderRadius: 8,
                        padding: "6px 14px",
                        fontSize: 12,
                        cursor: "pointer",
                        transition: "all 0.15s"
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 600, color: "#ae3c6f" }}>
                  Nail Length
                </p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {(["Short", "Medium", "Long"] as NailLength[]).map((length) => (
                    <button
                      key={length}
                      onClick={() => {
                        const next = findVariant(selected.groupId, selectedShape, length);
                        if (next) {
                          setSelected(next);
                          setSelectedLength(length);
                          setSelectedShape(next.shape);
                        }
                      }}
                      style={{
                        border: `1.5px solid ${selectedLength === length ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                        background: selectedLength === length ? "rgba(226, 121, 156, 0.64)" : "#fc6587",
                        color: selectedLength === length ? "#ffffff" : "#fff9fb",
                        borderRadius: 8,
                        padding: "6px 14px",
                        fontSize: 12,
                        cursor: "pointer",
                        transition: "all 0.15s",
                        textTransform: "capitalize"
                      }}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          {!isVariationLocked(selected) ? (
            <div
              style={{
                background: "#fce4ea",
                borderRadius: 10,
                padding: "10px 14px",
                fontSize: 12,
                color: "#4f444a",
                lineHeight: 1.5,
                margin: "4px 0"
              }}
            >
              You will be contacted via Instagram or Email up to 24 hours after payment to confirm your nail sizes.
            </div>
          ) : null}

          {/* Inline Action Buttons */}
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button
              onClick={() => toggleWishlist(selected.id)}
              style={{
                border: "1.5px solid rgba(212, 84, 122, 0.18)",
                background: "#fc6587",
                borderRadius: 12,
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0
              }}
            >
              <Heart
                size={18}
                fill={wishlist.includes(selected.id) ? "#ffd6e9" : "none"}
                stroke={wishlist.includes(selected.id) ? "#ffd6e9" : "#4f444a"}
              />
            </button>

            <button
              onClick={addToBasket}
              disabled={!selectedShape || !selectedLength}
              style={{
                flex: 1,
                background: selectedShape && selectedLength ? "rgba(195, 18, 77, 0.64)" : "#fce4ea",
                color: selectedShape && selectedLength ? "#fff" : "#4f444a",
                border: "none",
                borderRadius: 12,
                height: 48,
                fontWeight: 600,
                fontSize: 14,
                cursor: selectedShape && selectedLength ? "pointer" : "not-allowed",
                transition: "all 0.15s"
              }}
            >
              {selectedShape && selectedLength ? "Add to Basket" : "Select shape and length"}
            </button>
          </div>
        </div>
      </main>
    )
  );
}

// ── BasketPage Component ──
export interface BasketPageProps {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  orderTotal: number;
  hasSizeGuide: boolean;
  hasNailSet: boolean;
  isNailSetSaleApplied: boolean;
  nailSetSaleDiscountAmount: number;
  couponInput: string;
  setCouponInput: (val: string) => void;
  couponError: string | null;
  setCouponError: (val: string | null) => void;
  applyCoupon: () => void;
  removeCoupon: () => void;
  isCouponLoading: boolean;
  hasCouponFeedback: boolean;
  couponSummary: CouponSummary | null;
  couponDiscount: number;
  openBasketItemProduct: (item: CartItem) => void;
  updateQty: (idx: number, delta: number) => void;
  removeItem: (idx: number) => void;
  navigate: (path: string) => void;
  setPage: (page: Page) => void;
  isMobile: boolean;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  setErrors: React.Dispatch<React.SetStateAction<Partial<FormData>>>;
  initialForm: FormData;
}

export function BasketPage({
  cart,
  cartCount,
  cartTotal,
  orderTotal,
  hasSizeGuide,
  hasNailSet,
  isNailSetSaleApplied,
  nailSetSaleDiscountAmount,
  couponInput,
  setCouponInput,
  couponError,
  setCouponError,
  applyCoupon,
  removeCoupon,
  isCouponLoading,
  hasCouponFeedback,
  couponSummary,
  couponDiscount,
  openBasketItemProduct,
  updateQty,
  removeItem,
  navigate,
  setPage,
  isMobile,
  setForm,
  setErrors,
  initialForm
}: BasketPageProps) {
  const triggerPreorder = () => {
    setForm(initialForm);
    setErrors({});
    setPage("preorder");
  };

  return (
    <>
      {isMobile ? (
        <main style={{ padding: "16px 16px 100px" }}>
          <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 28, color: "#fff9fb", margin: "0 0 14px" }}>Your Basket</h2>

          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 20px" }}>
              <ShoppingBag size={40} style={{ color: "#4f444a", marginBottom: 12 }} />
              <p style={{ color: "#4f444a", fontSize: 14 }}>Your basket is empty</p>
              <button onClick={() => navigate("/")} style={{ marginTop: 16, background: "#ffd6e9", color: "#fff", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Browse Sets</button>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                {cart.map((item, idx) => (
                  <div key={`${item.product.id}-${item.shape}`} style={{ background: "#fc6587", border: "1px solid rgba(212, 84, 122, 0.18)", borderRadius: 14, padding: "12px", display: "flex", gap: 12, alignItems: "center" }}>
                    <button
                      type="button"
                      onClick={() => openBasketItemProduct(item)}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        gap: 12,
                        alignItems: "center",
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <ImageWithFallback src={item.product.image} alt={item.product.name} style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", flexShrink: 0, background: "#e0a2b4" }} />
                      <div style={{ minWidth: 0 }}>
                        <p style={{ margin: "0 0 2px", fontSize: 13, fontWeight: 500, color: "#fff9fb", lineHeight: 1.3 }}>{item.product.name}</p>
                        {!isNailSizeGuideItem(item) && (
                          <>
                            <p style={{ margin: "0 0 6px", fontSize: 11, color: "#4f444a" }}>Shape: {item.shape}</p>
                            <p style={{ margin: 0, fontSize: 11, color: "#4f444a" }}>Length: {item.length}</p>
                          </>
                        )}
                      </div>
                    </button>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                      <span style={{ color: "#ffd6e9", fontWeight: 700, fontSize: 14 }}>£{(item.product.price * item.quantity).toFixed(2)}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <button type="button" onClick={() => updateQty(idx, -1)} style={{ width: 26, height: 26, borderRadius: 6, border: "1px solid rgba(212, 84, 122, 0.18)", background: "#fce4ea", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Minus size={12} /></button>
                        <span style={{ minWidth: 28, textAlign: "center", fontSize: 13, fontWeight: 600 }}>{item.quantity}</span>
                        <button type="button" onClick={() => updateQty(idx, 1)} style={{ width: 26, height: 26, borderRadius: 6, border: "1px solid rgba(212, 84, 122, 0.18)", background: "#fce4ea", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Plus size={12} /></button>
                      </div>
                      <button type="button" onClick={() => removeItem(idx)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, flexShrink: 0 }}><Trash2 size={15} style={{ color: "#4f444a" }} /></button>
                    </div>
                  </div>
                ))}
              </div>

              {hasSizeGuide && hasNailSet && (
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "12px 14px", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>🌸</span>
                  <div style={{ fontSize: 13, color: "#166534", lineHeight: 1.4 }}>
                    <strong>Nail Size Guide Discount Eligible!</strong>
                    <br />A £4.00 discount (cost of 1 Sizing Guide) will be automatically applied at checkout for first-time buyers!
                  </div>
                </div>
              )}

              {isNailSetSaleApplied && (
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "12px 14px", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>✨</span>
                  <div style={{ fontSize: 13, color: "#166534", lineHeight: 1.4 }}>
                    <strong>20% Off Summer Sale Applied!</strong>
                    <br />You've got 20% off your entire basket of nail sets!
                  </div>
                </div>
              )}

              {!hasNailSet && hasSizeGuide && (
                <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 14, padding: "12px 14px", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>💡</span>
                  <div style={{ fontSize: 13, color: "#92400e", lineHeight: 1.4 }}>
                    <strong>Tip:</strong> Add any nail set to your basket to get your Nail Sizing Guide for free (eligible first-time buyers)!
                  </div>
                </div>
              )}

              <div style={{ background: "#e0a2b4", borderRadius: 14, padding: "14px 16px", marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-end", marginBottom: 12 }}>
                  <div style={{ flex: 1 }}>
                    <Field label="Coupon code" error={couponError ?? undefined}>
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value.toUpperCase());
                          if (couponError) setCouponError(null);
                        }}
                        style={mkInput(!!couponError)}
                      />
                    </Field>
                  </div>
                  <button
                    type="button"
                    onClick={applyCoupon}
                    disabled={isCouponLoading || !couponInput.trim()}
                    style={{
                      height: 42,
                      borderRadius: 10,
                      border: "1px solid rgba(212, 84, 122, 0.18)",
                      background: "#fc6587",
                      padding: "0 14px",
                      cursor: isCouponLoading || !couponInput.trim() ? "not-allowed" : "pointer",
                      color: "#fff9fb",
                      fontWeight: 600,
                      opacity: isCouponLoading || !couponInput.trim() ? 0.6 : 1,
                    }}
                  >
                    {isCouponLoading ? "Checking..." : "Apply"}
                  </button>
                </div>

                {hasCouponFeedback && (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, fontSize: 12, background: couponError ? "#fff1f2" : couponSummary ? "#f3fbf6" : "#fc6587", border: `1px solid ${couponError ? "#f4c2cb" : couponSummary ? "#b9e3c6" : "rgba(212, 84, 122, 0.18)"}`, borderRadius: 10, padding: "11px 12px", marginBottom: 10 }}>
                    <div>
                      {isCouponLoading && (
                        <>
                          <strong style={{ display: "block", color: "#fff9fb", marginBottom: 2 }}>Checking coupon...</strong>
                          <span style={{ color: "#4f444a" }}>Validating your discount before checkout.</span>
                        </>
                      )}
                      {!isCouponLoading && couponError && (
                        <>
                          <strong style={{ display: "block", color: "#c0392b", marginBottom: 2 }}>Coupon not applied</strong>
                          <span style={{ color: "#c0392b" }}>{couponError}</span>
                        </>
                      )}
                      {!isCouponLoading && couponSummary && !couponError && (
                        <>
                          <strong style={{ display: "block", color: "#1f6f43", marginBottom: 2 }}>{couponSummary.code} applied</strong>
                          <span style={{ color: "#2f5d46" }}>
                            {couponSummary.description} saved you £{couponDiscount.toFixed(2)} on this order.
                          </span>
                        </>
                      )}
                    </div>
                    {couponSummary && !couponError && !isCouponLoading && (
                      <button type="button" onClick={removeCoupon} style={{ background: "none", border: "none", color: "#ffd6e9", cursor: "pointer", fontWeight: 600, padding: 0, flexShrink: 0 }}>Remove</button>
                    )}
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: "#4f444a" }}>Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""})</span>
                  <span>£{cartTotal.toFixed(2)}</span>
                </div>
                {couponSummary && couponDiscount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                    <span style={{ color: "#4f444a" }}>Discount ({couponSummary.code})</span>
                    <span style={{ color: "#ffd6e9" }}>-£{couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                {isNailSetSaleApplied && nailSetSaleDiscountAmount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                    <span style={{ color: "#1f6f43", fontWeight: 500 }}>20% Off</span>
                    <span style={{ color: "#1f6f43", fontWeight: 700 }}>-£{nailSetSaleDiscountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
                  <span style={{ color: "#4f444a" }}>Delivery</span>
                  <span style={{ color: "#4f444a" }}>Choose on next step</span>
                </div>
                <div style={{ borderTop: "1px solid rgba(212, 84, 122, 0.18)", paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 15 }}>
                  <span>Items total</span>
                  <span>£{orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <div style={{ background: "#fce4ea", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#4f444a", lineHeight: 1.5, marginBottom: 4 }}>
                You will be contacted via Instagram or Email up to 24 hours after payment to confirm your nail sizes.
              </div>
            </>
          )}
        </main>
      ) : (
        <main style={{ padding: "28px 24px", maxWidth: 1200, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
          <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 32, color: "#fc6587", margin: "0 0 20px" }}>Your Basket</h2>

          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 20px" }}>
              <ShoppingBag size={48} style={{ color: "#4f444a", marginBottom: 16 }} />
              <p style={{ color: "#4f444a", fontSize: 16 }}>Your basket is empty</p>
              <button onClick={() => navigate("/")} style={{ marginTop: 20, background: "#ffd6e9", color: "#fff", border: "none", borderRadius: 10, padding: "10px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Browse Sets</button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32, alignItems: "start" }}>
              {/* Left Column: Basket Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {cart.map((item, idx) => (
                  <div key={`${item.product.id}-${item.shape}`} style={{ background: "#fc6587", border: "1px solid rgba(212, 84, 122, 0.18)", borderRadius: 14, padding: "16px", display: "flex", gap: 16, alignItems: "center" }}>
                    <button
                      type="button"
                      onClick={() => openBasketItemProduct(item)}
                      style={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <ImageWithFallback src={item.product.image} alt={item.product.name} style={{ width: 72, height: 72, borderRadius: 12, objectFit: "cover", flexShrink: 0, background: "#e0a2b4" }} />
                      <div style={{ minWidth: 0 }}>
                        <p style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 600, color: "#fff9fb", lineHeight: 1.3 }}>{item.product.name}</p>
                        {!isNailSizeGuideItem(item) && (
                          <div style={{ display: "flex", gap: 12, color: "#4f444a", fontSize: 12 }}>
                            <span>Shape: <strong>{item.shape}</strong></span>
                            <span>Length: <strong>{item.length}</strong></span>
                          </div>
                        )}
                      </div>
                    </button>
                    <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <button type="button" onClick={() => updateQty(idx, -1)} style={{ width: 28, height: 28, borderRadius: 6, border: "1px solid rgba(212, 84, 122, 0.18)", background: "#9b3e54", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Minus size={12} /></button>
                        <span style={{ minWidth: 32, textAlign: "center", fontSize: 14, fontWeight: 600 }}>{item.quantity}</span>
                        <button type="button" onClick={() => updateQty(idx, 1)} style={{ width: 28, height: 28, borderRadius: 6, border: "1px solid rgba(212, 84, 122, 0.18)", background: "#9b3e54", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Plus size={12} /></button>
                      </div>
                      <span style={{ color: "#ffd6e9", fontWeight: 700, fontSize: 16, minWidth: 60, textAlign: "right" }}>£{(item.product.price * item.quantity).toFixed(2)}</span>
                      <button type="button" onClick={() => removeItem(idx)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, flexShrink: 0 }}><Trash2 size={16} style={{ color: "#4f444a" }} /></button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Checkout details, summary and preorder button */}
              <div style={{ position: "sticky", top: 80, alignSelf: "start", display: "flex", flexDirection: "column", gap: 14 }}>
                {hasSizeGuide && hasNailSet && (
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 20 }}>🌸</span>
                    <div style={{ fontSize: 13, color: "#166534", lineHeight: 1.4 }}>
                      <strong>Nail Size Guide Discount Eligible!</strong>
                      <br />A £4.00 discount (cost of 1 Sizing Guide) will be automatically applied at checkout for first-time buyers!
                    </div>
                  </div>
                )}

                {isNailSetSaleApplied && (
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 20 }}>✨</span>
                    <div style={{ fontSize: 13, color: "#166534", lineHeight: 1.4 }}>
                      <strong>20% Off Summer Sale Applied!</strong>
                      <br />You've got 20% off your entire basket of nail sets!
                    </div>
                  </div>
                )}

                {!hasNailSet && hasSizeGuide && (
                  <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 20 }}>💡</span>
                    <div style={{ fontSize: 13, color: "#92400e", lineHeight: 1.4 }}>
                      <strong>Tip:</strong> Add any nail set to your basket to get your Nail Sizing Guide for free (eligible first-time buyers)!
                    </div>
                  </div>
                )}

                <div style={{ background: "#e0a2b4", borderRadius: 14, padding: "16px 18px" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-end", marginBottom: 14 }}>
                    <div style={{ flex: 1 }}>
                      <Field label="Coupon code" error={couponError ?? undefined}>
                        <input
                          type="text"
                          placeholder="Enter coupon code"
                          value={couponInput}
                          onChange={(e) => {
                            setCouponInput(e.target.value.toUpperCase());
                            if (couponError) setCouponError(null);
                          }}
                          style={mkInput(!!couponError)}
                        />
                      </Field>
                    </div>
                    <button
                      type="button"
                      onClick={applyCoupon}
                      disabled={isCouponLoading || !couponInput.trim()}
                      style={{
                        height: 42,
                        borderRadius: 10,
                        border: "1px solid rgba(212, 84, 122, 0.18)",
                        background: "#fc6587",
                        padding: "0 18px",
                        cursor: isCouponLoading || !couponInput.trim() ? "not-allowed" : "pointer",
                        color: "#fff9fb",
                        fontWeight: 600,
                        opacity: isCouponLoading || !couponInput.trim() ? 0.6 : 1,
                      }}
                    >
                      {isCouponLoading ? "Checking..." : "Apply"}
                    </button>
                  </div>

                  {hasCouponFeedback && (
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, fontSize: 12, background: couponError ? "#fff1f2" : couponSummary ? "#f3fbf6" : "#fc6587", border: `1px solid ${couponError ? "#f4c2cb" : couponSummary ? "#b9e3c6" : "rgba(212, 84, 122, 0.18)"}`, borderRadius: 10, padding: "11px 12px", marginBottom: 12 }}>
                      <div>
                        {isCouponLoading && (
                          <>
                            <strong style={{ display: "block", color: "#fff9fb", marginBottom: 2 }}>Checking coupon...</strong>
                            <span style={{ color: "#4f444a" }}>Validating your discount before checkout.</span>
                          </>
                        )}
                        {!isCouponLoading && couponError && (
                          <>
                            <strong style={{ display: "block", color: "#c0392b", marginBottom: 2 }}>Coupon not applied</strong>
                            <span style={{ color: "#c0392b" }}>{couponError}</span>
                          </>
                        )}
                        {!isCouponLoading && couponSummary && !couponError && (
                          <>
                            <strong style={{ display: "block", color: "#1f6f43", marginBottom: 2 }}>{couponSummary.code} applied</strong>
                            <span style={{ color: "#2f5d46" }}>
                              {couponSummary.description} saved you £{couponDiscount.toFixed(2)} on this order.
                            </span>
                          </>
                        )}
                      </div>
                      {couponSummary && !couponError && !isCouponLoading && (
                        <button type="button" onClick={removeCoupon} style={{ background: "none", border: "none", color: "#ffd6e9", cursor: "pointer", fontWeight: 600, padding: 0, flexShrink: 0 }}>Remove</button>
                      )}
                    </div>
                  )}

                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8 }}>
                    <span style={{ color: "#4f444a" }}>Subtotal ({cartCount} item{cartCount !== 1 ? "s" : ""})</span>
                    <span>£{cartTotal.toFixed(2)}</span>
                  </div>
                  {couponSummary && couponDiscount > 0 && (
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8 }}>
                      <span style={{ color: "#4f444a" }}>Discount ({couponSummary.code})</span>
                      <span style={{ color: "#ffd6e9" }}>-£{couponDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  {isNailSetSaleApplied && nailSetSaleDiscountAmount > 0 && (
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8 }}>
                      <span style={{ color: "#1f6f43", fontWeight: 500 }}>20% Off</span>
                      <span style={{ color: "#1f6f43", fontWeight: 700 }}>-£{nailSetSaleDiscountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 10 }}>
                    <span style={{ color: "#4f444a" }}>Delivery</span>
                    <span style={{ color: "#4f444a" }}>Choose on next step</span>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(212, 84, 122, 0.18)", paddingTop: 10, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 16 }}>
                    <span>Items total</span>
                    <span>£{orderTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div style={{ background: "#fce4ea", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#4f444a", lineHeight: 1.5 }}>
                  You will be contacted via Instagram or Email up to 24 hours after payment to confirm your nail sizes.
                </div>

                {/* Checkout buttons inline on PC/Tablet */}
                <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                  <button onClick={() => navigate("/")} style={{ border: "1.5px solid rgba(212, 84, 122, 0.18)", background: "rgba(128, 33, 65, 0.44)", borderRadius: 12, height: 46, padding: "0 18px", fontSize: 13, fontWeight: 600, color: "#ffd6e9", cursor: "pointer", flexShrink: 0 }}>+ Add more</button>
                  <button onClick={triggerPreorder} style={{ flex: 1, background: "rgba(195, 18, 77, 0.64)", color: "#fff", border: "none", borderRadius: 12, height: 46, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                    Pre-order · £{orderTotal.toFixed(2)}
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {isMobile && cart.length > 0 && (
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, padding: "14px 18px", background: "#fc6587", borderTop: "1px solid rgba(212, 84, 122, 0.18)", display: "flex", gap: 10, boxSizing: "border-box", zIndex: 40 }}>
          <button onClick={() => navigate("/")} style={{ border: "1.5px solid rgba(212, 84, 122, 0.18)", background: "rgba(128, 33, 65, 0.44)", borderRadius: 12, height: 46, padding: "0 16px", fontSize: 13, fontWeight: 500, cursor: "pointer", flexShrink: 0 }}>+ Add more</button>
          <button onClick={triggerPreorder} style={{ flex: 1, background: "rgba(195, 18, 77, 0.64)", color: "#fff", border: "none", borderRadius: 12, height: 46, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Pre-order · £{orderTotal.toFixed(2)}
          </button>
        </div>
      )}
    </>
  );
}

// ── PreorderPage Component ──
export interface PreorderPageProps {
  cartCount: number;
  checkoutTotal: number;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  form: FormData;
  handleFormChange: (field: keyof FormData, value: string) => void;
  errors: Partial<FormData>;
  shippingOptions: ShippingOption[];
  shippingOptionId: ShippingOptionId;
  setShippingOptionId: (id: ShippingOptionId) => void;
  selectedShippingOption: ShippingOption | undefined;
  cart: CartItem[];
  couponSummary: CouponSummary | null;
  couponDiscount: number;
  isNailSetSaleApplied: boolean;
  nailSetSaleDiscountAmount: number;
  hasSizeGuide: boolean;
  hasNailSet: boolean;
  isSizeGuideDiscountApplied: boolean;
  isSubmitting: boolean;
  checkoutError: string | null;
  isMobile: boolean;
  showStripeRedirectModal: boolean;
}

export function PreorderPage({
  cartCount,
  checkoutTotal,
  handleSubmit,
  form,
  handleFormChange,
  errors,
  shippingOptions,
  shippingOptionId,
  setShippingOptionId,
  selectedShippingOption,
  cart,
  couponSummary,
  couponDiscount,
  isNailSetSaleApplied,
  nailSetSaleDiscountAmount,
  hasSizeGuide,
  hasNailSet,
  isSizeGuideDiscountApplied,
  isSubmitting,
  checkoutError,
  isMobile,
  showStripeRedirectModal
}: PreorderPageProps) {
  return (
    <main style={{ maxWidth: isMobile ? undefined : 1200, margin: "0 auto", padding: isMobile ? "18px 18px 48px" : "32px 32px 64px", width: "100%", boxSizing: "border-box" }}>
      {showStripeRedirectModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(34, 18, 25, 0.42)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            zIndex: 100,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 340,
              background: "#fc6587",
              borderRadius: 18,
              padding: "22px 20px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.18)",
              border: "1px solid rgba(212, 84, 122, 0.18)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "3px solid rgba(212, 84, 122, 0.18)",
                borderTopColor: "#ffd6e9",
                margin: "0 auto 14px",
                animation: "juicegels-spin 1s linear infinite",
              }}
            />
            <h3 style={{ margin: "0 0 8px", fontFamily: "'Lobster', serif", fontSize: 22, color: "#fff9fb" }}>
              Redirecting to Stripe
            </h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "#4f444a" }}>
              You&apos;ll be redirected to Stripe to complete your order. Please wait a moment while we prepare your secure checkout.
            </p>
          </div>
        </div>
      )}

      <h2 style={{ fontFamily: "'Lobster', serif", fontSize: isMobile ? 20 : 28, color: "#fc6587", margin: "0 0 4px" }}>Your Details</h2>
      <p style={{ color: "#000000", fontSize: isMobile ? 12 : 14, margin: isMobile ? "0 0 18px" : "0 0 28px" }}>{cartCount} item{cartCount !== 1 ? "s" : ""} · {formatMoney(checkoutTotal)} total including shipping</p>

      <form onSubmit={handleSubmit} noValidate style={
        isMobile ? {
          display: "flex",
          flexDirection: "column",
          gap: 13
        } : {
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 32,
          alignItems: "start"
        }
      }>
        {/* Left Column: Form Fields & Shipping Selection */}
        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Field label="First name" error={errors.firstName}>
              <input type="text" placeholder="Sophie" value={form.firstName} onChange={(e) => handleFormChange("firstName", e.target.value)} style={mkInput(!!errors.firstName)} />
            </Field>
            <Field label="Last name" error={errors.lastName}>
              <input type="text" placeholder="Wright" value={form.lastName} onChange={(e) => handleFormChange("lastName", e.target.value)} style={mkInput(!!errors.lastName)} />
            </Field>
          </div>

          <Field label="Email address" error={errors.email}>
            <input type="email" placeholder="sophie@example.com" value={form.email} onChange={(e) => handleFormChange("email", e.target.value)} style={mkInput(!!errors.email)} />
          </Field>

          <Field label="Phone number" error={errors.phone}>
            <input type="tel" placeholder="+44 7700 900000" value={form.phone} onChange={(e) => handleFormChange("phone", e.target.value)} style={mkInput(!!errors.phone)} />
          </Field>

          <Field label="Delivery address" error={errors.address}>
            <input type="text" placeholder="12 Petal Lane" value={form.address} onChange={(e) => handleFormChange("address", e.target.value)} style={mkInput(!!errors.address)} />
          </Field>

          <Field label="Country" error={errors.country}>
            <select
              value={form.country}
              onChange={(e) => handleFormChange("country", e.target.value)}
              style={{ ...mkInput(!!errors.country), height: 43 }}
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code} style={{ color: "#000000" }}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Preferred Contact Method">
            <div style={{ display: "flex", gap: 10 }}>
              <button
                type="button"
                onClick={() => handleFormChange("contactMethod", "instagram")}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: `1.5px solid ${form.contactMethod === "instagram" ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                  background: form.contactMethod === "instagram" ? "rgba(128, 33, 65, 0.44)" : "#fc6587",
                  color: form.contactMethod === "instagram" ? "#ffd6e9" : "#fff9fb",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: 16 }}>📸</span> Instagram
              </button>
              <button
                type="button"
                onClick={() => handleFormChange("contactMethod", "email")}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: `1.5px solid ${form.contactMethod === "email" ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                  background: form.contactMethod === "email" ? "rgba(128, 33, 65, 0.44)" : "#fc6587",
                  color: form.contactMethod === "email" ? "#ffd6e9" : "#fff9fb",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: 16 }}>✉️</span> Email
              </button>
            </div>
          </Field>

          {form.contactMethod === "instagram" && (
            <>
              <Field label="Instagram username" error={errors.instagram}>
                <input type="text" placeholder="@juicegels" value={form.instagram} onChange={(e) => handleFormChange("instagram", e.target.value)} style={mkInput(!!errors.instagram)} />
              </Field>
              <div style={{ display: "flex", gap: 10, padding: "10px 12px", background: "#fffbeb", borderRadius: 10, border: "1px solid #fef3c7", fontSize: 12, color: "#92400e", lineHeight: 1.45, marginTop: -4 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
                <div>
                  <strong>Private Account notice:</strong> If you have a private Instagram Account and wish to have communications via Instagram, please message the <a href="https://instagram.com/juicegels" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 700, textDecoration: "underline" }}>@juicegels</a> Instagram account first to make sure that communications can be made.
                </div>
              </div>
            </>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Field label="City" error={errors.city}>
              <input type="text" placeholder="London" value={form.city} onChange={(e) => handleFormChange("city", e.target.value)} style={mkInput(!!errors.city)} />
            </Field>
            <Field label="Postcode" error={errors.postcode}>
              <input type="text" placeholder="SW1A 1AA" value={form.postcode} onChange={(e) => handleFormChange("postcode", e.target.value)} style={mkInput(!!errors.postcode)} />
            </Field>
          </div>

          <Field label="Additional notes (optional)">
            <textarea placeholder="Any special requests, colour preferences, or custom details..." value={form.notes} onChange={(e) => handleFormChange("notes", e.target.value)} rows={3} style={{ ...mkInput(false), resize: "none" }} />
          </Field>

          <Field label="Shipping method">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {shippingOptions.map((option) => {
                const isSelected = option.id === shippingOptionId;

                return (
                  <label
                    key={option.id}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: "12px 13px",
                      borderRadius: 12,
                      border: `1.5px solid ${isSelected ? "#ffd6e9" : "rgba(212, 84, 122, 0.18)"}`,
                      background: isSelected ? "rgba(128, 33, 65, 0.44)" : "#fc6587",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name="shipping-method"
                      value={option.id}
                      checked={isSelected}
                      onChange={() => setShippingOptionId(option.id)}
                      style={{ marginTop: 3 }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline", marginBottom: 4 }}>
                        <strong style={{ color: "#fff9fb", fontSize: 13 }}>{option.label}</strong>
                        <span style={{ color: "#ffd6e9", fontWeight: 700, fontSize: 13 }}>
                          {option.isFree ? "Free" : formatMoney(option.amount)}
                        </span>
                      </div>
                      <p style={{ margin: "0 0 3px", fontSize: 12, lineHeight: 1.5, color: "#4f444a" }}>{option.description}</p>
                      <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5, color: "#4f444a" }}>{option.estimate}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </Field>
        </div>

        {/* Right Column: Checkout Summary (Sticky) */}
        <div style={{ position: "sticky", top: 80, alignSelf: "start", display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
          <div style={{ background: "#fce4ea", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#4f444a", lineHeight: 1.5 }}>
            {form.contactMethod === "email" ? (
              <>
                You will be contacted via Email at <strong>{form.email || "your email"}</strong> up to 24 hours after payment to confirm your nail sizes.
              </>
            ) : (
              <>
                You will be contacted via Instagram from <strong>@juicegels</strong> up to 24 hours after payment to confirm your nail sizes.
              </>
            )}
          </div>

          <div style={{ background: "#e0a2b4", borderRadius: 13, padding: "13px 15px", fontSize: 13, lineHeight: 1.7, color: "#fff9fb" }}>
            <strong style={{ display: "block", marginBottom: 6 }}>Order Summary</strong>
            {cart.map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#4f444a" }}>
                <span>{getOrderSummaryLabel(item)}</span>
                <span>£{(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            {couponSummary && couponDiscount > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#4f444a" }}>
                <span>Discount ({couponSummary.code})</span>
                <span>-{formatMoney(couponDiscount)}</span>
              </div>
            )}
            {isNailSetSaleApplied && nailSetSaleDiscountAmount > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#1f6f43", fontWeight: 500 }}>
                <span>20% Off</span>
                <span>-{formatMoney(nailSetSaleDiscountAmount)}</span>
              </div>
            )}
            {hasSizeGuide && hasNailSet && (
              <div style={{ display: "flex", flexDirection: "column", marginTop: 4, padding: "8px 10px", background: "#f0fdf4", borderRadius: 8, border: "1px solid #bbf7d0", fontSize: 11, color: "#166534", lineHeight: 1.35 }}>
                <strong>🌸 Nail Size Guide Discount Eligible!</strong>
                <span>
                  {isSizeGuideDiscountApplied
                    ? "Eligible first-time buyer verified! £4.00 will be automatically deducted at checkout."
                    : "If you are a first-time buyer, £4.00 will be automatically deducted at checkout."}
                </span>
              </div>
            )}
            {selectedShippingOption && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#4f444a" }}>
                <span>{selectedShippingOption.label}</span>
                <span>{selectedShippingOption.isFree ? "Free" : formatMoney(selectedShippingOption.amount)}</span>
              </div>
            )}
            <div style={{ borderTop: "1px solid rgba(212, 84, 122, 0.18)", marginTop: 8, paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
              <span>Total</span><span>{formatMoney(checkoutTotal)}</span>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} style={{ background: isSubmitting ? "rgba(212, 84, 122, 0.18)" : "#c281a9", color: "#ffffff", border: "none", borderRadius: 12, height: 48, fontWeight: 600, fontSize: 14, cursor: isSubmitting ? "not-allowed" : "pointer", letterSpacing: "0.02em" }}>
            {isSubmitting ? "Redirecting to Stripe..." : "Confirm Pre-order 🌸"}
          </button>
          {checkoutError && <p style={{ color: "#c0392b", fontSize: 12, marginTop: 10 }}>{checkoutError}</p>}
        </div>
      </form>
    </main>
  );
}

// ── ConfirmationPage Component ──
export interface ConfirmationPageProps {
  form: FormData;
  confirmationCount: number;
  confirmationItems: CartItem[];
  navigate: (path: string) => void;
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setForm: React.Dispatch<React.SetStateAction<FormData>>;
  initialForm: FormData;
}

export function ConfirmationPage({
  form,
  confirmationCount,
  confirmationItems,
  navigate,
  setCart,
  setForm,
  initialForm
}: ConfirmationPageProps) {
  return (
    <main style={{ padding: "44px 22px", textAlign: "center" }}>
      <div style={{ width: 68, height: 68, borderRadius: "50%", background: "#e0a2b4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
        <Check size={30} style={{ color: "#ffd6e9" }} />
      </div>
      <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 24, color: "#fc6587", margin: "0 0 8px" }}>Order Placed!</h2>
      <p style={{ color: "#4f444a", fontSize: 13, lineHeight: 1.7, margin: "0 0 6px" }}>
        Thank you, <strong>{form.firstName}</strong>! Your pre-order of {confirmationCount} item{confirmationCount !== 1 ? "s" : ""} is confirmed.
      </p>
      <p style={{ color: "#4f444a", fontSize: 12, margin: "0 0 24px", lineHeight: 1.5 }}>
        A confirmation will be sent to <strong>{form.email}</strong>.<br />
        {form.contactMethod === "email" ? (
          <span>You will be contacted via Email at <strong>{form.email}</strong> within 24 hours to confirm your nail sizes.</span>
        ) : (
          <>
            <span>You will be contacted via Instagram from <strong>@juicegels</strong> within 24 hours to confirm your nail sizes.</span>
            <br />
            <span style={{ color: "#92400e", fontSize: 11, display: "block", marginTop: 4 }}>
              ⚠️ If your Instagram account is private, please message <a href="https://instagram.com/juicegels" target="_blank" rel="noopener noreferrer" style={{ color: "#92400e", fontWeight: 700, textDecoration: "underline" }}>@juicegels</a> first to make sure that communications can be made.
            </span>
          </>
        )}
      </p>

      <div style={{ background: "#e0a2b4", borderRadius: 13, padding: "14px", textAlign: "left", marginBottom: 14 }}>
        <p style={{ margin: "0 0 8px", fontWeight: 600, fontSize: 13, color: "#fff9fb" }}>Items ordered</p>
        {confirmationItems.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <ImageWithFallback src={item.product.image} alt={item.product.name} style={{ width: 40, height: 40, borderRadius: 7, objectFit: "cover", background: "#fce4ea" }} />
            <div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 500, color: "#fff9fb" }}>{item.product.name}</p>
              <p style={{ margin: 0, fontSize: 11, color: "rgba(255, 249, 251, 0.85)" }}>{getCartItemDetailText(item)}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "#fc6587", border: "1px solid rgba(212, 84, 122, 0.18)", borderRadius: 13, padding: "14px", textAlign: "left", marginBottom: 24 }}>
        <p style={{ margin: "0 0 5px", fontWeight: 600, fontSize: 13, color: "#fff9fb" }}>Delivering to</p>
        <p style={{ margin: 0, fontSize: 12, color: "#ffffff", lineHeight: 1.6 }}>
          {form.firstName} {form.lastName}<br />
          {form.address}<br />
          {form.city}, {form.postcode}
          {form.country && form.country !== "GB" && (
            <>
              <br />
              {COUNTRIES.find((c) => c.code === form.country)?.name || form.country}
            </>
          )}
        </p>
      </div>

      <button onClick={() => { navigate("/"); setCart([]); setForm(initialForm); }} style={{ background: "#c281a9", color: "#fff", border: "none", borderRadius: 12, height: 46, width: "100%", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
        Continue Shopping
      </button>
    </main>
  );
}
