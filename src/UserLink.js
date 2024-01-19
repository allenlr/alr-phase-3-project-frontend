import React from 'react'
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function UserLink({ user }){
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to={`/users/${user.id}`}>
                        <ListItemText primary={`${user.first_name} ${user.last_name}`} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}
export default UserLink;