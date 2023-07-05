import logo from './logo.svg';
import React, {useState} from 'react';
import Expense from './component/Expenses/Expense';
import NewExpense from './component/NewExpense/NewExpense';
import './App.css';


const dummyExpenseArray = [
  {id: 'e1' ,title:'Traveling',amount:250.12, date: new Date(2021,1,12)},
  {id: 'e2' ,title:'Transport',amount:120.12, date: new Date(2022,10,15)},
  {id: 'e3', title:'Office Expense',amount:2340.12, date: new Date(2020,11,5)}
]

function App() {

  const [expenses,setExpenses]=useState(dummyExpenseArray)
  
  const addExpenseHandler= (expenseObj)=> {
      setExpenses(prevExpenses=> {
        return [expenseObj, ...prevExpenses]
      })
      console.log(expenses)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense= {addExpenseHandler} />
      <Expense items={expenses}></Expense>
      
    </div>
  );
}

export default App;
