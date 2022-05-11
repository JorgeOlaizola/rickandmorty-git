import React from 'react'
import { API_ENDPOINTS } from './utils/constants';

function App() {
  React.useEffect(() => {
    fetch(API_ENDPOINTS.episodes).then(r => r.json()).then(r => console.log(r))
  }, [])
  return (
    <div>
      Rick and morty
    </div>
  );
}

export default App;
