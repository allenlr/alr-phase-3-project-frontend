import React, { useState } from 'react';

function CreateExpenseForm({ expenses, setExpenses, expenseCategories, paymentMethods, onSubmitCreateExpense }){
    const [newExpense, setNewExpense] = useState({
        name: '',
        amount: '',
        date_incurred: '',
        category: '',
        payment_method: ''
    })
    const categories = expenseCategories.filter((category) => category != 'All')

    function handleExpenseFormChanges(e){
        const keyName = e.target.name
        setNewExpense({
            ...newExpense,
            [keyName]: e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(newExpense)
        onSubmitCreateExpense(newExpense)
    }

    return (
        <div className="input-table">
            <h3>Enter Expense</h3>
            <form onSubmit={handleFormSubmit}>
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
                        type='text'
                        value={newExpense.date_incurred}
                        name='date_incurred'
                        onChange={handleExpenseFormChanges}
                        >
                    </input>
                </p>
                <p className="input-row">
                    <label>Category: </label>
                    <select onChange={handleExpenseFormChanges} value={newExpense.category} name='category'>
                        {categories.map((category) => {
                            return (
                                <option>{category}</option>
                            )
                        })}
                    </select>
                </p>
                <p className="input-row">
                    <label>Payment Method: </label>
                    <select onChange={handleExpenseFormChanges} value={newExpense.payment_method} name='payment_method'>
                        {paymentMethods.map((payMethod) => {
                        return (
                            <option>{payMethod}</option>
                        )})}
                    </select>
                </p>
                <p>
                    <button type='submit'>Create Expense</button>
                </p>
            </form>
        </div>
    )
}

export default CreateExpenseForm;