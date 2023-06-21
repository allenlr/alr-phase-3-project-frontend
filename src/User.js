import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Expense from './Expense'
import ExpenseForm from './ExpenseForm'

function User(){
    const { id } = useParams()
    const [user, setUser] = useState(null);
    const [expenseFormFlag, setExpenseFormFlag] = useState(false)

    // const addExpense = (newExpense, user_id) => {
    //     fetch(`http://localhost:9292/users/${user_id}/expenses/${newExpense.id}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: {newExpense},
    //     })
    //     .then((res) => res.json())
    //     .then((addedExpense) => [...user.expenses, addedExpense])
    // }

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
    }, [id])

    console.log(user)

    const expenses = user.expenses.map((expense) => {
        return <Expense key={expense.id} expense={expense} />
    })

    console.log(expenseFormFlag)

    return(
        <div style={{marginRight: '2rem'}}>

           {user === null ? ( 
            <p>Loading...</p>
            ) : ( 
                <>
                <br></br>
                    <h2>{user.first_name}</h2>
                    <hr/>
                    {expenseFormFlag ? <ExpenseForm /> : null }
                    <h3>Expenses:</h3>
                    <button onClick={() => setExpenseFormFlag(!expenseFormFlag)}>Add Expense</button>
                    <br></br>
                    <br></br>
                    {expenses}
                    <br></br> 
                </>
            )}
        </div>
    )

    
}
export default User