import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Navbar } from './components/NavBar/Navbar';
import './styles/global.css'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={<div>Home</div>}/> */}
        <Route path='/characters' element={<div>Characters</div>}/>
        <Route path='/episodes' element={<div>Episodes</div>}/>
        <Route path='/locations' element={<div>Locations</div>}/>
        <Route path='/contact' element={<div>Contact</div>}/>
      </Routes>
    </div>
  );
}

export default App;
