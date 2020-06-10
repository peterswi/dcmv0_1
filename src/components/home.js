import React from 'react';
import logo from './logo.png';
import './App.css';
import {Link} from "react-router-dom";

const home = () => {
    return (
         <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1> GiveCard Presents: GiveHelp</h1>
                    <h2> A tool for Case Management</h2>
                    <p>
                    </p>
                </header>
                <body>
                    <p>
                        <h2><b> Click a link to visit our different pages</b></h2>
                    </p>
                    Visit an <Link to="/orgPage">Organization Page</Link><br></br>
                    Add a <Link to="/registerUser">New User</Link>

                </body>
             <br></br><br></br>
                <footer className="App-footer">
                    <a
                        className="App-link"
                        href="https://www.givecard.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit GiveCard
                    </a>
                    <b> OR </b>
                        <Link to="/contact">Contact Us</Link>
                    <br></br>
                </footer>

    </div>
    );
};
export default home;