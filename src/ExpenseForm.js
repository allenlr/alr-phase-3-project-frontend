import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function ExpenseForm({ submitExpenseForm, onUpdateExpense, expenseFormMode, setExpenseFormMode, expense }){
    const { id } = useParams();
    const expenseCategories = [
        "Hotel",
        "Meal",
        "Miscellaneous food and beverage",
        "Telecommunication",
        "Transportation",
        "Other"
      ]
      
    const [newExpense, setNewExpense] = useState({
        name: '',
        amount: '',
        date_incurred: '',
        category: expenseCategories[0]
    })


    useEffect(() => {
        if (expenseFormMode === 'create'){
            setNewExpense({
                name: '',
                amount: '',
                date_incurred: '',
                category: expenseCategories[0]
            })
        }
        else if (expenseFormMode === 'update') {
            setNewExpense({
                id: expense.id,
                name: expense.name,
                amount: expense.amount,
                date_incurred: expense.date_incurred,
                category: expense.category,
                user_id: expense.user_id
            })
        }
    }, [expenseFormMode, expense])

    function handleExpenseFormChanges(e){
        const keyName = e.target.name;
        setNewExpense({
            ...newExpense,
            [keyName]: e.target.value
        })
    }

    function formSubmit(e){
        e.preventDefault()
        if (expenseFormMode === 'create'){
            submitExpenseForm(parseInt(id), newExpense)
        }
        else if (expenseFormMode === 'update'){
            onUpdateExpense(newExpense)
        }
        setExpenseFormMode(null)
    }
    
    return (
        <div className="input-table">
            <h3>{expenseFormMode === 'create' ? 'Enter Expense' : 'Enter New Expense Information'}</h3>
            <form onSubmit={formSubmit}>
                <TextField
                    label="Expense Name"
                    type="text"
                    value={newExpense.name}
                    name="name"
                    onChange={handleExpenseFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                {/* validate amount to ensure numericality on backend */}
                <TextField
                    label="Amount"
                    type="text"
                    value={newExpense.amount}
                    name="amount"
                    onChange={handleExpenseFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    // label="Date Incurred"
                    type="date"
                    value={newExpense.date_incurred}
                    name="date_incurred"
                    onChange={handleExpenseFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Category"
                    select
                    value={newExpense.category}
                    name="category"
                    onChange={handleExpenseFormChanges}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        style: { textAlign: 'left' }
                    }}
                >
                    {expenseCategories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained" color="primary" type="submit">{expenseFormMode === 'create' ? 'Create Expense' : 'Update Expense'} </Button>
                <br/>
                <Button color="primary" onClick={() => setExpenseFormMode(null)}>Cancel</Button>
            </form>
        </div>
    )
}

export default ExpenseForm