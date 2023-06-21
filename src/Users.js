import React, { useEffect, useState } from 'react'
import UserLink from './UserLink'

const Users = ({ users }) => {
    // const [users, setUsers] = useState([])
    const [userFormFlag, setUserFormFlag] = useState(false)

    const usersList = users.map((user) => {
        return <UserLink key={user.id} user={user} />
    })

    return (
        <div style={{marginRight: '5rem'}}>
            <ul>{usersList}</ul>
        </div>
    )
}

export default Users;