import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import Services from "./components/services/services.jsx";
import About from "./components/about/about.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Footer from "./components/footer/footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "30px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

      </main>

        <Footer />
    </>
  );
}
