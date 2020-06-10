import React from 'react';
import logo from './logo.png';
import './App.css';

const home = () => {
    return (
         <div className="App">
                <h1> GiveHelp</h1>
                <h2> A tool for Case Management</h2>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        <h2>GiveCard Presents: GiveHelp</h2>
                    </p>
                    <p>
                    <a
                        className="App-link"
                        href="https://www.givecard.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit GiveCard
                    </a>
                    </p>
            </header>
    </div>
    );
};
export default home;