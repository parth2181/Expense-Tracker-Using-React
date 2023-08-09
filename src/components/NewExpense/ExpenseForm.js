import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredtitle] = useState("");
  const [enteredamount, setEnteredamount] = useState("");
  const [entereddate, setEntereddate] = useState("");

  const titleHandler = (event) => {
    setEnteredtitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredamount(event.target.value);
  };
  const dateHandler = (event) => {
    setEntereddate(event.target.value);
  };
  const submitHadler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredtitle("");
    setEnteredamount("");
    setEntereddate("");
  };

  return (
    <form className="expense-form" onSubmit={submitHadler}>
      <div className="form-control">
        <label>
          Expense Title:
          <input type="text" value={enteredtitle} onChange={titleHandler} />
        </label>
        <label>
          Expense Amount:
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={amountHandler}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={entereddate}
            onChange={dateHandler}
          />
        </label>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button id="cancle" type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
