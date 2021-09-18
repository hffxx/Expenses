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

  // const regex = /^\d*(\.\d{0,2})?$/;

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

  const handleAddAmount = (e) => {
    setExpense({ ...expense, amount: e.target.value });
  };
  const handleDescription = (e) => {
    setExpense({ ...expense, description: e.target.value });
  };
  const handleNote = (e) => {
    setExpense({ ...expense, note: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleAddExpense}>
        <input
          placeholder="Description"
          type="text"
          onChange={(e) => handleDescription(e)}
        ></input>
        <input
          placeholder="Amount"
          type="number"
          onChange={(e) => handleAddAmount(e)}
        ></input>
        <textarea
          placeholder="add a note for your expense"
          onChange={(e) => handleNote(e)}
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
