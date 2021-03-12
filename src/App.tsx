import React from 'react';
import Homepage from './components/Homepage/index';
import { Provider } from 'react-redux';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import Reducer from './stores';
import { NavBar } from './components/nav/index';
import Login from './pages/Login';
import Register from './pages/Register';
import MySession from './pages/MySessions';
import { Profile } from './pages/Profile/index';


const App = (): JSX.Element => {
  return (
         
    <div className="App">
      <Provider store={Reducer}>
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact>
              <Homepage/>
            </Route>
            <Route path="/sessions/:id">
              {/*
                  pour chopper le slug, il faut passer un enfant a la route et
                  ENSUITE utiliser le hook getParams dans l'enfant.
                  (de preference dans un useEffect)
              */}
            </Route>
            <Route path="/sessions">
                <MySession />
            </Route>
            <Route path="/profile" exact>
              <Profile></Profile>
            </Route>
            <Route path="/login" exact>
              < Login />
            </Route>
            <Route path="/signup" exact>
              < Register />
            </Route>
          </Switch>
        </Router>
      </Provider> 
      </div>
    
  );
};

export default App;
