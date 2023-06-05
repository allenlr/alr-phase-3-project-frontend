import React, {useState} from 'react'

function LoginForm({ onSubmitLoginForm, setCurrentUser }){

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
    })

    function handleFormChanges(e) {
        const keyName = e.target.name
        setUserData({
            ...userData,
            [keyName]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitLoginForm(userData)
    }

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
            </form>

        </div>
    )
}

export default LoginForm;