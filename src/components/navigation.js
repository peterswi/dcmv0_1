import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="App-navbar">
           <NavLink to="/">HomePage</NavLink> <br></br>
           <NavLink to="/registerUser">Register New User</NavLink><br></br>
           <NavLink to="/orgPage">Oranization Page</NavLink><br></br>
           <NavLink to="/contact">Contact GiveCard</NavLink><br></br>

       </div>
    );
};

export default Navigation;