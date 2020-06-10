import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import * as firebase from 'firebase';
import User from './user'

class App extends Component {

    render(){
        return (
            <div className="App">
                <h1> This the beginning of GiveHelp, our digital Case Management App</h1>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        <h2>GiveCard Presents: GiveHelp</h2>
                    </p>
                    <p>
                        <h3>Add Org User: <User/></h3>
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
}

export default App;
