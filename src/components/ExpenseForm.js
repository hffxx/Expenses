import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expensesActions/addExpense";
import { useHistory } from "react-router";

function ExpenseForm() {
  const [expense, setExpense] = useState({
    description: "",
    note: "",
    amount: 0,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddExpense = (e) => {
    e.preventDefault();
    const { description, amount } = expense;
    if (description && amount) {
      dispatch(addExpense(expense));
      history.push("/");
    } else {
      window.alert("Invalid data");
    }
  };
  return (
    <div>
      <form onSubmit={handleAddExpense}>
        <input
          placeholder="Description"
          type="text"
          onChange={(e) =>
            setExpense({ ...expense, description: e.target.value })
          }
        ></input>
        <input
          placeholder="Amount"
          type="number"
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        ></input>
        <textarea
          placeholder="add a note for your expense"
          onChange={(e) => setExpense({ ...expense, note: e.target.value })}
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
