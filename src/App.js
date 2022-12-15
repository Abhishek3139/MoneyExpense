import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let dummyExpenses = [
  {
    id: "e1",
    date: new Date(2022, 5, 12),
    title: "Bus",
    amount: 300,
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  function addExpenseHandler(expense) {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
