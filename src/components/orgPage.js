import React from 'react';
import logo from './logo.png';
import './App.css';


const orgPage = () =>{
    return(
        <div className={"App"}>
            <img src={logo} alt="logo"/>
            <header className={"App-header"}>
            <h1>
                Organization Page
            </h1>
            </header>
        </div>
    );
};

export default orgPage;
