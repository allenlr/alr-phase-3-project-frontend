import React, { useState } from 'react'

function EditUserForm({ user, handleUserChangeSubmit }){
    const [userForm, setUserForm] = useState({
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
    })

    function handleUserFormChanges(e){
        const keyName = e.target.name
        setUserForm({
            ...userForm,
            [keyName]: e.target.value
        })
    }

    function onSubmitUserChanges(e){
        e.preventDefault();
        handleUserChangeSubmit(userForm)
    }


    return (
        <div className="input-table">
            <h3>Enter User Changes</h3>
            <form onSubmit={onSubmitUserChanges}>
                <p className="input-row">
                    <label>First Name: </label>
                    <input
                        type='text'
                        value={userForm.first_name}
                        name='first_name'
                        onChange={handleUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Last Name: </label>
                    <input
                        type='text'
                        value={userForm.last_name}
                        name='last_name'
                        onChange={handleUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Username: </label>
                    <input
                        type='text'
                        value={userForm.username}
                        name='username'
                        onChange={handleUserFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Email: </label>
                    <input 
                        type='text'
                        value={userForm.email}
                        name='email'
                        onChange={handleUserFormChanges}
                        >
                    </input>
                </p>
                <p>
                    <button type='submit'>Submit Changes</button>
                </p>
            </form>
        </div>
    )
}

export default EditUserForm;