import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Episodes from './components/Episodes/Episodes';

function App() {
  return (
    <div>
      Rick and morty
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/characters' element={<div>Characters</div>}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/locations' element={<div>Locations</div>}/>
        <Route path='/contact' element={<div>Contact</div>}/>
      </Routes>
    </div>
  );
}

export default App;
