import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/Molecules/Nav/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
