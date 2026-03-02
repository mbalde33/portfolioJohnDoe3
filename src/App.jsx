import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./composants/Navbar";
import Footer from "./composants/Footer";
import Home from "./pages/Home";
import About from "./composants/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import MentionsLegales from "./pages/MentionsLegales";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />{" "}
        {/* ← AJOUTE CETTE LIGNE */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<MentionsLegales />} />
      </Routes>

      <Footer />
    </Router>
  );
}
