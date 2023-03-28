import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FontStyles from "./globalStyles/Fonts.styled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);
