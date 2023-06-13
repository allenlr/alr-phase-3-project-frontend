import React, { useEffect, useState } from 'react'
import Decimal from 'decimal.js'

function Expenses({ currentUser }){
    const Decimal = require('decimal.js')
    const [userExpenses, setUserExpenses] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    const expenseCategories = [
        "All",
        "Rent/Mortgage",
        "Utilities",
        "Groceries",
        "Eating Out",
        "Transportation",
        "Healthcare",
        "Entertainment",
        "Personal Care",
        "Education",
        "Clothing",
        "Savings",
        "Investments",
        "Debt Repayment",
        "Miscellaneous"
    ]
    // console.log(currentUser.id)
    // console.log(selectedCategory)
    // console.log(userExpenses)
function getAllExpenses() {
    fetch(`http://localhost:9292/expenses/by_user/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => setUserExpenses(data))
}
    useEffect(() => {
        if (selectedCategory != 'All'){
            let category = selectedCategory.replace(/\//g, '_');
            const url = `http://localhost:9292/expenses/by_user/${currentUser.id}/${encodeURIComponent(category)}`
            console.log(url)
            fetch(url)
            .then((res) => res.json())
            .then((data) => setUserExpenses(data))
        }
        else 
            getAllExpenses();
    }, [selectedCategory])

    useEffect(() => {
        if (currentUser) {
            getAllExpenses();
        }
    }, [currentUser])

    console.log(userExpenses)
    return(
        <div>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                {expenseCategories.map((category) => {
                    return (
                        <option value={category} name={category}>{category}</option>
                    )
                })}
            </select>
            <p>Category Total: ${userExpenses.reduce((total, expense) => new Decimal(total).plus(expense.amount).toFixed(2), new Decimal(0)).toString()}</p>
            <br></br>
            {userExpenses.map((expense) => {
                return (
                    <div>
                        <div style={{color: 'black'}}>
                            <p>{expense.name} : ${expense.amount}</p>
                            <p>Date Incurred: {expense.date_incurred}</p>
                            <p>Category: {expense.category}</p>
                            <br></br>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Expenses;