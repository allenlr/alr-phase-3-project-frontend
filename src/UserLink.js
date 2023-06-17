import React from 'react'
import { Link } from 'react-router-dom'

function UserLink({ user }){
    console.log(user)
    return (
        <div>
            <Link to={`http://localhost:3000/users/${user.id}`}>
                <h3>{user.first_name}</h3>
            </Link>
        </div>
    )
}
export default UserLink;