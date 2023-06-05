import React, {useState} from 'react';

function CreateUserForm(){
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

    return (
        <div className="input-table">
            <p className="input-row">
                <lable className="input-cell">First Name: </lable>
                <input
                    className="input-cell" 
                    type='text'
                    value={newUserData.first_name}
                    name='first_name'
                    onChange={handleNewUserFormChanges}
                    >
                </input>
            </p>
            <p className="input-row">
                <lable className="input-cell">Last Name: </lable>
                <input
                    className="input-cell" 
                    type='text'
                    value={newUserData.last_name}
                    name='last_name'
                    onChange={handleNewUserFormChanges}
                    >
                </input>
            </p>
            <p className="input-row">
                <lable className="input-cell">Username: </lable>
                <input
                    className="input-cell" 
                    type='text'
                    value={newUserData.username}
                    name='username'
                    onChange={handleNewUserFormChanges}
                    >
                </input>
            </p>
            <p className="input-row">
                <lable className="input-cell">Password: </lable>
                <input
                    className="input-cell" 
                    type='text'
                    value={newUserData.password}
                    name='password'
                    onChange={handleNewUserFormChanges}
                    >
                </input>
            </p>
            <p className="input-row">
                <lable className="input-cell">Email: </lable>
                <input
                    className="input-cell" 
                    type='text'
                    value={newUserData.email}
                    name='email'
                    onChange={handleNewUserFormChanges}
                    >
                </input>
            </p>
            <p className="input-row">
                <lable className="input-cell">Set Monthly Budget: </lable>
                <input
                    className="input-cell:last-child" 
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
        </div>
    )
}

export default CreateUserForm;