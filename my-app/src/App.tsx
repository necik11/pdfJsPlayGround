import React from 'react';
import logo from './logo.svg';
import './App.css';

// import './dev.js';
import './prod.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <canvas id="the-canvas"></canvas>
      </header>
    </div>
  );
}

export default App;
