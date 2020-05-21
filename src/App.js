import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      This is the beginning of GiveHelp, our digital Case Management App
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GiveCard Presents: GiveHelp
        </p>
        <a
          className="App-link"
          href="https://www.givecard.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GiveCard
        </a>
      </header>
    </div>
  );
}

export default App;
