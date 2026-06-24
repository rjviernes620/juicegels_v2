import React, { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingBag, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";


type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type VideosProps = {
  products: Product[];
  onShopProduct: (id: string) => void;
  isMobile?: boolean;
  isTablet?: boolean;
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
      price: 12.00,
      image: "images/nailsize.jpg"
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
      price: 18.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "popstartips",
    title: "Handcrafting Pop Star Tips",
    productId: "JUICEGELS-0872",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7630491166462561558",
    videoId: "7630491166462561558",
    defaultProduct: {
      id: "JUICEGELS-0872",
      name: "Pop Tips Set",
      price: 17.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "mochabluemuse",
    title: "Handcrafting Mocha Blue Muse",
    productId: "JUICEGELS-1142",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7603120562440785174",
    videoId: "7603120562440785174",
    defaultProduct: {
      id: "JUICEGELS-1142",
      name: "Mocha Blue Muse Set",
      price: 15.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "evergreensparkles",
    title: "Handcrafting Evergreen Sparkles",
    productId: "JUICEGELS-1187",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7575994342922292502",
    videoId: "7575994342922292502",
    defaultProduct: {
      id: "JUICEGELS-1187",
      name: "Evergreen Spark Set",
      price: 18.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "ghoulglam",
    title: "Handcrafting Ghoul Glam",
    productId: "JUICEGELS-9999",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7565493075104091414",
    videoId: "7565493075104091414",
    defaultProduct: {
      id: "JUICEGELS-9999",
      name: "Ghoul Glam Set",
      price: 15.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "sparklescream",
    title: "Handcrafting Sparkle Scream",
    productId: "JUICEGELS-1247",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7562995151417691414",
    videoId: "7562995151417691414",
    defaultProduct: {
      id: "JUICEGELS-1247",
      name: "Sparkle Scream Set",
      price: 15.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "pinkoween",
    title: "Handcrafting Pink-o-ween",
    productId: "JUICEGELS-1277",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7559654195863751958",
    videoId: "7559654195863751958",
    defaultProduct: {
      id: "JUICEGELS-1277",
      name: "Pink-o-ween Set",
      price: 15.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "cocoaquilt",
    title: "Handcrafting Cocoa Quilt",
    productId: "JUICEGELS-1292",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7557040622951992598",
    videoId: "7557040622951992598",
    defaultProduct: {
      id: "JUICEGELS-1292",
      name: "Cocoa Quilt Set",
      price: 18.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "burgundybling",
    title: "Handcrafting Burgundy Bling",
    productId: "JUICEGELS-1352",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7554021380258319638",
    videoId: "7554021380258319638",
    defaultProduct: {
      id: "JUICEGELS-1352",
      name: "Burgundy Bling Set",
      price: 16.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "dolcedot",
    title: "Handcrafting Dolce Dot",
    productId: "JUICEGELS-1367",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7552227357973581078",
    videoId: "7552227357973581078",
    defaultProduct: {
      id: "JUICEGELS-1367",
      name: "Dolce Dot Set",
      price: 17.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "velourembre",
    title: "Handcrafting Velour Embrè",
    productId: "JUICEGELS-1382",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7549300417667108118",
    videoId: "7549300417667108118",
    defaultProduct: {
      id: "JUICEGELS-1382",
      name: "Velour Embrè Set",
      price: 19.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "terraflora",
    title: "Handcrafting Terra Flora",
    productId: "JUICEGELS-0287",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7545456016683453718",
    videoId: "7545456016683453718",
    defaultProduct: {
      id: "JUICEGELS-0287",
      name: "Terra Flora Set",
      price: 17.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "pinkeclipse",
    title: "Handcrafting Pink Eclipse",
    productId: "JUICEGELS-1427",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7542877318243421463",
    videoId: "7542877318243421463",
    defaultProduct: {
      id: "JUICEGELS-1427",
      name: "Pink Eclipse Set",
      price: 18.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "petalpearl",
    title: "Handcrafting Petal Pearl",
    productId: "JUICEGELS-0302",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7528096243143249174",
    videoId: "7528096243143249174",
    defaultProduct: {
      id: "JUICEGELS-0302",
      name: "Petal Pearl Set",
      price: 14.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "sunsethaze",
    title: "Handcrafting Sunset Haze",
    productId: "JUICEGELS-0422",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7513300972421106966",
    videoId: "7513300972421106966",
    defaultProduct: {
      id: "JUICEGELS-0422",
      name: "Sunset Haze Set",
      price: 14.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "sundownshine",
    title: "Handcrafting Sundown Shine",
    productId: "JUICEGELS-0407",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7512531788359650582",
    videoId: "7512531788359650582",
    defaultProduct: {
      id: "JUICEGELS-0407",
      name: "Sundown Shine Set",
      price: 15.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "petalflora",
    title: "Handcrafting Petal Flora",
    productId: "JUICEGELS-0211",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7506225963399679254",
    videoId: "7506225963399679254",
    defaultProduct: {
      id: "JUICEGELS-0211",
      name: "Petal Flora Set",
      price: 17.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "pinkopulence",
    title: "Handcrafting Pink Opulence",
    productId: "JUICEGELS-0241",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7502077568544214274",
    videoId: "7502077568544214274",
    defaultProduct: {
      id: "JUICEGELS-0241",
      name: "Pink Opulence Set",
      price: 20.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "chromamuse",
    title: "Handcrafting Chroma Muse",
    productId: "JUICEGELS-0256",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7502077568544214274",
    videoId: "7502077568544214274",
    defaultProduct: {
      id: "JUICEGELS-0256",
      name: "Chroma Muse Set",
      price: 16.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "kittyconstellation",
    title: "Handcrafting Kitty Constellation",
    productId: "JUICEGELS-1502",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7493865208012786966",
    videoId: "7493865208012786966",
    defaultProduct: {
      id: "JUICEGELS-1502",
      name: "Kitty Constellation Set",
      price: 17.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "kanrojikisses",
    title: "Handcrafting Kanroji Kisses",
    productId: "JUICEGELS-9998",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7489878567422070038",
    videoId: "7489878567422070038",
    defaultProduct: {
      id: "JUICEGELS-9998",
      name: "Kanroji Kisses Set",
      price: 17.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "tropicalblush",
    title: "Handcrafting Tropical Blush",
    productId: "JUICEGELS-0662",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7487260231391628566",
    videoId: "7487260231391628566",
    defaultProduct: {
      id: "JUICEGELS-0662",
      name: "Tropical Blush Set",
      price: 13.00,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "rubybling",
    title: "Handcrafting Ruby Bling",
    productId: "JUICEGELS-1532",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7481641416083524886",
    videoId: "7481641416083524886",
    defaultProduct: {
      id: "JUICEGELS-1532",
      name: "Ruby Bling Set",
      price: 17.50,
      image: "images/nailsize.jpg"
    }
  },
  {
    id: "gildedgeode",
    title: "Handcrafting Gilded Geode",
    productId: "JUICEGELS-0542",
    videoUrl: "https://www.tiktok.com/@juice.gels/video/7479159660667358486",
    videoId: "7479159660667358486",
    defaultProduct: {
      id: "JUICEGELS-0542",
      name: "Gilded Geode Set",
      price: 19.00,
      image: "images/nailsize.jpg"
    }
  }
];

export function Videos({ products, onShopProduct, isMobile, isTablet }: VideosProps) {
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
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)", 
          padding: "24px 20px", 
          textAlign: "center",
          borderBottom: "1px solid rgba(212, 84, 122, 0.18)"
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
            animate="off"
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
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 28, color: "#a24e6a", margin: "0 0 6px" }}>
            Juice Gels Studio 🎬
          </h2>
          <p style={{ color: "#4f444a", margin: 0, fontSize: 12, lineHeight: 1.5 }}>
            Each set is handcrafted with love and care. Swipe to see how some popular sets were made and tap to shop instantly!
          </p>
        </div>
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
