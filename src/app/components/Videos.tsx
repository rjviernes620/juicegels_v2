import React, { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingBag, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type VideosProps = {
  products: Product[];
  onShopProduct: (id: string) => void;
};

const VIDEO_SETS = [
  {
    id: "starlit",
    title: "Handcrafting Starlit Tips",
    productId: "JUICEGELS-1202",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7573010535969606934",
    videoId: "7573010535969606934",
    defaultProduct: {
      id: "JUICEGELS-1202",
      name: "Starlit Tips Set",
      price: 17.50,
      image: "images/JUICEGELS-1202.jpg"
    }
  },
  {
    id: "bowcrush",
    title: "Handcrafting Bow Crush",
    productId: "JUICEGELS-1127",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7604969643811310870",
    videoId: "7604969643811310870",
    defaultProduct: {
      id: "JUICEGELS-1127",
      name: "Bow Crush Set",
      price: 17.50,
      image: "images/JUICEGELS-1127.jpg"
    }
  }
];

export function Videos({ products, onShopProduct }: VideosProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Re-trigger embed parsing on mount and whenever the active slide index changes
  useEffect(() => {
    try {
      if ((window as any).tiktok && typeof (window as any).tiktok.embed === "function") {
        (window as any).tiktok.embed();
      }
    } catch (e) {
      console.error("TikTok embed trigger error:", e);
    }
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const diff = touchStart - touchEnd;

    // Minimum swipe distance of 50px
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, VIDEO_SETS.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div style={{ background: "#ffd2e6", minHeight: "calc(100vh - 50px)", paddingBottom: 60 }}>
      {/* Title Section */}
      <div 
        style={{ 
          background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)", 
          padding: "24px 20px", 
          textAlign: "center",
          borderBottom: "1px solid rgba(212, 84, 122, 0.18)"
        }}
      >
        <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 28, color: "#fff9fb", margin: "0 0 6px" }}>
          Juice Gels Studio 🎬
        </h2>
        <p style={{ color: "#4f444a", margin: 0, fontSize: 12, lineHeight: 1.5 }}>
          See how our sets are handcrafted with love. Swipe to see more sets and tap to shop instantly!
        </p>
      </div>

      {/* Videos List Container */}
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "20px 14px", display: "flex", flexDirection: "column", gap: 20, width: "100%", boxSizing: "border-box" }}>
        
        {/* Carousel Container */}
        <div 
          style={{ 
            background: "#e0a2b4", 
            borderRadius: 18, 
            overflow: "hidden", 
            border: "1px solid rgba(212, 84, 122, 0.18)",
            boxShadow: "0 8px 24px rgba(212, 16, 71, 0.08)",
            position: "relative",
            display: "flex",
            flexDirection: "column"
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Track */}
          <div
            style={{
              display: "flex",
              width: "100%",
              transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {VIDEO_SETS.map((videoSet, index) => {
              const product = products.find((p) => p.id === videoSet.productId) ?? videoSet.defaultProduct;

              return (
                <div
                  key={videoSet.id}
                  style={{
                    minWidth: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative"
                  }}
                >
                  {/* Tag Overlay */}
                  <div 
                    style={{ 
                      position: "absolute", 
                      top: 12, 
                      left: 12, 
                      background: "rgba(161, 95, 95, 0.88)", 
                      backdropFilter: "blur(6px)",
                      padding: "4px 10px", 
                      borderRadius: 20, 
                      fontSize: 11, 
                      fontWeight: 700, 
                      color: "#fff9fb",
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                    }}
                  >
                    <Sparkles size={11} />
                    {videoSet.title}
                  </div>

                  {/* Interactive TikTok Embed Container */}
                  <div 
                    style={{ 
                      position: "relative", 
                      width: "100%", 
                      background: "#000", 
                      minHeight: 520, 
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center" 
                    }}
                  >
                    <blockquote 
                      className="tiktok-embed" 
                      cite={videoSet.videoUrl} 
                      data-video-id={videoSet.videoId} 
                      style={{ 
                        width: "100%",
                        maxWidth: "100%", 
                        margin: 0,
                        padding: 0
                      }}
                    > 
                      <section style={{ padding: "60px 20px", textAlign: "center", color: "#fff" }}> 
                        <a target="_blank" title="@juice.gels" href="https://www.tiktok.com/@juice.gels?refer=embed" style={{ color: "#ffd6e9", fontWeight: 600, textDecoration: "underline" }}>@juice.gels</a> 
                        <p style={{ margin: "12px 0 0", fontSize: 13, color: "#4f444a" }}>Loading process video...</p>
                      </section> 
                    </blockquote>
                  </div>

                  {/* Connected Product Graphic Overlay / Footer */}
                  <div 
                    style={{ 
                      background: "rgba(86, 30, 36)",
                      borderTop: "1px solid rgba(212, 84, 122, 0.18)",
                      padding: "14px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                      <div 
                        style={{ 
                          width: 52, 
                          height: 52, 
                          borderRadius: 10, 
                          overflow: "hidden", 
                          background: "#e0a2b4", 
                          flexShrink: 0,
                          border: "1px solid rgba(212, 84, 122, 0.18)"
                        }}
                      >
                        <ImageWithFallback 
                          src={product.image} 
                          alt={product.name} 
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      
                      <div style={{ minWidth: 0 }}>
                        <p 
                          style={{ 
                            margin: "0 0 2px", 
                            fontSize: 13, 
                            fontWeight: 700, 
                            color: "#fff9fb", 
                            whiteSpace: "nowrap", 
                            overflow: "hidden", 
                            textOverflow: "ellipsis" 
                          }}
                        >
                          {product.name}
                        </p>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#ffd6e9" }}>
                          £{product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button 
                      onClick={() => onShopProduct(product.id)}
                      style={{ 
                        display: "inline-flex", 
                        alignItems: "center", 
                        gap: 6, 
                        background: "#f24e77", 
                        color: "#fff", 
                        border: "none",
                        padding: "10px 16px", 
                        borderRadius: 12, 
                        fontSize: 12, 
                        fontWeight: 700, 
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(242, 78, 119, 0.2)",
                        transition: "transform 0.15s ease"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    >
                      <ShoppingBag size={13} />
                      Shop Set
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow Button */}
          {activeIndex > 0 && (
            <button
              onClick={handlePrev}
              style={{
                position: "absolute",
                top: 260, // approximate vertical center of the 520px video container
                transform: "translateY(-50%)",
                left: 12,
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(170, 95, 95, 0.85)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(212, 84, 122, 0.18)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                zIndex: 20,
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                color: "#fff9fb",
                transition: "all 0.15s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Right Arrow Button */}
          {activeIndex < VIDEO_SETS.length - 1 && (
            <button
              onClick={handleNext}
              style={{
                position: "absolute",
                top: 260,
                transform: "translateY(-50%)",
                right: 12,
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(170, 95, 95, 0.85)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(212, 84, 122, 0.18)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                zIndex: 20,
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                color: "#fff9fb",
                transition: "all 0.15s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
            >
              <ChevronRight size={18} />
            </button>
          )}

          {/* Dots Indicator Overlay */}
          <div
            style={{
              position: "absolute",
              top: 480, // bottom region of the 520px player viewport
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 8,
              zIndex: 20,
              background: "rgba(0, 0, 0, 0.4)",
              padding: "6px 12px",
              borderRadius: 12
            }}
          >
            {VIDEO_SETS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: 8,
                  height: 8,
                  padding: 0,
                  borderRadius: "50%",
                  border: "none",
                  background: activeIndex === index ? "#fff" : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
              />
            ))}
          </div>
        </div>

        {/* Tip Box */}
        <div 
          style={{ 
            background: "linear-gradient(135deg, #fce4ea 0%, #ffd6e9 100%)", 
            borderRadius: 14, 
            padding: "14px 16px", 
            textAlign: "center",
            border: "1px solid rgba(212, 84, 122, 0.18)"
          }}
        >
          <p style={{ margin: 0, fontSize: 12, color: "#4f444a", fontWeight: 500, lineHeight: 1.6 }}>
            💡 Tap <b>Shop Set</b> to select sizes, shapes, lengths and add it straight to your basket!
          </p>
        </div>
        
      </div>
    </div>
  );
}
