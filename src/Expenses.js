import React, { useEffect, useState } from 'react'

function Expenses({ currentUser }){
    const [userExpenses, setUserExpenses] = useState([])
    const [expenseCategories, setExpenseCategories] = useState([
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
    ])

    useEffect(() => {
        if (currentUser) {
            fetch(`http://localhost:9292/expenses/by_user/${currentUser.id}`)
            .then((res) => res.json())
            .then((data) => setUserExpenses(data))
        }
    }, [currentUser])

    console.log(userExpenses)
    return(
        <div>
            <select>
                {expenseCategories.map((category) => {
                    return (
                        <option>{category}</option>
                    )
                })}
            </select>
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