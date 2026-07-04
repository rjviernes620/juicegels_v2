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