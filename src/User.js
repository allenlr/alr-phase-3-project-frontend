import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams, Link } from 'react-router-dom'
import Expense from './Expense'
import ExpenseForm from './ExpenseForm'
import EditUserForm from './EditUserForm'

function User({ submitExpenseForm, users, setUsers }){
    const { id } = useParams()
    const [user, setUser] = useState({
        id: null,
        first_name: '',
        last_name: '',
        username: '',
        expenses: []
    });
    const [expenseFormMode, setExpenseFormMode] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [expense, setExpense] = useState(null)

    useEffect(() => {
        if (users && users.length > 0) {
            const currentUser = users.find((u) => u.id === parseInt(id))
            if (currentUser) {
                setUser(currentUser)
                setIsLoading(false)
            }
        }
    }, [id, submitExpenseForm, users])

    function updateExpense(expense){
        fetch(`http://localhost:9292/users/${parseInt(id)}/expenses/${expense.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense),
        })
            .then((res) => res.json())
            .then((updatedExpense) => {
                const updatedUsers = users.map((user) => {
                    if(parseInt(id) === expense.user_id){
                        const updatedExpenses = user.expenses.map((e) => {
                            if (e.id === expense.id) {
                                return updatedExpense;
                            } else {
                                return e;
                            }
                        });
                        return {...user, expenses: updatedExpenses};
                    } else {
                        return user;
                    }
                });
                setUsers(updatedUsers);                
            })
    }

      function handleUserChanges(changedUser){
        fetch(`http://localhost:9292/users/${parseInt(id)}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changedUser)
        })
            .then((res) => res.json())
            .then((updatedUser) => {
                const updatedUsers = users.map((user) => {
                    if (user.id === changedUser.id){
                        
                        return updatedUser
                    }
                    else {
                        return user
                    }
                })
                setUser({...updatedUser, expenses: updatedUser.expenses || []})
                setUsers(updatedUsers)
            })
            .then(() => fetch('http://localhost:9292/users'))
            .then((res) => res.json())
            .then((usersData) => setUsers(usersData))
      }

    

    function deleteExpense(deletedExpense){
        fetch(`http://localhost:9292/users/${parseInt(id)}/expenses/${deletedExpense.id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then(() => {
            const updatedUsers = users.map((user) => {
                if (parseInt(id) === deletedExpense.user_id) {
                    console.log(user.expenses)
                    const updatedExpenses = user.expenses ? user.expenses.filter((expense) => expense.id !== deletedExpense.id) : [];
                    setUser({...user, expenses: updatedExpenses})
                    return {...user, expenses: updatedExpenses}
                }
                else {
                    return user
                }
            })
            setUsers(updatedUsers)
          })
      }

    const expenses = user.expenses ? user.expenses.map((expense) => {
        return <Expense key={expense.id} expense={expense} onDeleteExpense={deleteExpense} setExpense={setExpense} setExpenseFormMode={setExpenseFormMode} />
    }) : [];

    return(
        <div style={{marginRight: '2rem'}}>
            {isLoading ? 'Loading...' : 
                <>
                <br></br>
                    <h2>{user.first_name}</h2>
                    <Link 
                        to={'edit'}
                        style={{
                            color: 'blue', 
                            background: 'none', 
                            border: 'none', 
                            padding: 0, 
                            font: 'inherit', 
                            cursor: 'pointer', 
                            textDecoration: 'underline'
                        }}
                    >
                        <p>Edit User</p>
                    </Link>
                    <Routes>
                        <Route path='edit' element={<EditUserForm handleUserChangeSubmit={handleUserChanges} user={user} users={users} setUsers={setUsers} />} />
                    </Routes>
                    <hr/>
                    {expenseFormMode ? <ExpenseForm submitExpenseForm={submitExpenseForm} onUpdateExpense={updateExpense} expenseFormMode={expenseFormMode} setExpenseFormMode={setExpenseFormMode} expense={expense} /> : null }
                    <h3>Expenses:</h3>
                    <button onClick={() => setExpenseFormMode('create')}>Add Expense</button>
                    <br></br>
                    <br></br>
                    {expenses}
                    <br></br> 
                </>
            }
        </div>
    )
}
export default User;