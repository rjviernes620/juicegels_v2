import React, { useEffect, useState, useMemo } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ShoppingBag, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX 
} from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { TiktokIcon } from "./About";
import "../../styles/Videos.css";

type Product = {
  id: string;
  groupId: string;
  name: string;
  price: number;
  description: string;
  descriptionBlocks?: any[];
  image: string;
  extraImages: string[];
  shapes: string[];
  tags: string[];
  shape: string;
  length: "Short" | "Medium" | "Long";
  collection?: string;
  orderRank?: string;
  videoUrl?: string;
  tiktokUrl?: string;
};

type VideosProps = {
  products: Product[];
  onShopProduct: (id: string) => void;
  isMobile?: boolean;
  isTablet?: boolean;
};

const STATIC_VIDEO_SETS = [
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

function SingleVideoPlayer({ videoUrl, isActive, index, activeIndex }: { videoUrl: string; isActive: boolean; index: number; activeIndex: number }) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Lazy load video only if it's near the active slide
  const isNearActive = Math.abs(index - activeIndex) <= 1;

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      // Auto-play when active
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked or failed:", err);
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive, videoUrl]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration) {
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = videoRef.current.duration;
    if (duration) {
      const newTime = (clickX / width) * duration;
      videoRef.current.currentTime = newTime;
      setProgress((newTime / duration) * 100);
    }
  };

  return (
    <div 
      className={`video-frame-container ${!isPlaying ? "paused" : ""}`}
      onClick={togglePlay}
      style={{ cursor: "pointer" }}
    >
      {isNearActive && (
        <video
          ref={videoRef}
          src={videoUrl}
          className="native-video-player"
          loop
          playsInline
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadStart={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          preload="metadata"
        />
      )}

      {/* Center Play Icon Overlay */}
      <div className="video-center-play-overlay">
        <Play size={32} fill="currentColor" />
      </div>

      {/* Loading Spinner */}
      {isLoading && isNearActive && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 6 }}>
          <div className="videos-spinner"></div>
        </div>
      )}

      {/* Controls Overlay */}
      <div className="video-controls-overlay">
        <div className="video-title-badge">
          <Sparkles size={11} fill="currentColor" />
          Juice Gels Process
        </div>

        <div className="video-bottom-controls">
          <button className="video-action-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          </button>

          <button className="video-action-btn" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="video-progress-wrapper" onClick={handleProgressBarClick}>
        <div className="video-progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export function Videos({ products, onShopProduct, isMobile, isTablet }: VideosProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const isDesktop = !isMobile && !isTablet;

  // Re-trigger TikTok embed parsing on mount/active index change (for backward-compatible slides)
  useEffect(() => {
    try {
      if ((window as any).tiktok && typeof (window as any).tiktok.embed === "function") {
        (window as any).tiktok.embed();
      }
    } catch (e) {
      console.error("TikTok embed trigger error:", e);
    }
  }, [activeIndex]);

  // Combine static configuration and loaded products dynamically
  const resolvedSets = useMemo(() => {
    return STATIC_VIDEO_SETS.map(staticSet => {
      // Find matching representative variant in products list
      // Note: we match using staticSet.productId which looks like 'JUICEGELS-1202'
      const matchedProduct = products.find(p => p.id === staticSet.productId);

      if (matchedProduct) {
        return {
          id: staticSet.id,
          title: staticSet.title,
          productId: staticSet.productId,
          videoUrl: matchedProduct.videoUrl || null, // retrieved from Sanity
          tiktokUrl: matchedProduct.tiktokUrl || staticSet.videoUrl, // retrieved from Sanity or fallback to original
          videoId: staticSet.videoId,
          product: {
            id: matchedProduct.id,
            name: matchedProduct.name,
            price: matchedProduct.price,
            image: matchedProduct.image
          }
        };
      } else {
        // Fallback if product list is not loaded yet
        return {
          id: staticSet.id,
          title: staticSet.title,
          productId: staticSet.productId,
          videoUrl: null,
          tiktokUrl: staticSet.videoUrl,
          videoId: staticSet.videoId,
          product: staticSet.defaultProduct
        };
      }
    });
  }, [products]);

  const activeSet = resolvedSets[activeIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, resolvedSets.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="videos-page-container">
      {/* Title Section */}
      <div className="videos-header">
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

        <div className="videos-header-content">
          <h2 className="videos-title">Juice Gels Studio 🎬</h2>
          <p className="videos-subtitle">
            Each set is handcrafted with love and care. Swipe to see how some popular sets were made and tap to shop instantly!
          </p>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="videos-main-content">
        <div className="videos-workspace">
          
          {/* Video player pane */}
          <div className="video-pane" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            {/* Desktop and Mobile: Slide rendering (we translate carousel on mobile, or just display active on desktop) */}
            <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
              
              {isDesktop ? (
                // On desktop, display only active video player in full-frame container to optimize layout
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  {activeSet.videoUrl ? (
                    <SingleVideoPlayer 
                      videoUrl={activeSet.videoUrl} 
                      isActive={true} 
                      index={activeIndex} 
                      activeIndex={activeIndex} 
                    />
                  ) : (
                    // Fallback to TikTok embed if not uploaded to Sanity yet
                    <div className="video-frame-container" style={{ aspectRatio: "9/16", background: "#000", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <blockquote className="tiktok-embed" cite={activeSet.tiktokUrl} data-video-id={activeSet.videoId} style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
                        <section style={{ padding: "60px 20px", textAlign: "center", color: "#fff" }}>
                          <a target="_blank" title="@juice.gels" href="https://www.tiktok.com/@juice.gels?refer=embed" style={{ color: "#ffd6e9", fontWeight: 600 }}>@juice.gels</a>
                          <p style={{ margin: "12px 0 0", fontSize: 13, color: "#999" }}>Loading TikTok video...</p>
                        </section>
                      </blockquote>
                    </div>
                  )}
                </div>
              ) : (
                // On mobile/tablet, render a swipable carousel container for native feel
                <div style={{ overflow: "hidden", width: "100%", borderRadius: 24 }}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                  >
                    {resolvedSets.map((set, index) => {
                      const isActive = index === activeIndex;
                      return (
                        <div
                          key={set.id}
                          style={{
                            minWidth: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            boxSizing: "border-box"
                          }}
                        >
                          {set.videoUrl ? (
                            <SingleVideoPlayer 
                              videoUrl={set.videoUrl} 
                              isActive={isActive} 
                              index={index} 
                              activeIndex={activeIndex} 
                            />
                          ) : (
                            // Fallback to TikTok embed
                            <div className="video-frame-container" style={{ aspectRatio: "9/16", background: "#000", display: "flex", justifyContent: "center", alignItems: "center" }}>
                              <blockquote className="tiktok-embed" cite={set.tiktokUrl} data-video-id={set.videoId} style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
                                <section style={{ padding: "60px 20px", textAlign: "center", color: "#fff" }}>
                                  <a target="_blank" title="@juice.gels" href="https://www.tiktok.com/@juice.gels?refer=embed" style={{ color: "#ffd6e9", fontWeight: 600 }}>@juice.gels</a>
                                  <p style={{ margin: "12px 0 0", fontSize: 13, color: "#999" }}>Loading TikTok video...</p>
                                </section>
                              </blockquote>
                            </div>
                          )}
                          
                          {/* Connected Product Overlay inside Carousel (Mobile/Tablet only) */}
                          <div style={{ width: "100%", maxWidth: 380, marginTop: 12 }} className="glass-product-card">
                            <h4 className="card-label">Handcrafting Process</h4>
                            <div className="product-showcase-row">
                              <div className="showcase-image-wrapper">
                                <ImageWithFallback 
                                  src={set.product.image} 
                                  alt={set.product.name} 
                                  className="showcase-image" 
                                />
                              </div>
                              <div className="showcase-details">
                                <p className="showcase-title">{set.product.name}</p>
                                <span className="showcase-price">£{set.product.price.toFixed(2)}</span>
                              </div>
                            </div>
                            <button className="shop-set-cta-btn" onClick={() => onShopProduct(set.product.id)}>
                              <ShoppingBag size={14} />
                              Shop Set
                            </button>
                            
                            {/* Premium TikTok CTA */}
                            <div className="tiktok-cta-container">
                              <p className="tiktok-cta-text">Enjoying this design process? Visit us on TikTok to show some love!</p>
                              <a 
                                href={set.tiktokUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="tiktok-glow-btn"
                              >
                                <TiktokIcon size={14} />
                                Watch on TikTok
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Carousel Navigation */}
            <div className="carousel-nav-controls">
              <button 
                onClick={handlePrev} 
                disabled={activeIndex === 0}
                className="nav-arrow-btn"
                aria-label="Previous Video"
              >
                <ChevronLeft size={20} />
              </button>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#a24e6a" }}>
                {activeIndex + 1} / {resolvedSets.length}
              </span>
              <button 
                onClick={handleNext} 
                disabled={activeIndex === resolvedSets.length - 1}
                className="nav-arrow-btn"
                aria-label="Next Video"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="carousel-indicators-row">
              {resolvedSets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`indicator-dot ${activeIndex === index ? "active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Connected Product Card Pane (Desktop only) */}
          {isDesktop && (
            <div className="info-pane">
              <div className="glass-product-card" style={{ transition: "all 0.3s ease" }}>
                <h4 className="card-label">Handcrafting Process</h4>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#a24e6a", margin: "4px 0 16px" }}>
                  {activeSet.title}
                </h3>
                
                <div className="product-showcase-row">
                  <div className="showcase-image-wrapper">
                    <ImageWithFallback 
                      src={activeSet.product.image} 
                      alt={activeSet.product.name} 
                      className="showcase-image" 
                    />
                  </div>
                  <div className="showcase-details">
                    <p className="showcase-title">{activeSet.product.name}</p>
                    <span className="showcase-price">£{activeSet.product.price.toFixed(2)}</span>
                  </div>
                </div>

                <button className="shop-set-cta-btn" onClick={() => onShopProduct(activeSet.product.id)}>
                  <ShoppingBag size={15} />
                  Shop Set Instantly
                </button>

                <hr style={{ border: "0", borderTop: "1px solid rgba(212, 84, 122, 0.12)", margin: "10px 0" }} />

                {/* TikTok CTA */}
                <div className="tiktok-cta-container">
                  <p className="tiktok-cta-text">Enjoying this design process? Visit us on TikTok to support the creator and watch comments!</p>
                  <a 
                    href={activeSet.tiktokUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="tiktok-glow-btn"
                  >
                    <TiktokIcon size={15} />
                    Watch original on TikTok
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Tip Box */}
        <div className="tip-footer-box">
          <p className="tip-text">
            💡 Tap <b>Shop Set</b> to customize sizes, shapes, lengths and add it straight to your basket!
          </p>
        </div>

      </div>
    </div>
  );
}
