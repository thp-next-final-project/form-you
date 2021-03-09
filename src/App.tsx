import { url } from 'inspector';
import React from 'react';
import { useFetch } from './hooks/useFetch';
import './App.sass';

const App = (): JSX.Element => {
  const { isLoading , data} = useFetch(url);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn SALUT C MOI
        </a>
      </header>
    </div>
  );
}

export default App;
