import React from 'react'
import { Link } from 'react-router-dom'

function UserLink({ user }){
    return (
        <div>
            <Link to={`/users/${user.id}`}>
                <h3>{user.first_name}</h3>
            </Link>
        </div>
    )
}
export default UserLink;