import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Sparkles, RotateCcw, X, Flame } from "lucide-react";

interface HalloweenTeaserProps {
  isMobile: boolean;
  onNavigateShop?: () => void;
  onClose?: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  targetYear: number;
}

export const HalloweenTeaser: React.FC<HalloweenTeaserProps> = ({
  isMobile,
  onClose,
}) => {
  const [stage, setStage] = useState<"mystery" | "brewing" | "revealed">("mystery");

  // Calculate live countdown to October 31st midnight (00:00:00)
  const calculateTimeRemaining = useCallback((): TimeRemaining => {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Start of Halloween: Oct 31, 00:00:00
    let target = new Date(currentYear, 9, 31, 0, 0, 0);
    // End of Halloween: Oct 31, 23:59:59
    const halloweenEnd = new Date(currentYear, 9, 31, 23, 59, 59);

    let isLive = false;
    if (now.getTime() >= target.getTime() && now.getTime() <= halloweenEnd.getTime()) {
      isLive = true;
    } else if (now.getTime() > halloweenEnd.getTime()) {
      // Halloween has passed this year, point to next year
      target = new Date(currentYear + 1, 9, 31, 0, 0, 0);
    }

    const diff = Math.max(0, target.getTime() - now.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isLive,
      targetYear: target.getFullYear(),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining);

  // Live ticking countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeRemaining]);

  // Handle triggering the cauldron stirring & reveal
  const handleStirCauldron = () => {
    if (stage !== "mystery") return;
    setStage("brewing");

    // Trigger explosive festive confetti burst
    try {
      confetti({
        particleCount: isMobile ? 50 : 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#ff7828", "#fc6587", "#9333ea", "#fef08a", "#ffffff"],
        ticks: 200,
        shapes: ["star", "circle"],
      });
    } catch {
      // Fallback if canvas is unavailable
    }

    // After animation climax, reveal the countdown
    setTimeout(() => {
      setStage("revealed");
    }, 850);
  };

  // Ambient floating bubbles definition for Stage 1
  const bubbles = [
    { id: 1, icon: "🫧", left: "22%", delay: 0.1, duration: 2.8, size: 16 },
    { id: 2, icon: "✨", left: "38%", delay: 0.6, duration: 3.2, size: 14 },
    { id: 3, icon: "💜", left: "54%", delay: 1.1, duration: 2.6, size: 13 },
    { id: 4, icon: "🫧", left: "68%", delay: 0.3, duration: 3.0, size: 18 },
    { id: 5, icon: "✨", left: "78%", delay: 0.9, duration: 2.9, size: 15 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        marginTop: 24,
        marginBottom: 8,
        width: "100%",
        maxWidth: 720,
        marginInline: "auto",
        position: "relative",
        boxSizing: "border-box",
        padding: "0 12px",
      }}
    >
      {/* Outer Card with Mystic Shifting Glow */}
      <div
        style={{
          background: "linear-gradient(135deg, #150824 0%, #290a36 45%, #421045 100%)",
          borderRadius: 28,
          border: "1.5px solid rgba(255, 120, 40, 0.45)",
          boxShadow: "0 16px 40px rgba(18, 5, 30, 0.45), 0 0 25px rgba(255, 120, 40, 0.18)",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "24px 18px" : "32px 30px",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        {/* Subtle Decorative Ambient Glow Circles */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 120, 40, 0.18) 0%, rgba(255, 120, 40, 0) 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: -50,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(219, 39, 119, 0.18) 0%, rgba(219, 39, 119, 0) 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Optional Close Button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Teaser"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              background: "rgba(255, 255, 255, 0.12)",
              border: "none",
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              cursor: "pointer",
              transition: "background 0.2s ease, transform 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <X size={15} />
          </button>
        )}

        {/* Content based on Stage */}
        <AnimatePresence mode="wait">
          {stage !== "revealed" ? (
            /* ─────────────────────────────────────────────────────────────
               STAGE 1 & 2: MYSTERY HOOK (Pure Suspense, No Countdown spoiled)
               ───────────────────────────────────────────────────────────── */
            <motion.div
              key="mystery-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
              style={{ position: "relative", zIndex: 2 }}
            >
              {/* Mystery Pill Badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                <span
                  style={{
                    background: "rgba(255, 120, 40, 0.15)",
                    border: "1px solid rgba(255, 120, 40, 0.4)",
                    color: "#ff9d5c",
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Sparkles size={13} style={{ color: "#ffd166" }} />
                  A Mystery Is Brewing
                </span>
              </div>

              {/* Mystery Headline */}
              <h3
                style={{
                  fontFamily: "'Lobster', serif",
                  fontSize: isMobile ? 26 : 33,
                  color: "#ffffff",
                  margin: "0 0 8px",
                  lineHeight: 1.2,
                  textShadow: "0 2px 14px rgba(255, 120, 40, 0.35)",
                }}
              >
                Something Spooky Is Brewing... 🎃
              </h3>

              {/* Mysterious Subtitle */}
              <p
                style={{
                  color: "#e2d4e6",
                  fontSize: isMobile ? 13 : 15,
                  maxWidth: 480,
                  margin: "0 auto 24px",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                A mystic potion stirs in the shadows. Dare to touch the cauldron?
              </p>

              {/* Interactive Centerpiece: Bubbling Cauldron with Floating Particles */}
              <div
                style={{
                  position: "relative",
                  width: 140,
                  height: 120,
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={handleStirCauldron}
              >
                {/* Floating ambient bubbles */}
                {bubbles.map((b) => (
                  <motion.span
                    key={b.id}
                    animate={{
                      y: [0, -42, -75],
                      x: [0, b.id % 2 === 0 ? 8 : -8, b.id % 2 === 0 ? -4 : 4],
                      opacity: [0, 0.85, 0],
                      scale: [0.6, 1.1, 0.8],
                    }}
                    transition={{
                      duration: b.duration,
                      repeat: Infinity,
                      delay: b.delay,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      left: b.left,
                      bottom: 45,
                      fontSize: b.size,
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  >
                    {b.icon}
                  </motion.span>
                ))}

                {/* Animated Cauldron Icon */}
                <motion.div
                  animate={
                    stage === "brewing"
                      ? {
                        rotate: [-14, 14, -10, 10, -6, 6, -2, 2, 0],
                        scale: [1, 1.2, 1.1, 1.26, 0.96, 1],
                      }
                      : {
                        y: [0, -7, 0],
                      }
                  }
                  transition={
                    stage === "brewing"
                      ? { duration: 0.8, ease: "easeInOut" }
                      : { repeat: Infinity, duration: 2.8, ease: "easeInOut" }
                  }
                  whileHover={
                    stage === "mystery"
                      ? {
                        scale: 1.1,
                        rotate: [-3, 3, -2, 2, 0],
                        transition: { duration: 0.4 },
                      }
                      : {}
                  }
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(255, 120, 40, 0.15) 60%, transparent 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 2,
                    filter: "drop-shadow(0 8px 18px rgba(0, 0, 0, 0.5))",
                  }}
                >
                  <span style={{ fontSize: isMobile ? 58 : 68, userSelect: "none", display: "inline-block" }}>
                    {stage === "brewing" ? "🧪" : "🔮"}
                  </span>
                </motion.div>
              </div>

              {/* Action Button to Stir the Cauldron */}
              <motion.button
                type="button"
                onClick={handleStirCauldron}
                disabled={stage === "brewing"}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(135deg, #ff7828 0%, #db2777 100%)",
                  color: "#ffffff",
                  border: "1.5px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: 30,
                  padding: "13px 32px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 6px 24px rgba(255, 120, 40, 0.45)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "all 0.3s ease",
                }}
              >
                {stage === "brewing" ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      ✨
                    </motion.span>
                    <span>Breaking the Seal...</span>
                  </>
                ) : (
                  <>
                    <span>Tap to Stir the Cauldron</span>
                    <span style={{ fontSize: 16 }}>🥄</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          ) : (
            /* ─────────────────────────────────────────────────────────────
               STAGE 3: THE BIG REVEAL (October 31st Flash Sale + Live Countdown)
               ───────────────────────────────────────────────────────────── */
            <motion.div
              key="revealed-view"
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, type: "spring", stiffness: 100, damping: 14 }}
              style={{ position: "relative", zIndex: 2 }}
            >
              {/* Unlocked Seal Badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                <span
                  style={{
                    background: "linear-gradient(135deg, #ff7828 0%, #db2777 100%)",
                    color: "#ffffff",
                    fontSize: 11,
                    fontWeight: 900,
                    padding: "4px 14px",
                    borderRadius: 20,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    boxShadow: "0 4px 14px rgba(255, 120, 40, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Flame size={13} style={{ color: "#ffd166" }} />
                  Seal Broken • October 31st Flash Sale!
                </span>
              </div>

              {/* Reveal Headline */}
              <h3
                style={{
                  fontFamily: "'Lobster', serif",
                  fontSize: isMobile ? 28 : 36,
                  color: "#ffffff",
                  margin: "0 0 6px",
                  lineHeight: 1.2,
                  textShadow: "0 2px 16px rgba(255, 120, 40, 0.45)",
                }}
              >
                {timeLeft.isLive ? "The Halloween Sale Is LIVE! 🎃" : "Halloween Flash Sale Unlocked! 👻"}
              </h3>

              {/* Explanatory Tagline */}
              <p
                style={{
                  color: "#ffd3ea",
                  fontSize: isMobile ? 13 : 15,
                  maxWidth: 520,
                  margin: "0 auto 22px",
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {timeLeft.isLive
                  ? "Grab your handcrafted, salon-quality gel nails before our spooky stock runs out!"
                  : "Mark your calendars! The 24-Hour Halloween Flash Sale officially arrives on October 31st at Midnight."}
              </p>

              {/* Live Ticking Countdown Timer */}
              {!timeLeft.isLive ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: isMobile ? 8 : 14,
                    maxWidth: 460,
                    margin: "0 auto 24px",
                  }}
                >
                  {[
                    { label: "DAYS", value: timeLeft.days },
                    { label: "HOURS", value: timeLeft.hours },
                    { label: "MINS", value: timeLeft.minutes },
                    { label: "SECS", value: timeLeft.seconds },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      style={{
                        background: "rgba(20, 7, 32, 0.75)",
                        border: "1px solid rgba(255, 120, 40, 0.45)",
                        borderRadius: 16,
                        padding: isMobile ? "12px 6px" : "14px 10px",
                        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.35), inset 0 0 12px rgba(255, 120, 40, 0.12)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "inherit",
                          fontSize: isMobile ? 24 : 32,
                          fontWeight: 900,
                          color: "#ffffff",
                          lineHeight: 1.1,
                          textShadow: "0 0 16px rgba(255, 120, 40, 0.5)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {String(item.value).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontSize: isMobile ? 9 : 10,
                          fontWeight: 700,
                          color: "#ffc2e0",
                          letterSpacing: "0.1em",
                          marginTop: 4,
                          textTransform: "uppercase",
                        }}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    background: "rgba(255, 120, 40, 0.2)",
                    border: "1.5px solid #ff7828",
                    borderRadius: 16,
                    padding: "16px 20px",
                    maxWidth: 420,
                    margin: "0 auto 24px",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  ⚡ Flash Sale is Live for 24 Hours Only! ⚡
                </div>
              )}

              {/* Reset / Stir Again Button */}
              <div style={{ marginTop: 18 }}>
                <button
                  type="button"
                  onClick={() => setStage("mystery")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255, 255, 255, 0.65)",
                    fontSize: 11,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)";
                  }}
                >
                  <RotateCcw size={12} />
                  <span>Brew Again 🥄</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
export default HalloweenTeaser;
