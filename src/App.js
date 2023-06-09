import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import CreateExpenseFrom from './CreateExpenseForm'
import CreateUserForm from './CreateUserForm'
import NavBar from './NavBar'
import Header from './Header'
import LoginForm from './LoginForm'

function App() {
  const [users, setUsers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

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
      .then((addedUser) => console.log(addedUser))
  }

  function onDeleteUser(deletedUserId){
    fetch(`http://localhost:9292/users/${deletedUserId}`, {
      method: 'DELETE'
    })
  }


  return (
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Header />
        <Switch>
          <Route exact path='/'>
            <Home currentUser={currentUser}/>
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
        </Switch>
    </div>
  );
}

export default App;
