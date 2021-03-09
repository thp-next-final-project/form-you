import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import Reducer from './stores';
import Home from './pages/home';
import { NavBar } from './components/nav/index';
import { Paths } from './components/paths';
import './App.sass';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Provider store={Reducer}>
        <Router>
          <NavBar/>
          <Home/>
          <Paths/>
        </Router>
      </Provider>
      
    </div>
  );
}

export default App;
