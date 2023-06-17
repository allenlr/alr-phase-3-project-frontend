import React, { useEffect, useState } from 'react'
import UserLink from './UserLink'

const Users = () => {
    const [users, setUsers] = useState([])
    const [userFormFlag, setUserFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setUsers(data)
        })
    }, [])

    const usersList = users.map((user) => {
        return <UserLink key={user.id} user={user} />
    })
    console.log(usersList)

    return (
        <div>
            {usersList}
        </div>
    )
}

export default Users;