import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { RouteErrorBoundary, GlobalErrorBoundary, ErrorPage } from "./app/components/ErrorBoundary.tsx";
import "./styles/index.css";

// Auto-recover if a new deployment changed chunk hashes while the user has an open tab
if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", (event) => {
    event.preventDefault();
    const lockKey = "jg_chunk_reload_lock";
    const now = Date.now();
    const last = Number(sessionStorage.getItem(lockKey) || 0);
    if (now - last > 10000) {
      sessionStorage.setItem(lockKey, String(now));
      window.location.reload();
    }
  });

  window.addEventListener("error", (event) => {
    const msg = (event?.message || (event?.error && event.error.message) || "").toLowerCase();
    if (
      msg.includes("importing a module script failed") ||
      msg.includes("failed to fetch dynamically imported module") ||
      msg.includes("error loading dynamically imported module") ||
      msg.includes("failed to load module script")
    ) {
      const lockKey = "jg_chunk_reload_lock";
      const now = Date.now();
      const last = Number(sessionStorage.getItem(lockKey) || 0);
      if (now - last > 10000) {
        sessionStorage.setItem(lockKey, String(now));
        window.location.reload();
      }
    }
  });
}

import { initAppCheck, getAppCheckToken } from "./firebase";

// Initialize Firebase App Check on load
initAppCheck();

function setFetchHeader(headers: HeadersInit, name: string, value: string) {
  if (headers instanceof Headers) {
    headers.set(name, value);
  } else if (Array.isArray(headers)) {
    const index = headers.findIndex(([k]) => k.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
      headers[index] = [name, value];
    } else {
      headers.push([name, value]);
    }
  } else {
    (headers as Record<string, string>)[name] = value;
  }
}

function isInternalApiRequest(input: RequestInfo | URL): boolean {
  try {
    const urlStr =
      typeof input === "string"
        ? input
        : input instanceof URL
        ? input.href
        : (input as Request).url;

    if (!urlStr) return false;

    // Relative URLs targeting backend endpoints
    if (urlStr.startsWith("/") && !urlStr.startsWith("//")) {
      return (
        urlStr.startsWith("/api") ||
        urlStr.startsWith("/create-checkout-session") ||
        urlStr.startsWith("/validate-coupon") ||
        urlStr.startsWith("/check-eligibility") ||
        urlStr.startsWith("/create-custom-order")
      );
    }

    // Absolute URLs pointing to our backend
    const parsed = new URL(urlStr, window.location.origin);
    const isOurBackend =
      parsed.origin === window.location.origin ||
      (parsed.hostname === "localhost" && parsed.port === "4000") ||
      (parsed.hostname === "127.0.0.1" && parsed.port === "4000");

    if (isOurBackend) {
      const p = parsed.pathname;
      return (
        p.startsWith("/api") ||
        p.startsWith("/create-checkout-session") ||
        p.startsWith("/validate-coupon") ||
        p.startsWith("/check-eligibility") ||
        p.startsWith("/create-custom-order")
      );
    }
  } catch {
    return false;
  }
  return false;
}

// Intercept global fetch to inject X-Maintenance-Bypass and X-Firebase-AppCheck headers
(() => {
  // Clear any existing maintenance token from localStorage on fresh page load to force re-authentication
  try {
    localStorage.removeItem("maintenance_bypass_token");
  } catch (e) {
    console.error("Failed to clear maintenance_bypass_token from localStorage:", e);
  }

  const originalFetch = window.fetch;
  window.fetch = async function (input, init) {
    init = init || {};
    init.headers = init.headers || {};

    const token = (window as any).maintenance_bypass_token || localStorage.getItem("maintenance_bypass_token");
    if (token) {
      setFetchHeader(init.headers, "X-Maintenance-Bypass", token);
    }

    // Attach Firebase App Check token to internal API requests
    if (isInternalApiRequest(input)) {
      try {
        const appCheckToken = await getAppCheckToken();
        if (appCheckToken) {
          setFetchHeader(init.headers, "X-Firebase-AppCheck", appCheckToken);
        }
      } catch (err) {
        // Gracefully proceed if App Check is temporarily unreachable
      }
    }

    return originalFetch(input, init);
  };
})();

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/home", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/basket", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/about", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/videos", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/search", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/shop", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/halloween", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/faq", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/product/:id", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/checkout-success", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/confirmation", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/error", element: <ErrorPage />, errorElement: <RouteErrorBoundary /> },
  { path: "*", element: <App />, errorElement: <RouteErrorBoundary /> },
]);

createRoot(document.getElementById("root")!).render(
  <GlobalErrorBoundary>
    <RouterProvider router={router} />
  </GlobalErrorBoundary>
);