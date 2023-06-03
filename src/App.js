import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import CreateExpenseFrom from './CreateExpenseForm'
import CreateUserForm from './CreateUserForm'
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([])
  const [expenses, setExpenses] = useState([])

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

  return (
    <div className="App">
      <Switch>
        <Route path='/create_expense_form'>
          <CreateExpenseFrom expenses={expenses} />
        </Route>
        <Route path='/create_user_form'>
          <CreateUserForm users={users} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
