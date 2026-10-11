import React from "react";

interface AmbientGradientProps {
  variant?: "brand" | "pastel";
  style?: React.CSSProperties;
}

export function AmbientGradient({ variant = "brand", style }: AmbientGradientProps) {
  const isBrand = variant === "brand";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        background: isBrand
          ? "linear-gradient(160deg, #180928 0%, #2e0d42 50%, #0c0314 100%)"
          : "linear-gradient(135deg, #ebedff 0%, #f3f2f8 50%, #dbf8ff 100%)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-25%",
          left: "-15%",
          width: "75%",
          height: "150%",
          background: isBrand
            ? "radial-gradient(circle, rgba(255, 120, 40, 0.45) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(219, 248, 255, 0.6) 0%, transparent 60%)",
          filter: "blur(40px)",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "-15%",
          width: "75%",
          height: "150%",
          background: isBrand
            ? "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(255, 112, 166, 0.35) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(235, 237, 255, 0.7) 0%, transparent 60%)",
          filter: "blur(40px)",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
    </div>
  );
}
