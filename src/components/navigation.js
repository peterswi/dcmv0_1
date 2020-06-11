import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="App-navbar">
           <NavLink to="/">HomePage</NavLink> &nbsp; &nbsp; &nbsp;
           <NavLink to="/registerUser">Register New User</NavLink>&nbsp; &nbsp; &nbsp;
           <NavLink to="/orgPage">Oranization Page</NavLink>&nbsp; &nbsp; &nbsp;
           <NavLink to="/contact">Contact GiveCard</NavLink><br></br>

       </div>
    );
};

export default Navigation;