import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditUserForm({ user, handleUserChangeSubmit }){
    const [userForm, setUserForm] = useState({
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
    })

    useEffect(() => {
        setUserForm({
            username: user.username,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name
        })
    }, [user])

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
                <TextField
                    label="First Name"
                    type="text"
                    value={userForm.first_name}
                    name="first_name"
                    onChange={handleUserFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Last Name"
                    type="text"
                    value={userForm.last_name}
                    name="last_name"
                    onChange={handleUserFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Username"
                    type="text"
                    value={userForm.username}
                    name="username"
                    onChange={handleUserFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    type="text"
                    value={userForm.email}
                    name="email"
                    onChange={handleUserFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" type='submit'>Submit Changes</Button>
            </form>
        </div>
    )
}

export default EditUserForm;