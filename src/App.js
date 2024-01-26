import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Header from './Header'
import Users from './Users'
import User from './User'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      success: {
        main: '#4caf50',
      },
      info: {
        main: '#2196f3',
      },
      customColor: {
        main: '#abcdef',
      },
      white: {
        main: '#ffffff'
      }
    },
  });
  

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then((res) => res.json())
    .then((data) => {
      setUsers(data)
    })
  }, [])
  
  function onSubmitCreateExpenseForm(userId, newExpense) {
    fetch(`http://localhost:9292/users/${userId}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newExpense),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(body => {
            const error = body.error || "Unknown error occurred";
            throw new Error(error);
          })
        }
        return res.json();
      })
      .then((addedExpense) => {
        console.log(addedExpense)
        const updatedUsers = users.map((user) => {
          if (user.id === userId){
            return {
              ...user,
              expenses: [...(user.expenses || []), addedExpense]
            }
          }
          return user
        })
        setUsers(updatedUsers)
      })
      .catch(error => {
        setError(error.message)
        console.log(error)
      })
  }

  function onSubmitCreateUserForm(newUser){
    fetch(`http://localhost:9292/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((addedUser) => {
        setUsers([...users, addedUser])
      })
  }


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Header />
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users users={users} submitUserForm={onSubmitCreateUserForm} />} />
            <Route path='/users/:id/*' element={<User submitExpenseForm={onSubmitCreateExpenseForm} users={users} setUsers={setUsers} />} />
          </Routes>

          <Dialog
          open={Boolean(error)}
          onClose={() => setError(null)}
          aria-labelledby="error-dialog-title"
          aria-describedby="error-dialog-description"
        >
          <DialogTitle id="error-dialog-title">Error</DialogTitle>
          <DialogContent>
            <DialogContentText id="error-dialog-description">
              {error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setError(null)}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default App;
