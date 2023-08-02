import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Cards from "../UI/Cards";

const ExpenseItem = (props) => {
const clickHandler=()=>{

console.log("clicked delete Button");
}
 
  return (
    <Cards className="expense-item">
      
        <ExpenseDate date={props.date} />
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        <button onClick={clickHandler}>Delete Expense</button>
    </Cards>
  );
};

export default ExpenseItem;
