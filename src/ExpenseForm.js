import React, { useState } from 'react'

function ExpenseForm(){
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
    
    return(
        <div>

        </div>
    )
}

export default ExpenseForm