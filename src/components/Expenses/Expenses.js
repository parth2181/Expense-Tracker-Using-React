import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


 

  return (
    <Cards className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses = {filteredExpenses}/>

      <ExpensesList items={filteredExpenses} />

    

    </Cards>
  );
}

export default Expenses;
