import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import Home from './Home'
import CreateUserForm from './CreateUserForm'
import NavBar from './NavBar'
import Header from './Header'
import Users from './Users'
import User from './User'

function App() {
  const params = useParams();
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, [])
  
  function onSubmitCreateExpenseForm(id, newExpense) {
    fetch(`http://localhost:9292/users/${id}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newExpense),
    })
      .then((res) => res.json())
      .then((addedExpense) => {
        const updatedUsers = users.map((user) => {
          if (user.id === id){
            return {
              ...user,
              expenses: {...user.expenses, addedExpense}
            }
          }
          return user
        })
        setUsers(updatedUsers)
        // navigate('/user-expenses')
        console.log(newExpense)
        console.log(addedExpense)
      })
  }

  // function onSubmitCreateUserForm(newUser){
  //   fetch('http://localhost:9292/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newUser)
  //   })
  //     .then((res) => res.json())
  //     .then((addedUser) => {
  //       setUsers([...users, addedUser])
  //       navigate('/')
  //     })
  // }

  // function onDeleteUser(deletedUserId){
  //   fetch(`http://localhost:9292/users/${deletedUserId}`, {
  //     method: 'DELETE'
  //   })
  //   .then((res) => {
  //     if(!res.ok){
  //       throw new Error('Error deleting user')
  //     }
  //     return fetch('http://localhost:9292/users')
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data)
  //       navigate('/')
  //     })
  // }

  return (
    <div className="App">
      <NavBar />
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/user-expenses' element={<Expenses expenseCategories={expenseCategories}/>} /> */}
          <Route path='/create-user-form' element={<CreateUserForm users={users} />} />
          <Route path='/users' element={<Users users={users} />} />
          <Route path='/users/:id' element={<User submitExpenseForm={onSubmitCreateExpenseForm} />} />
        </Routes>
    </div>
  );
}

export default App;
