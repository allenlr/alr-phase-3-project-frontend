import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar(){

    const navigate = useNavigate();

    return (
        <nav
            style={{
                backgroundColor: '#D1D1D1',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                top:0,
                left:0,
                right:0,
                height: '20px',
            }}>
                <NavLink exact to='/' style={{ marginRight: 'auto' }}>
                    Home
                </NavLink>
                <NavLink exact to='/users' style={{marginRight: 'auto'}} >
                    Users
                </ NavLink>
                <div>
                    
                    {/* <NavLink to='/manage-account' style={{marginRight: '1rem'}}>
                        Manage Account
                    </NavLink> */}
                </div>
                    <NavLink to='/create-user-form' style={{ position: 'right'}}>Create User</NavLink>
                
        </nav>
    )
}

export default NavBar;