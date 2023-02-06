import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {


  const [enteredTitle,setenteredTitle] = useState('');
  const [enteredAmount,setenteredAmount] = useState('');
  const [enteredDate,setenteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredAmount (event.target.value);
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };
  const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
  title : enteredTitle,
  amount : enteredAmount,
  date :  new Date(enteredDate)
  };

  props.onSaveExpenseData(expenseData);
  console.log(expenseData);
  
  setenteredTitle('');
  setenteredAmount('');
  setenteredDate('');
  };
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text"  value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date"  value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
         <button type="submit">add expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;
