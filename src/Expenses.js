import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Expenses({ currentUser, expenseCategories }){
    const Decimal = require('decimal.js')
    const [userExpenses, setUserExpenses] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    
    const navigate = useNavigate();

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

    function handleClickAddExpense(){
        navigate.push('/create-expense-form')
    }

    return(
        <div style={{width: '100%', overflow: 'auto', maxHeight: '800px' }}>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                {expenseCategories.map((category) => {
                    return (
                        <option key={category} value={category} name={category}>{category}</option>
                    )
                })}
            </select>
            <br></br>
            <button onClick={handleClickAddExpense} >Add Expense</button>
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