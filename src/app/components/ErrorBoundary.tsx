import React, { Component, type ReactNode } from "react";
import { useRouteError } from "react-router-dom";

// ── Local Error Boundary for Subtrees (e.g. Stripe checkout widget) ──
interface LocalProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface LocalState {
  hasError: boolean;
  error: Error | null;
}

export class LocalErrorBoundary extends Component<LocalProps, LocalState> {
  constructor(props: LocalProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): LocalState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("LocalErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{
          padding: "16px",
          background: "rgba(239, 68, 68, 0.08)",
          border: "1.5px dashed rgba(239, 68, 68, 0.3)",
          borderRadius: 14,
          color: "#ffd6e9",
          fontSize: 13,
          textAlign: "center",
          lineHeight: 1.5,
          marginTop: 14
        }}>
          <p style={{ margin: "0 0 6px", fontWeight: 600 }}>⚡ Express payment is temporarily unavailable</p>
          <p style={{ margin: 0, opacity: 0.85, fontSize: 12 }}>Please proceed with standard preorder checkout below.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// ── Reusable Error Page Presentation Component ──
interface ErrorPageProps {
  errorTitle?: string;
  errorMessage?: string;
  errorEmoji?: string;
}

export function ErrorPage({
  errorTitle = "Something went wrong",
  errorMessage = "An unexpected error occurred.",
  errorEmoji = "💅"
}: ErrorPageProps) {
  const handleReload = () => {
    window.location.href = "/";
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1e1014 0%, #2f171d 100%)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: "24px",
      boxSizing: "border-box",
      color: "#fff9fb"
    }}>
      <div style={{
        width: "100%",
        maxWidth: 480,
        background: "rgba(30, 20, 25, 0.6)",
        backdropFilter: "blur(20px)",
        border: "1.5px solid rgba(252, 101, 135, 0.2)",
        borderRadius: 24,
        padding: "36px 28px",
        boxShadow: "0 24px 64px rgba(0, 0, 0, 0.4)",
        textAlign: "center"
      }}>
        <div style={{ fontSize: 54, marginBottom: 16 }}>{errorEmoji}</div>
        
        <h1 style={{
          fontFamily: "'Lobster', serif",
          fontSize: 32,
          color: "#fc6587",
          margin: "0 0 12px",
          letterSpacing: "0.5px"
        }}>
          {errorTitle}
        </h1>
        
        <p style={{
          fontSize: 14,
          lineHeight: 1.6,
          color: "#ffd6e9",
          opacity: 0.9,
          margin: "0 0 24px"
        }}>
          We encountered an unexpected error. Don&apos;t worry, your cart details are safe! Let&apos;s get you back to browsing.
        </p>

        <button
          onClick={handleReload}
          style={{
            background: "#fc6587",
            color: "#fff9fb",
            border: "none",
            borderRadius: 14,
            padding: "12px 28px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(252, 101, 135, 0.3)",
            transition: "transform 0.2s ease, background 0.2s ease",
            outline: "none"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#fd85a0";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#fc6587";
            e.currentTarget.style.transform = "none";
          }}
        >
          Return to Shop Home
        </button>

        <details style={{
          marginTop: 28,
          textAlign: "left",
          borderTop: "1px solid rgba(252, 101, 135, 0.15)",
          paddingTop: 16
        }}>
          <summary style={{
            fontSize: 11,
            color: "#fc6587",
            cursor: "pointer",
            userSelect: "none",
            outline: "none",
            fontWeight: 600,
            letterSpacing: "0.03em",
            textTransform: "uppercase"
          }}>
            Developer details
          </summary>
          <pre style={{
            marginTop: 10,
            background: "rgba(0, 0, 0, 0.25)",
            padding: "12px",
            borderRadius: 10,
            fontSize: 11,
            fontFamily: "monospace",
            overflowX: "auto",
            color: "#ffd6e9",
            opacity: 0.8,
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
            wordBreak: "break-all"
          }}>
            {errorMessage}
          </pre>
        </details>
      </div>
    </div>
  );
}

// ── Global Router Error Boundary ──
export function RouteErrorBoundary() {
  const error = useRouteError() as any;
  console.error("RouteErrorBoundary caught a routing/render error:", error);

  const errorMessage = error instanceof Error
    ? error.message
    : typeof error === "string"
      ? error
      : error?.statusText || error?.message || "An unknown error occurred.";

  return <ErrorPage errorMessage={errorMessage} />;
}

// ── Top-Level Class Error Boundary ──
interface GlobalProps {
  children: ReactNode;
}

interface GlobalState {
  hasError: boolean;
  error: Error | null;
}

export class GlobalErrorBoundary extends Component<GlobalProps, GlobalState> {
  constructor(props: GlobalProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): GlobalState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("GlobalErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || "An unexpected error occurred.";
      return <ErrorPage errorMessage={errorMessage} />;
    }

    return this.props.children;
  }
}
