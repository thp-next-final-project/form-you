import React from 'react';
import { Provider } from 'react-redux';
import Reducer from './stores';
import './App.sass';
import Home from './pages/home';

const App = (): JSX.Element => {
  return (
    <Provider store={Reducer}>
      <Home></Home>
    </Provider>
  );
}

export default App;
