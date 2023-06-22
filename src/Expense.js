import React from 'react'
import { Link } from 'react-router-dom'

function Expense({ expense, onDeleteExpense }){
    // console.log(expense)

    function handleDeleteExpense(){
        onDeleteExpense(expense.id, expense.user_id)
        console.log('deleted')
    }
    return (
        <div>
            Name: {expense.name}
            <br></br>
            Amount: {expense.amount}
            <br></br>
            Date Incurred: {expense.date_incurred}
            <br></br>
            Category: {expense.category}
            <br></br>
            <br></br>
            <button onClick={() => handleDeleteExpense()} style={{color: 'blue', background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer', textDecoration: 'underline'}}>Delete Expense</button>
            <br></br>
            <br></br>

        </div>
    )
}

export default Expense;