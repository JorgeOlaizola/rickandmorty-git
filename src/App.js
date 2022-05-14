import React from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "./components/Characters/Characters";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import Episodes from './components/Episodes/Episodes';
import ContactForm from "./components/ContactForm/ContactForm";
import Locations from './components/locations/Locations';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/characters" element={<Characters />} />
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/locations' element={<Locations />}/>
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
