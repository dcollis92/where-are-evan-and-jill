import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
window.addEventListener("DOMContentLoaded", () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});


