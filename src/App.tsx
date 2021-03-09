import { url } from 'inspector';
import React from 'react';
<<<<<<< HEAD
import {NavBar} from './components/nav/index'
import {Paths} from './components/paths'
import {
  BrowserRouter as Router
} from "react-router-dom";
import './components/components.scss';
=======
import { useFetch } from './hooks/useFetch';
import './App.sass';
>>>>>>> development

const App = (): JSX.Element => {
  const { isLoading , data} = useFetch(url);
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
