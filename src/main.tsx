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

// Intercept global fetch to inject X-Maintenance-Bypass header if the token is available
(() => {
  // Clear any existing maintenance token from localStorage on fresh page load to force re-authentication
  try {
    localStorage.removeItem("maintenance_bypass_token");
  } catch (e) {
    console.error("Failed to clear maintenance_bypass_token from localStorage:", e);
  }

  const originalFetch = window.fetch;
  window.fetch = function (input, init) {
    const token = (window as any).maintenance_bypass_token || localStorage.getItem("maintenance_bypass_token");
    if (token) {
      init = init || {};
      init.headers = init.headers || {};
      if (init.headers instanceof Headers) {
        init.headers.set("X-Maintenance-Bypass", token);
      } else if (Array.isArray(init.headers)) {
        const index = init.headers.findIndex(([k]) => k.toLowerCase() === "x-maintenance-bypass");
        if (index !== -1) {
          init.headers[index] = ["X-Maintenance-Bypass", token];
        } else {
          init.headers.push(["X-Maintenance-Bypass", token]);
        }
      } else {
        init.headers["X-Maintenance-Bypass"] = token;
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