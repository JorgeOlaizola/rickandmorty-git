
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import { Navbar } from './components/NavBar/Navbar';
import './styles/global.css'

function App() {
  return (
    <div>
      <Navbar></Navbar>
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
