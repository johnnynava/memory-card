import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <div className="footer">
      <a
        href="https://github.com/johnnynava"
        target="_blank"
        rel="noreferrer noopener"
      >
        Made by Johnny Nava
      </a>
    </div>
  </React.StrictMode>,
);
