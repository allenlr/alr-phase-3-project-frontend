import './App.css';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import CreateExpenseFrom from './CreateExpenseForm'
import CreateUserForm from './CreateUserForm'
import NavBar from './NavBar'
import Header from './Header'
import LoginForm from './LoginForm'
import ManageAccount from './ManageAccount';
import Expenses from './Expenses';

function App() {
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if(storedUser){
      setCurrentUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/expenses')
    .then((res) => res.json())
    .then((data) => setExpenses(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, [])

  
  
  function onSubmitCreateUserForm(newUser){
    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then((res) => res.json())
      .then((addedUser) => {
        setUsers([...users, addedUser])
        history.push('/')
      })
  }

  function onDeleteUser(deletedUserId){
    fetch(`http://localhost:9292/users/${deletedUserId}`, {
      method: 'DELETE'
    })
    .then((res) => {
      if(!res.ok){
        throw new Error('Error deleting user')
      }
      return fetch('http://localhost:9292/users')
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        history.push('/')
        setCurrentUser(null)
      })
  }

  console.log(currentUser)

  return (
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home currentUser={currentUser}/>
          </Route>
          <Route path='/expenses'>
            <Expenses />
          </Route>
          <Route path='/create-expense-form'>
            <CreateExpenseFrom expenses={expenses} />
          </Route>
          <Route path='/create-user-form'>
            <CreateUserForm users={users} onSubmitCreateUser={onSubmitCreateUserForm} />
          </Route>
          <Route path='/login-form'>
            <LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
          <Route path='/manage-account'>
            <ManageAccount currentUser={currentUser} setCurrentUser={setCurrentUser} onDeleteUser={onDeleteUser} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
