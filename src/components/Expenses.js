import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
function Expenses(props) {
  return (
    <div className="expenses">
      {props.item.map(function (expense) {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </div>
  );
}
export default Expenses;
