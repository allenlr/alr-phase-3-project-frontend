import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Expenses({ currentUser, expenseCategories }){
    const Decimal = require('decimal.js')
    const [userExpenses, setUserExpenses] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    
    const history = useHistory();

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
        history.push('/create-expense-form')
    }

    // console.log(userExpenses)
    return(
        <div>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                {expenseCategories.map((category) => {
                    return (
                        <option value={category} name={category}>{category}</option>
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