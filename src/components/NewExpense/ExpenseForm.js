import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredData, setEnteredData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEnteredData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredData.enteredTitle,
      amount: enteredData.enteredAmount,
      date: new Date(enteredData.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input
            type="text"
            value={enteredData.enteredTitle}
            onChange={handleChange}
            name="enteredTitle"
          />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredData.enteredAmount}
            onChange={handleChange}
            name="enteredAmount"
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            value={enteredData.enteredDate}
            onChange={handleChange}
            name="enteredDate"
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submint">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
