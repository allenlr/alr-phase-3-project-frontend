import React from 'react';
// eslint-disable-next-line
import { NavLink } from 'react-router-dom'

function NavBar(){
    return (
        <nav
            style={{
                backgroundColor: '#D1D1D1',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                top:0,
                left:0,
                right:0,
                height: '20px',
            }}>
                <NavLink exact to='/' style={{ marginRight: 'auto'}}>Home</NavLink>
                <NavLink to='/login-form' style={{ marginRight:'1rem'}}>Login</NavLink>
                <NavLink to='/create-user-form' style={{ position: 'right'}}>Create Account</NavLink>
                
        </nav>
    )
}

export default NavBar;