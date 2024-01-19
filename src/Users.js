import React, { useState } from 'react'
import UserLink from './UserLink'
import CreateUserForm from './CreateUserForm'
import Button from '@mui/material/Button';

const Users = ({ users, submitUserForm }) => {
    const [userFormFlag, setUserFormFlag] = useState(false)
    console.log(users)
    const usersList = users.map((user) => {
        return <UserLink key={user.id} user={user} />
    })

    return (
        <div style={{marginRight: '5rem'}}>
            <Button color="primary" variant="contained" onClick={() => setUserFormFlag(!userFormFlag)}>Create New User</Button>
            {userFormFlag ? <CreateUserForm submitUserForm={submitUserForm} /> : null}
            <ul style={{marginRight: '2rem'}}>{usersList}</ul>
        </div>
    )
}

export default Users;