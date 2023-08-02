import React from "react";
import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Cards from "../UI/Cards";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [ add, setAdd] = useState(props.amount);
  const clickHandler = () => {
    setTitle("Updated");
      setAdd(add + 100);
    console.log(title);
  };

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={add}
        location={props.location}
        title={title}
      />
      <button onClick={clickHandler}>Delete Expense</button>
      <button onClick={clickHandler}>Add $100 in Expense</button>
    </Cards>
  );
};

export default ExpenseItem;
