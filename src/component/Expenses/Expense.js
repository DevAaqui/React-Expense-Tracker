import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import ExpensesChart from './ExpensesChart'
import { useState } from "react";

function Expense(props){

    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense=> {
        //console.log('Filtered Expense Array', props.items.forEach(ele=>{console.log(ele)}))
        return expense.date.getFullYear().toString() === filteredYear
    })

    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

            {/* {expensesContent} */}

            {/* One Method */}
            {/* {filteredExpenses.length ===0 && <p style={{color: 'white'}}>No Content to Show</p>} */}
            {/* {filteredExpenses.length>0 && filteredExpenses.map((expense)=> {
                return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            })} */}

            {/* Watch IT */}
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} location={props.items[0].location}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} location={props.items[1].location}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} location={props.items[2].location}></ExpenseItem> */}
        </Card>
        </div>
    )
}

export default Expense