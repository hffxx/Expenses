import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expensesActions/addExpense";
import { useHistory } from "react-router";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@material-ui/core";

function ExpenseForm({ handleClose }) {
  const [expense, setExpense] = useState({
    description: "",
    note: "",
    amount: 0,
    createdAt: moment(),
  });

  const dispatch = useDispatch();
  // const history = useHistory();
  console.log(expense.createdAt);

  // const regex = /^\d*(\.\d{0,2})?$/;

  const handleAddExpense = (e) => {
    e.preventDefault();
    const { description, amount } = expense;
    if (description && amount) {
      dispatch(addExpense(expense));
      // history.push("/");
      handleClose();
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

        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="Date"
            value={expense.createdAt}
            onChange={(date) => {
              setExpense({ ...expense, createdAt: date });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
