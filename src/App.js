import './App.css';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
// import { Route, Switch } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const expenseCategories = [
    "All",
    "Rent/Mortgage",
    "Utilities",
    "Groceries",
    "Eating Out",
    "Transportation",
    "Healthcare",
    "Entertainment",
    "Personal Care",
    "Education",
    "Clothing",
    "Savings",
    "Investments",
    "Debt Repayment",
    "Miscellaneous"
  ]
  const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "Gift Card",
    "Cash"
  ]

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if(storedUser){
      setCurrentUser(JSON.parse(storedUser))
    }
    setLoading(false)
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

  
  function onSubmitCreateExpenseForm(newExpense) {
    const expenseWithUser = {
      ...newExpense,
      user_id: currentUser.id
    }
    console.log(expenseWithUser)
    fetch('http://localhost:9292/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(expenseWithUser),
    })
      .then((res) => res.json())
      .then((addedExpense) => {
        setExpenses([...expenses, addedExpense])
        // navigate('/user-expenses')
      })
  }

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
        navigate('/')
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
        navigate('/')
        setCurrentUser(null)
      })
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home currentUser={currentUser}/>} />
          <Route path='/user-expenses' element={<Expenses currentUser={currentUser} expenseCategories={expenseCategories}/>} />
          <Route path='/create-expense-form' element={<CreateExpenseFrom 
              expenseCategories={expenseCategories} 
              paymentMethods={paymentMethods} 
              onSubmitCreateExpense={onSubmitCreateExpenseForm} 
            />} />
          <Route path='/create-user-form' element={<CreateUserForm users={users} onSubmitCreateUser={onSubmitCreateUserForm} />} />
          <Route path='/login-form' element={<LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path='/manage-account' element={<ManageAccount currentUser={currentUser} setCurrentUser={setCurrentUser} onDeleteUser={onDeleteUser} />} />
        </Routes>
    </div>
  );
}

export default App;
