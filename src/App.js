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
  // { id: "e2", date: new Date(2022, 5, 13), title: "Shopping", amount: 700 },
  // { id: "e3", date: new Date(2022, 5, 15), title: "Food", amount: 500 },
  // { id: "e4", date: new Date(2022, 5, 16), title: "Books", amount: 400 },
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
