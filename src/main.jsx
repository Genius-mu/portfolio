import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./componnts/Header.jsx";
import Footer from "./componnts/Footer.jsx";
import Section4 from "./componnts/home/Section4.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Section4 />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
