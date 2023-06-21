import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function ExpenseForm({ submitExpenseForm }){
    const { id } = useParams();
    const expenseCategories = [
        "All",
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
        category: expenseCategories[0],
    })

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
        submitExpenseForm(id, newExpense)
    }
    
    return (
        <div className="input-table">
            <h3>Enter Expense</h3>
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
                    <button type='submit'>Create Expense</button>
                </p>
            </form>
        </div>
    )
}

export default ExpenseForm