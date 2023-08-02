import React from "react";
import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Cards from "../UI/Cards";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={title}
      />
      <button onClick={clickHandler}>Delete Expense</button>
    </Cards>
  );
};

export default ExpenseItem;
