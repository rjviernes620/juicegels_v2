import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
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
  { path: "/", element: <App /> },
  { path: "/home", element: <App /> },
  { path: "/basket", element: <App /> },
  { path: "/about", element: <App /> },
  { path: "/videos", element: <App /> },
  { path: "/search", element: <App /> },
  { path: "/shop", element: <App /> },
  { path: "/faq", element: <App /> },
  { path: "/product/:id", element: <App /> },
  { path: "/checkout-success", element: <App /> },
  { path: "/confirmation", element: <App /> },
  { path: "*", element: <App /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);