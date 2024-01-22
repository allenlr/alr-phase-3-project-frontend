import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function NavBar(){

    return (
        <AppBar position="static" color="customColor">
            <Toolbar>
                <Button color="white" style={{ marginRight: 'auto', fontWeight: 'bold', fontSize: '1rem'}} component={NavLink} to='/'>Home</Button>
                <Button color="white" component={NavLink} to="/users" style={{ fontWeight: 'bold' }}>
                    Users
                </Button>
            </Toolbar>
        </AppBar>
        // <nav
        //     style={{
        //         backgroundColor: '#D1D1D1',
        //         textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
        //         padding: '1rem',
        //         display: 'flex',
        //         flexDirection: 'row',
        //         alignItems: 'center',
        //         justifyContent: 'space-between',
        //         top:0,
        //         left:0,
        //         right:0,
        //         height: '20px',
        //     }}>
        //         <NavLink to='/' style={{ marginRight: 'auto' }}>
        //             Home
        //         </NavLink>
        //         <NavLink to='/users' style={{marginRight: 'right'}} >
        //             Users
        //         </ NavLink>
        // </nav>
    )
}

export default NavBar;