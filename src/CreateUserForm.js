import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function CreateUserForm({ submitUserForm }){
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
                <TextField
                    label="First Name"
                    type="text"
                    value={newUserData.first_name}
                    name="first_name"
                    onChange={handleNewUserFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Last Name"
                    type="text"
                    value={newUserData.last_name}
                    name="last_name"
                    onChange={handleNewUserFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Username"
                    type="text"
                    value={newUserData.username}
                    name="username"
                    onChange={handleNewUserFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    type="text"
                    value={newUserData.email}
                    name="email"
                    onChange={handleNewUserFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button color="primary" variant="contained" type='submit'>Create User</Button>
            </form>
        </div>
    )
}

export default CreateUserForm;