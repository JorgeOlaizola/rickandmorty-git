import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import { Navbar } from './components/NavBar/Navbar';
import './styles/global.css';
import Characters from './components/Characters/Characters';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Episodes from './components/Episodes/Episodes';
import ContactForm from './components/ContactForm/ContactForm';
import Locations from './components/locations/locations';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/characters/:id' element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
