import React from 'react';
import logo from './logo.png';
import './App.css';
import OrgUser from './orgUser';



const orgPage = () =>{
    return(
        <div className="App">
            <img src={logo} alt="logo"/>
            <header className="App-header">
            <h1>
                Organization Page
            </h1>
            </header>

            <body className="App-page">
            <h3>
                Add a New User to your organization: < OrgUser/>
            </h3>
            </body>
            <footer className="App-footer">
                where is my form
            </footer>
        </div>
    );
};

export default orgPage;
