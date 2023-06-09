import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

function CreateUserForm({ onSubmitCreateUser }){
    const history = useHistory();
    const [newUserData, setNewUserData] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        monthly_budget: 0.00
    })
    
    function handleNewUserFormChanges(e){
        const keyName = e.target.name
        setNewUserData({
            ...newUserData,
            [keyName]: e.target.value
        })
    }

    function onNewUserFormSubmit(e){
        e.preventDefault();
        onSubmitCreateUser(newUserData)
    }

    return (
        <div className="input-table">
            <h3>Enter New User Information</h3>
            <form onSubmit={onNewUserFormSubmit}>
                <p className="input-row">
                    <label>First Name: </label>
                    <input
                        type='text'
                        value={newUserData.first_name}
                        name='first_name'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Last Name: </label>
                    <input
                        type='text'
                        value={newUserData.last_name}
                        name='last_name'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Username: </label>
                    <input
                        type='text'
                        value={newUserData.username}
                        name='username'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Password: </label>
                    <input
                        type='password'
                        value={newUserData.password}
                        name='password'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Email: </label>
                    <input 
                        type='text'
                        value={newUserData.email}
                        name='email'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Set Monthly Budget: </label>
                    <input
                        type='number'
                        step='0.01'
                        min='0'
                        value={newUserData.monthly_budget}
                        name='monthly_budget'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p>
                    <button type='submit'>Create User</button>
                </p>
            </form>
        </div>
    )
}

export default CreateUserForm;