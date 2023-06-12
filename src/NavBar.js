import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'

function NavBar({ currentUser, setCurrentUser }){

    const history = useHistory();
    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser')
        history.push('/login-form');
    }

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
                {currentUser? 
                <div>
                    <NavLink to='/user-expenses' style={{ marginRight:'90rem', marginLeft: '1rem'} }>
                        Expenses
                    </NavLink>
                    <NavLink onClick={handleLogout} exact to='/' style={{marginRight:'1rem'}}>
                        Log Out
                    </NavLink>
                    <NavLink to='/manage-account' style={{marginRight: '1rem'}}>
                        Manage Account
                    </NavLink>
                </div>
                    :
                    <NavLink to='/login-form' style={{marginRight:'1rem'}}>
                        Log In
                    </NavLink>}
                {/* <NavLink to={!currentUser ? '/login-form' : '/'} style={{ marginRight:'1rem'}}>{!currentUser ? "Login" : "Log Out"}</NavLink> */}
                <NavLink to='/create-user-form' style={{ position: 'right'}}>Create Account</NavLink>
                
        </nav>
    )
}

export default NavBar;