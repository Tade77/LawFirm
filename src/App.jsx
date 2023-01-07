import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Contact from "./components/Molecules/Contact";
import NavBar from "./components/Molecules/Nav/NavBar";
import About from "./components/Organisms/About";
import OfferPage from "./components/Organisms/OfferPage";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/what-we-offer" element={<OfferPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
