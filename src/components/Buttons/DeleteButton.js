import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../../redux/actions/expensesActions";
import { removeFromDeleteList } from "../../redux/actions/deleteListActions";
import getVisibleExpenses from "../../redux/selectors/expenses";
import { reset } from "../../redux/actions/filterActions";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = () => {
  const dispatch = useDispatch();

  const deleteList = useSelector((state) => state.deleteList);
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );
  const visibleExpensesIds = visibleExpenses.map((expense) => expense.id);

  const deleteListFiltered = deleteList.filter((el) =>
    visibleExpensesIds.includes(el)
  );

  const styles = {
    button: {
      marginLeft: "10px",
      height: 65,
      width: 65,
      borderRadius: 65 / 2,
      backgroundColor: "#ff2b2b",
    },
  };

  return (
    <Button
      variant="contained"
      color="error"
      sx={styles.button}
      onClick={() => {
        dispatch(removeFromDeleteList(deleteListFiltered));
        dispatch(removeExpense(deleteListFiltered));
        if (visibleExpensesIds.length === deleteListFiltered.length) {
          dispatch(reset());
        }
      }}
    >
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
