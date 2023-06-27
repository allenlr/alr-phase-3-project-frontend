import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'

function CreateUserForm({ submitUserForm }){
    // const navigate = useNavigate();
    const initialFormState = {
        username: '',
        email: '',
        first_name: '',
        last_name: ''
    }
    const [newUserData, setNewUserData] = useState(initialFormState)
    
    function handleNewUserFormChanges(e){
        const keyName = e.target.name
        setNewUserData({
            ...newUserData,
            [keyName]: e.target.value
        })
    }

    function onNewUserFormSubmit(e){
        e.preventDefault();
        submitUserForm(newUserData)
        setNewUserData(initialFormState)
    }

    return (
        <div className="input-table">
            <h3>Enter New User Information</h3>
            <form onSubmit={ onNewUserFormSubmit }>
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
                    <label>Email: </label>
                    <input 
                        type='text'
                        value={newUserData.email}
                        name='email'
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