import Cards from '../UI/Cards';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <Cards className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].LocationOfExpenditure}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].LocationOfExpenditure}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].LocationOfExpenditure}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].LocationOfExpenditure}
      />
    </Cards>
  );
}

export default Expenses;












// import ExpenseItem from './ExpenseItem';
// import './Expenses.css';

// const Expenses = (props) => {
//   return (
   
//         <div className="expenses">
//             <ExpenseItem
//                 title={expenses[0].title}
//                 amount={expenses[0].amount}
//                 date={expenses[0].date}
//                 location={expenses[0].LocationOfExpenditure}
//             />
//             <ExpenseItem
//                 title={expenses[1].title}
//                 amount={expenses[1].amount}
//                 date={expenses[1].date}
//                 location={expenses[1].LocationOfExpenditure}
//             />
//             <ExpenseItem
//                 title={expenses[2].title}
//                 amount={expenses[2].amount}
//                 date={expenses[2].date}
//                 location={expenses[2].LocationOfExpenditure}

//             />
//             <ExpenseItem
//                 title={expenses[3].title}
//                 amount={expenses[3].amount}
//                 date={expenses[3].date}
//                 location={expenses[3].LocationOfExpenditure}

//             />
//         <div/>
   
   
//   )
// }

// export default Expenses;