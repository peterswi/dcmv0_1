import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
//building this constructor and component did mount to grow within the app. Still missing something

    constructor() {
        super();
        this.state= {
            speed: 'hello'
        };
    }

    componentDidMount(){
       const rootRef = firebase.database().ref();
       const speedRef = rootRef.child('orgID');
       speedRef.on('value',snap=>{
            this.setState({
                speed: snap.val()
        });
       });
    }

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
                        <h2>React+firebase test: {this.state.speed}  </h2>
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
