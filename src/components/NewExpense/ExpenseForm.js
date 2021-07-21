import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDates, setEnteredDates] = useState("");

  const titleChangedHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangedHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const datesChangedHandler = (e) => {
    setEnteredDates(e.target.value);
  };



  // HANDLER SUBMIT
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDates),
    };
    console.log("expenseData", expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDates("");
  };
  return (
    <div>
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangedHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-12-31"
            onChange={datesChangedHandler}
            value={enteredDates}
          />
        </div>
      </div>
      <div className="btn-wrapper">
        <div className="new-expense__actions">
          <button type="submit" onClick={props.handlerCancelBtn}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
