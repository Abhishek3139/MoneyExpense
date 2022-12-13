import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item-descripition">
        <h2>{props.title}</h2>
      </div>

      <div className="expense-item-price">${props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
