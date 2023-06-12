import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';

function LoginForm({ currentUser, setCurrentUser }){
    const history = useHistory();
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        monthly_budget: 0
    })

    function handleFormChanges(e) {
        const keyName = e.target.name
        setUserData({
            ...userData,
            [keyName]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, password} = userData
        try {
            const response = await fetch(`http://localhost:9292/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            });
            if(!response.ok) {
                throw new Error('Invalid username or password');
            }
            const user = await response.json();
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            history.push('/')
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        if(currentUser) {
            history.push('/')
        }
    }, [currentUser, history]);

    return (
        <div style={{
            color: "black",
            position: "right",
            top: "20%"
        }}>
            <h3>Enter your login information</h3>
            <form onSubmit={handleSubmit}>
                <p> 
                    <label>Username: </label>
                    <input
                        type='text'
                        value={userData.username}
                        name='username'
                        onChange={handleFormChanges}
                    >
                    </input>
                </p>
                <p>
                    <label>Password: </label>
                    <input
                        type='text'
                        value={userData.password}
                        name='password'
                        onChange={handleFormChanges}
                        >

                        </input>
                </p>
                <p>
                    <button type='submit'>Login</button>
                </p>
                {error ? <span style={{color: 'red'}}>{error}</span> : null}
            </form>
        </div>
    )
}

export default LoginForm;