import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router/Router";
import "./App.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
