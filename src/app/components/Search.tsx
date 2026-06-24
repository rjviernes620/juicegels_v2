import React, { useState, useMemo } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search as SearchIcon, ArrowRight, X, Sparkles } from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";


type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  tags: string[];
};

type SearchProps = {
  products: Product[];
  onShopProduct: (id: string) => void;
};

const SUGGESTIONS = ["tips", "pink", "shine", "bow", "stardust"];
const POPULAR_IDS = ["JUICEGELS-1202", "JUICEGELS-1127", "JUICEGELS-0031", "JUICEGELS-0016"];

export function Search({ products, onShopProduct }: SearchProps) {
  const [query, setQuery] = useState("");

  // Filter products by unique groupId to ensure each set is shown only once
  const uniqueProducts = useMemo(() => {
    // Structural helper to extract base groupId or name group key
    const seen = new Set<string>();
    return products.filter((p) => {
      // Normalize groupId or similar structure
      const groupKey = p.name.toLowerCase().replace(/\s+/g, "_");
      if (seen.has(groupKey)) {
        return false;
      }
      seen.add(groupKey);
      return true;
    });
  }, [products]);

  // Perform search matching
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const normQuery = query.toLowerCase().trim();

    return uniqueProducts.filter((p) => {
      const matchName = p.name.toLowerCase().includes(normQuery);
      const matchId = p.id.toLowerCase().includes(normQuery);
      const matchDesc = p.description.toLowerCase().includes(normQuery);
      const matchTags = p.tags.some((tag) => tag.toLowerCase().includes(normQuery));

      return matchName || matchId || matchDesc || matchTags;
    });
  }, [query, uniqueProducts]);

  // Find popular sets based on POPULAR_IDS list
  const popularSets = useMemo(() => {
    return uniqueProducts.filter((p) => 
      POPULAR_IDS.some((popId) => p.id.startsWith(popId.substring(0, 14))) || 
      POPULAR_IDS.includes(p.id)
    ).slice(0, 4);
  }, [uniqueProducts]);

  const handleClear = () => {
    setQuery("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  return (
    <div style={{ background: "#ffd2e6", minHeight: "calc(100vh - 50px)", paddingBottom: 60 }}>
      {/* Title Header */}
      <div 
        style={{ 
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, #83495b 0%, #fce4ea 60%, #fdf2f4 100%)", 
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
            cameraZoom={3}
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
            positionX={0}
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
          <h2 style={{ fontFamily: "'Lobster', serif", fontSize: 28, color: "#9e4056", margin: "0 0 6px" }}>
            Search Studio 🔍
          </h2>
          <p style={{ color: "#4f444a", margin: 0, fontSize: 12, lineHeight: 1.5 }}>
            Find your perfect press-on nail look by name, tags, description, or product ID.
          </p>
        </div>
      </div>

      {/* Main Search Viewport Container */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 14px", display: "flex", flexDirection: "column", gap: 24, width: "100%", boxSizing: "border-box" }}>
        
        {/* Search Bar Input */}
        <div style={{ position: "relative", width: "100%" }}>
          <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#4f444a", display: "flex", alignItems: "center" }}>
            <SearchIcon size={18} />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, tags, or ID..."
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px 40px 12px 40px",
              borderRadius: 24,
              border: "1px solid rgba(212, 84, 122, 0.18)",
              background: "#fff",
              fontSize: 14,
              color: "#000000",
              outline: "none",
              boxShadow: "0 2px 10px rgba(212, 16, 71, 0.04)",
              transition: "border-color 0.2s ease"
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#f24e77"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(212, 84, 122, 0.18)"; }}
          />
          {query && (
            <button
              onClick={handleClear}
              style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#4f444a",
                display: "flex",
                alignItems: "center",
                padding: 0
              }}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Suggestion Chips */}
        <div>
          <p style={{ margin: "0 0 10px 4px", fontSize: 12, fontWeight: 600, color: "#4f444a" }}>
            Popular Searches
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  background: query === suggestion ? "#f24e77" : "#b65151",
                  color: query === suggestion ? "#d57171" : "#fff9fb",
                  border: "1px solid rgba(212, 84, 122, 0.18)",
                  borderRadius: 20,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.02)"
                }}
                onMouseEnter={(e) => { 
                  if (query !== suggestion) {
                    e.currentTarget.style.background = "#fc3469";
                    e.currentTarget.style.borderColor = "#f24e77";
                  }
                }}
                onMouseLeave={(e) => {
                  if (query !== suggestion) {
                    e.currentTarget.style.background = "#e35959";
                    e.currentTarget.style.borderColor = "rgba(212, 84, 122, 0.18)";
                  }
                }}
              >
                #{suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results / Popular Lists */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {query.trim() ? (
            <>
              {/* Query Results */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#fff9fb" }}>
                  {searchResults.length} {searchResults.length === 1 ? "set" : "sets"} found
                </span>
                {searchResults.length > 0 && (
                  <span style={{ fontSize: 11, color: "#4f444a" }}>
                    Tap a card to shop
                  </span>
                )}
              </div>

              {searchResults.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => onShopProduct(product.id)}
                      style={{
                        background: "#834242",
                        borderRadius: 14,
                        border: "1px solid rgba(212, 84, 122, 0.18)",
                        padding: 12,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(212, 16, 71, 0.03)",
                        transition: "all 0.15s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.01)";
                        e.currentTarget.style.borderColor = "#f24e77";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.borderColor = "rgba(212, 84, 122, 0.18)";
                      }}
                    >
                      {/* Image */}
                      <div style={{ width: 64, height: 64, borderRadius: 10, overflow: "hidden", background: "#e0a2b4", flexShrink: 0, border: "1px solid rgba(212, 84, 122, 0.18)" }}>
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      {/* Text details */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 700, color: "#fff9fb", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {product.name}
                        </p>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#ffd6e9" }}>
                          £{product.price.toFixed(2)}
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                          {product.tags.slice(0, 2).map((t) => (
                            <span key={t} style={{ fontSize: 9, background: "#e0a2b4", color: "#4f444a", padding: "2px 6px", borderRadius: 4 }}>
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Navigation Arrow */}
                      <div style={{ color: "#f24e77", padding: 4 }}>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* No Results Empty State */
                <div 
                  style={{ 
                    textAlign: "center", 
                    padding: "40px 20px", 
                    background: "#e0a2b4", 
                    borderRadius: 18, 
                    border: "1px solid rgba(212, 84, 122, 0.18)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.02)"
                  }}
                >
                  <p style={{ fontSize: 32, margin: "0 0 10px" }}>🕵️‍♀️</p>
                  <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "#fff9fb" }}>
                    No matching sets found
                  </p>
                  <p style={{ margin: 0, fontSize: 12, color: "#4f444a", lineHeight: 1.5 }}>
                    Double-check spelling or try searching generic terms like "shine", "tips", or "bow".
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Popular / Recommended Sets */}
              <p style={{ margin: "10px 0 10px 4px", fontSize: 12, fontWeight: 600, color: "#4f444a" }}>
                🔥 Recommended Sets
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {popularSets.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onShopProduct(product.id)}
                    style={{
                      background: "#e77171",
                      borderRadius: 14,
                      border: "1px solid rgba(212, 84, 122, 0.18)",
                      padding: 12,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(212, 16, 71, 0.03)",
                      transition: "all 0.15s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.01)";
                      e.currentTarget.style.borderColor = "#f24e77";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.borderColor = "rgba(212, 84, 122, 0.18)";
                    }}
                  >
                    {/* Image */}
                    <div style={{ width: 64, height: 64, borderRadius: 10, overflow: "hidden", background: "#e0a2b4", flexShrink: 0, border: "1px solid rgba(212, 84, 122, 0.18)" }}>
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {/* Text details */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, margin: "0 0 2px" }}>
                        <span style={{ fontSize: 9, background: "linear-gradient(135deg, #fce4ea, #ffd6e9)", color: "#f24e77", padding: "1px 5px", borderRadius: 4, fontWeight: 700, display: "flex", alignItems: "center", gap: 2 }}>
                          <Sparkles size={8} /> Popular
                        </span>
                      </div>
                      <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 700, color: "#fff9fb", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {product.name}
                      </p>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#ffd6e9" }}>
                        £{product.price.toFixed(2)}
                      </span>
                    </div>
                    {/* Navigation Arrow */}
                    <div style={{ color: "#f24e77", padding: 4 }}>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
