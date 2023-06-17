import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Expense from './Expense'

function User(){
    const params = useParams()
    const [user, setUser] = useState({
        expenses: []
    })
    const [expenseFormFlag, setExpenseFormFlag] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/users/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setUser(data)
        })
    }, [])

    const expenses = user.expenses.map((expense) => {
        return <Expense key={expense.id} expense={expense} />
    })

    return(
        <div>
            <br></br>
            <h2>{user.username}</h2>
            <hr/>
            <h3>Expenses:</h3>
            <br></br>
            {expenses}
            <br></br>
        </div>
    )
}
export default User