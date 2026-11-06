/// <reference types="vite/client" />
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // or "./App" if you rename the file
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const query = new URLSearchParams(window.location.search);
const tag = query.get("visit");
const source = query.get("utm_source") === "linkedin" && query.get("utm_medium") === "profile"
  ? "linkedin"
  : null;

if (import.meta.env.PROD && window.location.pathname === "/" && navigator.doNotTrack !== "1"
  && !Reflect.get(navigator, "globalPrivacyControl")
  && ((tag && /^[a-zA-Z0-9_-]{16,64}$/.test(tag)) || (!tag && source))) {
  const reportVisit = () => {
    if (document.visibilityState !== "visible") return;
    document.removeEventListener("visibilitychange", reportVisit);
    void fetch("/api/portfolio-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tag, source }),
      credentials: "omit",
      referrerPolicy: "no-referrer",
      keepalive: true,
    }).catch(() => {});
  };

  if (document.visibilityState === "visible") reportVisit();
  else document.addEventListener("visibilitychange", reportVisit);
}
