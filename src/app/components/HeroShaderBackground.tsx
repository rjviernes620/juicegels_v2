import React from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export function HeroShaderBackground() {
  return (
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
        animate="on"
        axesHelper="off"
        brightness={1.2}
        cAzimuthAngle={180}
        cDistance={3.6}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#ff7828"
        color2="#9333ea"
        color3="#ff70a6"
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
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        shader="defaults"
        type="plane"
        uAmplitude={1}
        uDensity={1.3}
        uFrequency={5.5}
        uSpeed={0.4}
        uStrength={4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}

export default HeroShaderBackground;
