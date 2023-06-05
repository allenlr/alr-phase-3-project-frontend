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
            <h3>Enter New User Information</h3>
            <form>
                <p className="input-row">
                    <lable>First Name: </lable>
                    <input
                        type='text'
                        value={newUserData.first_name}
                        name='first_name'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <lable>Last Name: </lable>
                    <input
                        type='text'
                        value={newUserData.last_name}
                        name='last_name'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <lable>Username: </lable>
                    <input
                        type='text'
                        value={newUserData.username}
                        name='username'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <lable>Password: </lable>
                    <input
                        type='text'
                        value={newUserData.password}
                        name='password'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <lable>Email: </lable>
                    <input 
                        type='text'
                        value={newUserData.email}
                        name='email'
                        onChange={handleNewUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <lable>Set Monthly Budget: </lable>
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