import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Expense from './Expense'
import ExpenseForm from './ExpenseForm'

function User({ submitExpenseForm, users, setUsers }){
    const { id } = useParams()
    const [user, setUser] = useState(null);
    // const [expenseFormFlag, setExpenseFormFlag] = useState(false)
    const [expenseFormMode, setExpenseFormMode] = useState(null)
    const [expense, setExpense] = useState(null)
    const [expenseDeleted, setExpenseDeleted] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
    }, [id, submitExpenseForm, users])

    console.log(id)

    function updateExpense(expense){
        fetch(`http://localhost:9292/users/${id}/expenses/${expense.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense),
        })
            .then((res) => res.json())
            .then((updatedExpense) => {
                const updatedUsers = users.map((user) => {
                    if (id === expense.user_id){
                        user.expenses.map((e) => {
                            if (e.id === expense.id) {
                                return updatedExpense
                            } 
                            else return e;
                        })
                    } else {
                        return user
                    }
                })
                setUsers(updatedUsers)
            })
    }

    function deleteExpense(deletedExpense){
        fetch(`http://localhost:9292/users/${id}/expenses/${deletedExpense.id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then(() => {
            const updatedUsers = users.map((user) => {
                if (id === deletedExpense.user_id) {
                    return {...user, expenses: user.expenses.filter((expense) => expense.id !== deletedExpense.id)}
                }
                else {
                    return user
                }
            })
            setUsers(updatedUsers)
          })
      }

    // which one to use? (above or below)

    //   function deleteExpense(expenseId, userId){
    //     fetch(`http://localhost:9292/users/${userId}/expenses/${expenseId}`, {
    //       method: 'DELETE'
    //     })
    //       .then((res) => res.json())
    //       .then(() => setExpenseDeleted(!expenseDeleted))
    //   }

    const expenses = user ? (user.expenses.map((expense) => {
        return <Expense key={expense.id} expense={expense} onDeleteExpense={deleteExpense} setExpense={setExpense} setExpenseFormMode={setExpenseFormMode} />
    })) : null;

    return(
        <div style={{marginRight: '2rem'}}>

           {user === null ? ( 
            <p>Loading...</p>
            ) : ( 
                <>
                <br></br>
                    <h2>{user.first_name}</h2>
                    <hr/>
                    {expenseFormMode ? <ExpenseForm submitExpenseForm={submitExpenseForm} onUpdateExpense={updateExpense} expenseFormMode={expenseFormMode} setExpenseFormMode={setExpenseFormMode} expense={expense} /> : null }
                    <h3>Expenses:</h3>
                    <button onClick={() => setExpenseFormMode('create')}>Add Expense</button>
                    <br></br>
                    <br></br>
                    {expenses}
                    <br></br> 
                </>
            )}
        </div>
    )


}
export default User;

// determine if an expense form is shown to create or update an expense
// if create, form should be default blank, if update, form should have current expense info
// if create or update, form should have create or update button
// useState setUpdateFormFlag and setCreateFormFlag to determine which one
// pass formFlags to expense for edit/update buttons to toggle
// pass formFlags to ExpenseForm to determine which default state to show in form