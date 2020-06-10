import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
          <NavLink to="/registerUser">Register New User</NavLink>
       </div>
    );
};

export default Navigation;