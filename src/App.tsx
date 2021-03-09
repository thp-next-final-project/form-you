import React from 'react';
import {NavBar} from './components/nav/index'
import {Paths} from './components/paths'
import {
  BrowserRouter as Router
} from "react-router-dom";
import './components/components.scss';

function App() {
  return (
    
    <div className="App">
      <Router>
        <NavBar/>
        <Paths/>
      </Router>
    </div>
  );
}

export default App;
