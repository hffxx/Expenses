import React from "react";
import { useDispatch } from "react-redux";
import { removeExpense } from "../redux/actions/expensesActions/removeExpense";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
function ExpenseListItem({ description, amount, createdAt, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{description}</h1>
      <h2>
        Amount: {amount} PLN - Created at: {createdAt}
      </h2>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => dispatch(removeExpense(id))}
      >
        Delete
      </Button>
    </div>
  );
}

export default ExpenseListItem;
