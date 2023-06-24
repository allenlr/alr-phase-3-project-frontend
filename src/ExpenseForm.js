import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ExpenseForm({ submitExpenseForm, onUpdateExpense, expenseFormMode, setExpenseFormMode, expense }){
    const { id } = useParams();
    console.log(id)
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


    // function addExpense(e){
    //     e.preventDefault();
    //     fetch(`http://localhost:9292/expenses/${expense.id}`)
    // }

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
            submitExpenseForm(id, newExpense)
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
                <p className="input-row">
                    <label>Expense Name: </label>
                    <input
                        type='text'
                        value={newExpense.name}
                        name='name'
                        onChange={handleExpenseFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Amount: </label>
                    <input
                        type='text'
                        value={newExpense.amount}
                        name='amount'
                        onChange={handleExpenseFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Date Incurred: </label>
                    <input
                        type='date'
                        value={newExpense.date_incurred}
                        name='date_incurred'
                        onChange={handleExpenseFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Category: </label>
                    <select onChange={handleExpenseFormChanges} value={newExpense.category} name='category'>
                        {expenseCategories.map((category) => {
                            return (
                                <option key={category}>{category}</option>
                            )
                        })}
                    </select>
                </p>
                <p>
                    <button type='submit'>{expenseFormMode === 'create' ? 'Create Expense' : 'Update Expense'}</button>
                </p>
            </form>
        </div>
    )
}

export default ExpenseForm