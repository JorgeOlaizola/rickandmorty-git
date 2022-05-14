import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Locations from './components/locations/Locations';

function App() {
  return (
    <div>
      Rick and morty
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/characters' element={<div>Characters</div>}/>
        <Route path='/episodes' element={<div>Episodes</div>}/>
        <Route path='/locations' element={<Locations />}/>
        <Route path='/contact' element={<div>Contact</div>}/>
      </Routes>
    </div>
  );
}

export default App;
