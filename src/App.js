import react from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import Homepage from './pages/homepages/homepage.components';
  const HatsPage = () =>(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )

function App() {
  return (
    <div>
      <Homepage />
    </div>
  )
}

export default App;
