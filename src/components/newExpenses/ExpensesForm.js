import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmont, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // to cahnge title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(enteredTitle);
  };
  // to change amount
  const amontChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  // to change date
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };

  const submitHandler = (event) =>{
    event.PreventDefault();

    const expenseData = {
      title : enteredTitle,
      amount : enteredAmont,
      date : new Date(enteredDate)
    };
    // console.log(enteredTitle);
    // console.log(enteredDate);
    // console.log(new Date (enteredDate));
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* this is for title */}
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        {/* this is Amount  */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amontChangeHandler} />
        </div>
        {/* date */}
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="Submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpensesForm;
