import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props){
    // const [title, setTitle] = useState(props.title)
    // const [amount, setAmount] = useState(props.amount)

    // const deleteHandler = ()=> {
    //     setTitle('')
    //     setAmount(0)
    // }
    return (
        <Card className='expense-item'>
            <ExpenseDate date= {props.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            
        </Card>
    )
}

export default ExpenseItem