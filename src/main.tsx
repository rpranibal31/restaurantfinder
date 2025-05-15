import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "@/style/index.css";

import {
  ToastProvider,
  ToastViewport,
} from "@/shared/ui/toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
      <ToastViewport />
    </ToastProvider>
  </React.StrictMode>
);
