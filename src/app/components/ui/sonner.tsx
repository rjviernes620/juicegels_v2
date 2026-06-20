"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "#fff5f7",
          "--normal-text": "#3d1a24",
          "--normal-border": "rgba(212, 84, 122, 0.18)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
