import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { RouteErrorBoundary, GlobalErrorBoundary, ErrorPage } from "./app/components/ErrorBoundary.tsx";
import "./styles/index.css";

function normalizeRedirectedRoute() {
  if (typeof window === "undefined") return;

  const { location, history } = window;

  if (!location.search.startsWith("?/") ) return;

  const decodedSearch = location.search.slice(1).replace(/~and~/g, "&");
  const [routePath, ...queryParts] = decodedSearch.split("&");
  const nextUrl = `${routePath}${queryParts.length > 0 ? `?${queryParts.join("&")}` : ""}${location.hash}`;

  history.replaceState(null, "", nextUrl);
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

normalizeRedirectedRoute();

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/home", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/basket", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/about", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/videos", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/search", element: <App />, errorElement: <RouteErrorBoundary /> },
  { path: "/shop", element: <App />, errorElement: <RouteErrorBoundary /> },
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