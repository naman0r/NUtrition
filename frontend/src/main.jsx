import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FeedbackPage from "./FeedbackPage.jsx";
import Form2 from "./Form2.jsx";
import LogMeal from "./LogMeal.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/feedback", element: <FeedbackPage /> },
  { path: "/logmeal", element: <LogMeal /> },
  { path: "/form2", element: <Form2 /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
