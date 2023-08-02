import './ExpenseForm.css';
import { useState } from 'react';




const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
      console.log('Title:', event.target.value);
    };
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
      console.log('Title:', event.target.value);
    };
    const handleDateChange = (event) => {
      setDate(event.target.value);
      console.log('Title:', event.target.value);
    };

  return (
    <form className="expense-form">
    <div className="form-control">
      <label>
        Expense Title:
        <input type="text"  onChange={handleTitleChange} value={title}  />
      </label>
      <label>
        Expense Amount:
        <input type="number" onChange={handleAmountChange} value={amount}   />
      </label>
      <label>
        Date:
        <input type="date" onChange={handleDateChange} value={date}  />
      </label>
    </div>
    
    <div className="form-control">
    </div>
    <button type="submit">Add Expense</button>
  </form>
  )
}

export default ExpenseForm