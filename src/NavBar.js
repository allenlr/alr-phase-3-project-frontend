import React from 'react';
// eslint-disable-next-line
import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/create-user-form'>Create Account</NavLink>
        </nav>
    )
}

export default NavBar;