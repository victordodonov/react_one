import React from 'react';
import test from './test.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={test} className="App-logo" alt="test" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
