import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../redux/actions/expensesActions";
import { removeFromDeleteList } from "../../redux/actions/deleteListActions";

const styles = {
  button: {
    padding: "0px",
    minWidth: "30px",
    minHeight: "30px",
    marginLeft: "5px",
  },
};

function DeleteButtonTable({ id }) {
  const dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      color="error"
      sx={styles.button}
      onClick={() => {
        dispatch(removeFromDeleteList(id));
        dispatch(removeExpense(id));
      }}
    >
      <DeleteIcon />
    </Button>
  );
}

export default DeleteButtonTable;
