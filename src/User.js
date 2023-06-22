import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Expense from './Expense'
import ExpenseForm from './ExpenseForm'

function User({ submitExpenseForm, onDeleteExpense }){
    const { id } = useParams()
    const [user, setUser] = useState(null);
    const [expenseFormFlag, setExpenseFormFlag] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
    }, [id, submitExpenseForm])

    const expenses = user ? (user.expenses.map((expense) => {
        return <Expense key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} />
    })) : null;
    
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
                    {expenseFormFlag ? <ExpenseForm submitExpenseForm={submitExpenseForm}/> : null }
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
export default User;