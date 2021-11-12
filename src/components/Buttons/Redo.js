import React from "react";
import RedoIcon from "@mui/icons-material/Redo";
import { Fab } from "@mui/material";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
    width: "110px",
  },
};

function Redo() {
  const dispatch = useDispatch();
  const expensesFuture = useSelector((state) => state.expenses.future);
  console.log(expensesFuture);
  return (
    <Fab
      variant="extended"
      sx={styles.button}
      onClick={() => dispatch(ActionCreators.redo())}
      disabled={expensesFuture.length === 0}
    >
      <span>Redo</span>
      <RedoIcon />
    </Fab>
  );
}

export default Redo;
