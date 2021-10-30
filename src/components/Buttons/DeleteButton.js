import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../../redux/actions/expensesActions";
import { removeAllFromDeleteList } from "../../redux/actions/deleteListActions";
import getVisibleExpenses from "../../redux/selectors/expenses";

const DeleteButton = () => {
  const dispatch = useDispatch();
  const deleteList = useSelector((state) => state.deleteList);
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  const visibleExpensesIds = visibleExpenses.map((expense) => expense.id);

  const deleteListFiltered = deleteList.filter((el) =>
    visibleExpensesIds.includes(el)
  );

  return (
    <Button
      onClick={() => {
        dispatch(removeAllFromDeleteList());
        dispatch(removeExpense(deleteListFiltered));
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
