import React from 'react'
import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {

    
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredamount, setEnteredamount] = useState("");
  const [entereddate, setEntereddate] = useState("");

  const titleHandler = (event) =>{
    setEnteredtitle(event.target.value);
  }
  const amountHandler = (event) =>{
    setEnteredamount(event.target.value);
  }
  const dateHandler = (event) =>{
    setEntereddate(event.target.value);
  }
  const submitHadler = (event) =>{
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    
    }

    console.log(expenseData);
  }

  return (
    <form className="expense-form" onSubmit={submitHadler}>
    <div className="form-control">
      <label>
        Expense Title:
        <input type="text" onChange={titleHandler}  />
      </label>
      <label>
        Expense Amount:
        <input type="number"  min="0.01" step="0.01"   onChange={amountHandler} />
      </label>
      <label>
        Date:
        <input type="date" min="2019-01-01" max="2022-12-31"  onChange={dateHandler} />
      </label>
    </div>

    <button type="submit">Add Expense</button>
  </form>
  )
}

export default ExpenseForm