import React from 'react'

function Expense({ expense }){
    // console.log(expense)
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
            <br></br>

        </div>
    )
}

export default Expense;