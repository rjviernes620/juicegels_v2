import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/home", element: <App /> },
  { path: "/basket", element: <App /> },
  { path: "/product/:id", element: <App /> },
  { path: "/checkout/success", element: <App /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);