import React from 'react'
import Button from '@mui/material/Button';

function Expense({ expense, onDeleteExpense, setExpenseFormMode, setExpense }){

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
            <Button 
                color="secondary"
                variant="outlined"
                onClick={() => handleEditExpense()} 
                style={{
                    marginTop: '5px',
                    border: 'none', 
                    padding: 0, 
                }}
            >
                Edit Expense
            </Button>
            <br></br>
            <Button 
                color="secondary"
                variant="outlined"
                onClick={() => handleDeleteExpense()} 
                style={{
                    border: 'none', 
                    padding: 0, 
                }}
            >
                Delete Expense
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Expense;