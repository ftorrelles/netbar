import { StrictMode } from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
