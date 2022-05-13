import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <div>
      Rick and morty
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<div>Characters</div>} />
        <Route path="/episodes" element={<div>Episodes</div>} />
        <Route path="/locations" element={<div>Locations</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </div>
  );
}

export default App;
