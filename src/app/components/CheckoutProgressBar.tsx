import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Page } from "../types";

interface CheckoutProgressBarProps {
  page: Page;
  setPage: (page: Page) => void;
}

export function CheckoutProgressBar({ page, setPage }: CheckoutProgressBarProps) {
  // Map page state to step index
  const getCurrentStepIndex = () => {
    if (page === "basket") return 0;
    if (page === "preorder") return 1;
    if (page === "confirmation") return 2;
    return 0;
  };

  const currentIdx = getCurrentStepIndex();

  const steps = [
    { label: "Shopping Basket", pageKey: "basket" as Page },
    { label: "Customer Details", pageKey: "preorder" as Page },
    { label: "Order Complete", pageKey: "confirmation" as Page },
  ];

  return (
    <div 
      style={{
        width: "100%",
        background: "rgba(255, 240, 244, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(252, 101, 135, 0.15)",
        padding: "16px 20px",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <div 
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          boxSizing: "border-box",
        }}
      >
        {steps.map((step, idx) => {
          const isActive = idx === currentIdx;
          const isCompleted = idx < currentIdx;
          const isPending = idx > currentIdx;
          const isClickable = page === "preorder" && idx === 0;

          return (
            <React.Fragment key={step.label}>
              {/* Step Circle & Label Column */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "110px",
                  position: "relative",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}
              >
                {/* Step Circle Indicator */}
                <button
                  disabled={!isClickable}
                  onClick={() => {
                    if (isClickable) {
                      setPage(step.pageKey);
                    }
                  }}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "13px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: isClickable ? "pointer" : "default",
                    border: isActive 
                      ? "2px solid #ffd6e9" 
                      : isCompleted 
                      ? "2px solid rgba(252, 101, 135, 0.15)"
                      : "2px solid rgba(252, 101, 135, 0.1)",
                    background: isActive 
                      ? "#fc6587" 
                      : isCompleted 
                      ? "#ffd6e9" 
                      : "#fff9fb",
                    color: isActive 
                      ? "#ffffff" 
                      : isCompleted 
                      ? "#fc6587" 
                      : "#8e7a82",
                    boxShadow: isActive 
                      ? "0 0 12px rgba(252, 101, 135, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)" 
                      : "none",
                    outline: "none",
                    padding: 0,
                    zIndex: 2,
                  }}
                  onMouseEnter={(e) => {
                    if (isClickable) {
                      e.currentTarget.style.transform = "scale(1.08)";
                      e.currentTarget.style.boxShadow = "0 4px 10px rgba(252, 101, 135, 0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isClickable) {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                  title={isClickable ? `Go back to ${step.label}` : undefined}
                  aria-label={`${step.label} - Step ${idx + 1}`}
                >
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <Check size={16} strokeWidth={3} />
                    </motion.div>
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                </button>

                {/* Step Label */}
                <span
                  onClick={() => {
                    if (isClickable) {
                      setPage(step.pageKey);
                    }
                  }}
                  style={{
                    fontSize: "11px",
                    marginTop: "8px",
                    fontWeight: isActive ? 700 : 500,
                    transition: "all 0.3s ease",
                    cursor: isClickable ? "pointer" : "default",
                    textDecoration: isClickable ? "underline underline-offset-4 decoration-[#fc6587]/30" : "none",
                    color: isActive 
                      ? "#fc6587" 
                      : isCompleted 
                      ? "#4f444a" 
                      : "#8e7a82",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    if (isClickable) {
                      e.currentTarget.style.color = "#fc6587";
                      e.currentTarget.style.textDecorationColor = "#fc6587";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isClickable) {
                      e.currentTarget.style.color = "#4f444a";
                      e.currentTarget.style.textDecorationColor = "rgba(252, 101, 135, 0.3)";
                    }
                  }}
                >
                  {step.label}
                </span>
              </div>

            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
