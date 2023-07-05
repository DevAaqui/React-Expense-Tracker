import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props)=> {
    const [btnState, setBtnState] = useState(false)

    const btnStateHandler = ()=> {
        setBtnState(true)
    }

    const saveExpenseHandler= (enteredExpenseData)=> {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    const cancelEditingHandler = ()=> {
        setBtnState(false)
    }
    

    return (
        <div className='new-expense'>
            {!btnState && <button onClick={btnStateHandler}>Add Expense</button>}
            {btnState && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel= {cancelEditingHandler} />}
        </div>
    )
}

export default NewExpense