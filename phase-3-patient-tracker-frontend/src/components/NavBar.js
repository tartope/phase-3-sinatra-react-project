import React from 'react';
import { NavLink } from 'react-router-dom';

function  NavBar() {
    return(
        <div className="nav">
            <NavLink exact to="/home">Home</NavLink>
            <NavLink exact to="/tracker">Tracker</NavLink>
            <NavLink exact to="/about">About</NavLink>
        </div>
    )
}

export default NavBar;