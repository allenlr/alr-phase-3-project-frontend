import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateExpenseFrom from './CreateExpenseForm'
import CreateUserForm from './CreateUserForm'
import NavBar from './NavBar'
import Header from './Header'
import LoginForm from './LoginForm'

function App() {
  const [users, setUsers] = useState([])
  const [expenses, setExpenses] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    fetch('http:/localhost:9292/expenses')
    .then((res) => res.json())
    .then((data) => setExpenses(data))
  }, [])

  useEffect(() => {
    fetch('http:/localhost:9292/users')
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
      .then((addedUser) => setUsers([...users, addedUser]))
  }

  console.log(users.length)

  return (
    <div className="App">
      <NavBar />
      <Header />
        <Switch>
          <Route path='/create-expense-form'>
            <CreateExpenseFrom expenses={expenses} />
          </Route>
          <Route path='/create-user-form'>
            <CreateUserForm users={users} />
          </Route>
          <Route path='/login-form'>
            <LoginForm setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
