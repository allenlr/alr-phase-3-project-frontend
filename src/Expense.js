import React from 'react'

function Expense({ expense, onDeleteExpense, setExpenseFormMode, setExpense }){
    // console.log(expense)


    function handleDeleteExpense(){
        onDeleteExpense(expense)
        console.log('deleted')
    }

    function handleEditExpense(){
        setExpenseFormMode('update')
        setExpense(expense)
    }

    return (
        <div>
           <span style={{fontWeight: 'bold'}}>Name</span><span>: {expense.name}</span>
            <br></br>
            <span style={{fontWeight: 'bold'}}>Amount</span><span>: {expense.amount}</span>
            <br></br>
            <span style={{fontWeight: 'bold'}}>Date Incurred</span><span>: {expense.date_incurred}</span>
            <br></br>
            <span style={{fontWeight: 'bold'}}>Category</span><span>: {expense.category}</span>
            <br></br>
            <button 
            onClick={() => handleEditExpense()} 
            style={{
                color: 'blue', 
                background: 'none', 
                border: 'none', 
                padding: 0, 
                font: 'inherit', 
                cursor: 'pointer', 
                textDecoration: 'underline'}}
            >
                Edit Expense
            </button>
            <br></br>
            <button 
            onClick={() => handleDeleteExpense()} 
            style={{
                color: 'blue', 
                background: 'none', 
                border: 'none', 
                padding: 0, 
                font: 'inherit', 
                cursor: 'pointer', 
                textDecoration: 'underline'}}
            >
                Delete Expense
            </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Expense;