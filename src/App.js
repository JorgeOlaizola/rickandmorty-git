import React from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div>
      Rick and morty
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<div>Episodes</div>} />
        <Route path="/locations" element={<div>Locations</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </div>
  );
}

export default App;
