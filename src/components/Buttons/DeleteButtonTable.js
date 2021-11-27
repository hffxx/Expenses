import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../redux/actions/expensesActions";
import { removeFromDeleteList } from "../../redux/actions/deleteListActions";

const styles = {
  button: {
    marginLeft: "5px",
    color: "white",
    background: "#e84434",
    transition: "0.5s",
    "&:hover": {
      background: "#a11e12",
    },
  },
};

function DeleteButtonTable({ id }) {
  const dispatch = useDispatch();
  return (
    <Fab
      disableRipple={true}
      size="small"
      sx={styles.button}
      onClick={() => {
        dispatch(removeFromDeleteList(id));
        dispatch(removeExpense(id));
      }}
    >
      <DeleteIcon />
    </Fab>
  );
}

export default DeleteButtonTable;
