import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Search, X, MessageCircle, Mail, Clock, ExternalLink } from "lucide-react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";


interface FAQItem {
  id: string;
  category: "general" | "sizing" | "application";
  question: string;
  answer: React.ReactNode;
}

export function FAQ({ isMobile, isTablet }: { isMobile?: boolean; isTablet?: boolean }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "sizing" | "application">("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = useMemo<FAQItem[]>(() => [
    {
      id: "include",
      category: "general",
      question: "What does my order include?",
      answer: (
        <div>
          <p style={{ margin: "0 0 10px 0", lineHeight: 1.6 }}>Every Juice Gels order comes with:</p>
          <ul style={{ margin: 0, paddingLeft: 8, display: "flex", flexDirection: "column", gap: 6, listStyleType: "none" }}>
            <li>✨ Your handmade press-on nail set</li>
            <li>✨ 1x Mini Nail File</li>
            <li>✨ 1x Cuticle Pusher</li>
            <li>✨ 1x Mini Buffer Block</li>
            <li>✨ 1x Nail Glue</li>
          </ul>
          <p style={{ margin: "10px 0 0 0", lineHeight: 1.6 }}>Everything you need to prep, apply and enjoy your new set 💌</p>
        </div>
      ),
    },
    {
      id: "turnaround",
      category: "general",
      question: "How long do custom orders take?",
      answer: (
        <div>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Custom orders typically take <strong>5–8 working days</strong> from design approval to dispatch.
          </p>
          <p style={{ margin: "8px 0 0 0", fontSize: 12, opacity: 0.8, lineHeight: 1.6 }}>
            Please note that turnaround times may vary during busy periods.
          </p>
        </div>
      ),
    },
    {
      id: "dispatch",
      category: "general",
      question: "How will I know when my order has been dispatched?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 8px 0" }}>You'll receive a photo of your completed set before dispatch. 📸</p>
          <p style={{ margin: 0 }}>Once your order has been shipped, tracking details will be provided so you can follow its journey to you.</p>
        </div>
      ),
    },
    {
      id: "handmade",
      category: "general",
      question: "Are Juice Gels reusable?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 8px 0" }}><strong>Yes!</strong> All Juice Gels sets are designed to be reusable when applied, removed and stored correctly.</p>
          <p style={{ margin: 0 }}>Simply place your nails back into their original case after removal so they're ready to wear again. 🌸</p>
        </div>
      ),
    },
    {
      id: "crafted",
      category: "general",
      question: "Are Juice Gels handmade?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: 0 }}><strong>Yes!</strong> Every Juice Gels set is handmade to order and carefully crafted by AlyJuice. ✨</p>
        </div>
      ),
    },
    {
      id: "custom",
      category: "general",
      question: "Can I order a custom design?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: 0 }}>
            <strong>Absolutely.</strong> Submit a{" "}
            <button
              onClick={() => navigate("/custom-orders")}
              style={{
                background: "none",
                border: "none",
                color: "#ffd6e9",
                padding: 0,
                textDecoration: "underline",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "inherit",
              }}
            >
              Custom Order Request
            </button>{" "}
            through the website or send a message to{" "}
            <a
              href="https://instagram.com/juicegels"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffd6e9", fontWeight: 600, textDecoration: "underline" }}
            >
              @juicegels
            </a>{" "}
            on Instagram to get started.
          </p>
        </div>
      ),
    },
    {
      id: "instagram",
      category: "general",
      question: "Do I need Instagram to order?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 8px 0" }}>Instagram is the quickest way for us to discuss sizing, custom designs and order updates.</p>
          <p style={{ margin: 0 }}>
            If you don't have Instagram, please get in touch through the{" "}
            <button
              onClick={() => navigate("/contact")}
              style={{
                background: "none",
                border: "none",
                color: "#ffd6e9",
                padding: 0,
                textDecoration: "underline",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "inherit",
              }}
            >
              Contact Us
            </button>{" "}
            page or email and we'll arrange an alternative way to contact you.
          </p>
        </div>
      ),
    },
    {
      id: "find-size",
      category: "sizing",
      question: "How do I find my size?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 8px 0" }}>The most accurate way to find your size is with a <strong>Juice Gels Sizing Kit</strong>.</p>
          <ol style={{ margin: "0 0 8px 0", paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>Match each sizing nail to your natural nail from sidewall to sidewall.</li>
            <li>Record the corresponding numbers on your sizing guide.</li>
            <li>Once completed, send a photo of your sizing guide to <a href="https://instagram.com/juicegels" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd6e9", fontWeight: 600, textDecoration: "underline" }}>@juicegels</a> and your measurements will be saved for future orders.</li>
          </ol>
          <p style={{ margin: 0 }}>Alternatively, sizing can also be confirmed using the coin or tape method.</p>
        </div>
      ),
    },
    {
      id: "sizing-kit",
      category: "sizing",
      question: "Do I need to buy a sizing kit every time?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 8px 0" }}><strong>No.</strong> Once your sizing has been confirmed, your measurements will be saved for future orders.</p>
          <p style={{ margin: 0, fontSize: 12, opacity: 0.8 }}>The only exception is if you decide to order a different nail shape, as sizing can vary between shapes.</p>
        </div>
      ),
    },
    {
      id: "different-shape",
      category: "sizing",
      question: "What happens if I order a different nail shape?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 8px 0" }}>Nail sizes can vary between shapes and lengths.</p>
          <p style={{ margin: 0 }}>If you're ordering a shape you haven't worn before, we may need to reconfirm your measurements to ensure the perfect fit.</p>
        </div>
      ),
    },
    {
      id: "between-sizes",
      category: "sizing",
      question: "What if I'm between sizes?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: 0 }}>If you're between sizes, we recommend choosing the <strong>larger size</strong> and gently filing the sides for the perfect fit.</p>
        </div>
      ),
    },
    {
      id: "size-saved",
      category: "sizing",
      question: "How do I know my size has been saved?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 8px 0" }}>Once your sizing guide has been submitted and confirmed, your measurements will be securely saved for future orders.</p>
          <p style={{ margin: 0 }}>This means you won't need to purchase another sizing kit unless you're ordering a different nail shape.</p>
        </div>
      ),
    },
    {
      id: "wear-time",
      category: "application",
      question: "How long do press-on nails last?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 10px 0" }}>Wear time can vary depending on application, lifestyle and aftercare:</p>
          <ul style={{ margin: "0 0 10px 0", paddingLeft: 0, listStyleType: "none", display: "flex", flexDirection: "column", gap: 6 }}>
            <li>💖 <strong>Nail Glue:</strong> Typically 2–3 weeks with proper application and care.</li>
            <li>💖 <strong>Sticky Tabs:</strong> Typically 1–7 days depending on daily activities and exposure to water.</li>
          </ul>
          <p style={{ margin: 0, fontSize: 12, opacity: 0.8 }}>For the longest wear possible, ensure nails are properly prepped before application and avoid prolonged exposure to water immediately after applying.</p>
        </div>
      ),
    },
    {
      id: "prep-nails",
      category: "application",
      question: "How do I prep my natural nails before application?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 10px 0" }}>Preparation is the secret to long-lasting press-on nails. Before applying your set:</p>
          <ul style={{ margin: 0, paddingLeft: 8, display: "flex", flexDirection: "column", gap: 6, listStyleType: "none" }}>
            <li>✔️ Wash your hands thoroughly with soap and water.</li>
            <li>✔️ Push back your cuticles using the wooden cuticle stick.</li>
            <li>✔️ Gently buff the surface of your natural nails to remove shine.</li>
            <li>✔️ Wipe each nail with the included alcohol wipe to remove oils and dust.</li>
            <li>✔️ Make sure your nails are completely dry before applying.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "apply-glue",
      category: "application",
      question: "How do I apply my nails with nail glue?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 10px 0" }}>
            <strong>Best for:</strong> Long-lasting wear (typically 1–2 weeks with proper application).
          </p>
          <ol style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>
              <strong>Step 1:</strong> Select the correct press-on nail for each finger.
            </li>
            <li>
              <strong>Step 2:</strong> Apply a small amount of nail glue to both your natural nail and the inside of the press-on nail. <span style={{ opacity: 0.8, fontSize: 12 }}>(A little goes a long way—too much glue can spill out around the edges.)</span>
            </li>
            <li>
              <strong>Step 3:</strong> Align the press-on with your cuticle before placing it down.
            </li>
            <li>
              <strong>Step 4:</strong> Press firmly for 30–60 seconds, applying even pressure across the entire nail.
            </li>
            <li>
              <strong>Step 5:</strong> Avoid water, lotions and oils for at least 1–2 hours after application to allow the glue to fully cure.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "apply-tabs",
      category: "application",
      question: "How do I apply my nails with sticky tabs?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 10px 0" }}>
            <strong>Best for:</strong> Short-term wear, special occasions, photoshoots or anyone who loves switching up their nails.
          </p>
          <ol style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <li>
              <strong>Step 1:</strong> Choose the sticky tab that best matches the size of your natural nail.
            </li>
            <li>
              <strong>Step 2:</strong> Apply the sticky tab to your natural nail and press firmly.
            </li>
            <li>
              <strong>Step 3:</strong> Peel away the protective film from the tab.
            </li>
            <li>
              <strong>Step 4:</strong> Align the press-on with your cuticle and press firmly for 30–60 seconds.
            </li>
            <li>
              <strong>Step 5:</strong> Avoid getting your hands wet for at least 30 minutes after application.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "remove-nails",
      category: "application",
      question: "How do I remove my nails safely?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 10px 0", fontStyle: "italic", fontWeight: 500 }}>
            Never force or pull your press-on nails off, as this can damage your natural nails.
          </p>
          <p style={{ margin: "12px 0 6px 0", fontWeight: 600, color: "#fff9fb" }}>Removing Nail Glue:</p>
          <ol style={{ margin: "0 0 14px 0", paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>Fill a bowl with warm, soapy water and add a small amount of oil (such as cuticle, olive or baby oil).</li>
            <li>Soak your nails for 10–15 minutes.</li>
            <li>Gently lift the edges using the wooden cuticle stick.</li>
            <li>If there's resistance, soak for a little longer.</li>
            <li>Remove any remaining glue with a nail buffer and wash your hands.</li>
          </ol>
          <p style={{ margin: "0 0 6px 0", fontWeight: 600, color: "#fff9fb" }}>Removing Sticky Tabs:</p>
          <ol style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>Soak your hands in warm water for 5–10 minutes.</li>
            <li>Gently lift the sides of the press-on using the cuticle stick.</li>
            <li>Peel away the sticky tab from your natural nail.</li>
            <li>Remove any residue before storing your Juice Gels for your next wear.</li>
          </ol>
        </div>
      ),
    },
    {
      id: "care-nails",
      category: "application",
      question: "How do I care for and store my Juice Gels?",
      answer: (
        <div style={{ lineHeight: 1.6 }}>
          <p style={{ margin: "0 0 10px 0" }}>Want to wear your set again and again?</p>
          <ul style={{ margin: 0, paddingLeft: 8, display: "flex", flexDirection: "column", gap: 6, listStyleType: "none" }}>
            <li>♡ Store your nails back in their case after use.</li>
            <li>♡ Remove any leftover glue or sticky tabs before storing.</li>
            <li>♡ Keep away from prolonged exposure to water and harsh cleaning products.</li>
            <li>♡ Treat your press-ons with the same care you would a fresh salon manicure.</li>
          </ul>
        </div>
      ),
    },
  ], [navigate]);

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          gap: 12,
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
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 32 }}>❓</span>
          <div>
            <h2
              style={{
                fontFamily: "'Lobster', serif",
                fontSize: 32,
                color: "#fc6587",
                margin: "0 0 6px",
                lineHeight: 1.2,
              }}
            >
              FAQ
            </h2>
            <p
              style={{
                color: "#4f444a",
                margin: 0,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Frequently Asked Questions & How-To Guides 🌸
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 20, width: "100%", boxSizing: "border-box" }}>
        {/* Search Bar */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Search
            size={18}
            style={{
              position: "absolute",
              left: 14,
              color: "#4f444a",
              opacity: 0.6,
            }}
          />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 40px 12px 42px",
              background: "#fff0f4",
              border: "1.5px solid rgba(212, 84, 122, 0.18)",
              borderRadius: 14,
              fontSize: 14,
              color: "#4f444a",
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#fc6587")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(212, 84, 122, 0.18)")}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                position: "absolute",
                right: 12,
                background: "none",
                border: "none",
                color: "#4f444a",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            paddingBottom: 4,
            WebkitOverflowScrolling: "touch",
          }}
        >
          {(
            [
              { id: "all", label: "All" },
              { id: "general", label: "🌸 General" },
              { id: "sizing", label: "📏 Sizing" },
              { id: "application", label: "💅 Application" },
            ] as const
          ).map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 600,
                  border: "1px solid rgba(212, 84, 122, 0.18)",
                  background: isActive ? "#fc6587" : "#ff8fc7",
                  color: isActive ? "#fff9fb" : "#4f444a",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div
                  key={item.id}
                  style={{
                    background: "#ff8fc7",
                    borderRadius: 16,
                    border: "1px solid rgba(212, 84, 122, 0.18)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                    overflow: "hidden",
                    transition: "all 0.25s ease",
                  }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    style={{
                      width: "100%",
                      padding: "16px 18px",
                      background: "none",
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#fff9fb",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: "#fff9fb",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? "1000px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 18px 18px",
                        fontSize: 13.5,
                        color: "#4f444a",
                        borderTop: "1px solid rgba(212, 84, 122, 0.08)",
                      }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "#4f444a" }}>
              <span style={{ fontSize: 24, display: "block", marginBottom: 8 }}>🌸</span>
              <p style={{ margin: 0, fontWeight: 500 }}>No matching questions found.</p>
              <p style={{ margin: "4px 0 0", fontSize: 12, opacity: 0.8 }}>Try searching for keywords like &quot;sizing&quot; or &quot;glue&quot;</p>
            </div>
          )}
        </div>

        {/* Response Time & Contact Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: 14,
            padding: "16px",
            border: "1px dashed rgba(212, 84, 122, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 8,
          }}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Clock size={16} style={{ color: "#ffd6e9", marginTop: 2, flexShrink: 0 }} />
            <div style={{ fontSize: 13, lineHeight: 1.5, color: "#4f444a" }}>
              <strong style={{ color: "#fff9fb" }}>Response Times:</strong> We typically respond to Instagram DMs and Emails within 24 hours.
            </div>
          </div>
        </div>

        {/* Contact Links helper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 12,
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: 13, color: "#4f444a", fontWeight: 500 }}>
            Still have questions? We are always happy to help! 💕
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href="https://ig.me/m/juicegels"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                background: "#f24e77",
                color: "#fff",
                padding: "10px 14px",
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(242, 78, 119, 0.15)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <MessageCircle size={15} />
              Instagram
              <ExternalLink size={10} style={{ opacity: 0.8 }} />
            </a>

            <a
              href="mailto:juicegels@gmail.com"
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                background: "#fc6587",
                color: "#fff9fb",
                border: "1.5px solid rgba(212, 84, 122, 0.18)",
                padding: "8px 14px",
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Mail size={15} style={{ color: "#ffd6e9" }} />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
