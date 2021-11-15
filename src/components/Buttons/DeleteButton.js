import React from "react";
import { Fab, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../../redux/actions/expensesActions";
import { removeFromDeleteList } from "../../redux/actions/deleteListActions";
import getVisibleExpenses from "../../redux/selectors/expenses";
import { reset } from "../../redux/actions/filterActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
      marginLeft: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "110px",
      color: "white",
      background: "#e84434",
      transition: "0.5s",
      "&:hover": {
        background: "#a11e12",
      },
    },
  };

  return (
    <Fab
      variant="extended"
      sx={styles.button}
      disabled={deleteList.length === 0}
      onClick={() => {
        dispatch(removeFromDeleteList(deleteListFiltered));
        dispatch(removeExpense(deleteListFiltered));
        if (visibleExpensesIds.length === deleteListFiltered.length) {
          dispatch(reset());
        }
      }}
    >
      <DeleteOutlineIcon sx={{ marginBottom: "2px" }} />
      <Typography variant="string">Delete</Typography>
    </Fab>
  );
};

export default DeleteButton;
