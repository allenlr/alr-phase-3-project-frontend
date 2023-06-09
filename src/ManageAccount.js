import React, { useState } from "react";

function ManageAccount({ currentUser, setCurrentUser, onDeleteUser }){
    const [isEditing, setIsEditing] = useState({
        username: false,
        password: false,
        email: false,
        first_name: false,
        last_name: false,
        monthly_budget: false
    })
    const [userData, setUserData] = useState({
        username: currentUser.username,
        password: currentUser.password,
        email: currentUser.email,
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        monthly_budget: currentUser.monthly_budget
    })

    function handleEditClick(field) {
        setIsEditing({
            ...isEditing,
            [field]: true
        })
    }
    
    function handleUserFormChanges(e){
        const keyName = e.target.name
        setUserData({
            ...userData,
            [keyName]: e.target.value
        })
    }

    function handleUserChangesFormSubmit(e){
        e.preventDefault()
        const user_id = currentUser.id
        setIsEditing({
            username: false,
            password: false,
            email: false,
            first_name: false,
            last_name: false,
            monthly_budget: false
        })
        fetch(`http://localhost:9292/${user_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((res) => res.json())
            .then((changedUser) => setCurrentUser(changedUser))
    }

    return(
        <div className="input-table">
            <form onSubmit={handleUserChangesFormSubmit}>
                <p className="input-row">
                    <label>First Name: </label>
                    {isEditing.first_name ? (
                        <input
                            type='text'
                            value={userData.first_name}
                            name='first_name'
                            onChange={handleUserFormChanges}
                        >
                        </input>
                    ) : (
                        <span>{userData.first_name}</span>
                    )}
                    <button onClick={(e) => isEditing.first_name? handleUserChangesFormSubmit(e) : handleEditClick('first_name')}>
                        {isEditing.first_name ? 'save' : 'edit'}
                    </button>
                </p>
                <p className="input-row">
                    <label>Last Name: </label>
                    {isEditing.last_name ? (
                        <input
                            type='text'
                            value={userData.last_name}
                            name='last_name'
                            onChange={handleUserFormChanges}
                        >
                        </input>
                    ) : (
                        <span>{userData.last_name}</span>
                    )}
                    <button onClick={(e) => isEditing.last_name? handleUserChangesFormSubmit(e) : handleEditClick('last_name')}>
                        {isEditing.last_name ? 'save' : 'edit'}
                    </button>
                    
                </p>
                <p className="input-row">
                    <label>Username: </label>
                    {isEditing.username ? (
                    <input
                        type='text'
                        value={userData.username}
                        name='username'
                        onChange={handleUserFormChanges}
                    >
                    </input>
                    ) : (
                        <span>{userData.username}</span>
                    )}
                    <button onClick={(e) => isEditing.username? handleUserChangesFormSubmit(e) : handleEditClick('username')}>
                        {isEditing.username ? 'save' : 'edit'}
                    </button>
                </p>
                <p className="input-row">
                    <label>Password: </label>
                    {isEditing.password ? (
                        <input
                            type='password'
                            value={userData.password}
                            name='password'
                            onChange={handleUserFormChanges}
                            >
                        </input>
                    ) : (
                        <span>{userData.password}</span>
                    )}
                    <button onClick={(e) => isEditing.password? handleUserChangesFormSubmit(e) : handleEditClick('password')}>
                        {isEditing.password ? 'save' : 'edit'}
                    </button>
                </p>
                <p className="input-row">
                    <label>Email: </label>
                    {isEditing.email ? (
                        <input 
                            type='text'
                            value={userData.email}
                            name='email'
                            onChange={handleUserFormChanges}
                            >
                        </input>
                    ) : (
                        <span>{userData.email}</span>
                    )}
                    <button onClick={(e) => isEditing.email? handleUserChangesFormSubmit(e) : handleEditClick('email')}>
                        {isEditing.email ? 'save' : 'edit'}
                    </button>
                    
                </p>
                <p className="input-row">
                    <label>Set Monthly Budget: </label>
                    {isEditing.monthly_budget ? (
                        <input
                            type='number'
                            step='0.01'
                            min='0'
                            value={userData.monthly_budget}
                            name='monthly_budget'
                            onChange={handleUserFormChanges}
                            >
                        </input>
                    ) : (
                        <span>{userData.monthly_budget}</span>
                    )}
                    <button onClick={(e) => isEditing.monthly_budget ? handleUserChangesFormSubmit(e) : handleEditClick('monthly_budget')}>
                        {isEditing.monthly_budget ? 'save' : 'edit'}
                    </button>
                </p>
                <p>
                    <button type='submit'>Change Details</button>
                </p>
            </form>
            <button onClick={() => onDeleteUser(currentUser.id)} style={{width: '6rem', marginLeft:'15rem'}} type='click'>Delete Account</button>
        </div>
    )
}

export default ManageAccount;