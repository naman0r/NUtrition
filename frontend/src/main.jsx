import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FeedbackPage from "./FeedbackPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FeedbackPage />
  </StrictMode>
);
