import React from "react";
import RedoIcon from "@mui/icons-material/Redo";
import { Button } from "@mui/material";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";

const styles = {
  button: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "5px",
    width: "100px",
    borderRadius: "20px",
    padding: "10px",
  },
};

function Redo() {
  const dispatch = useDispatch();
  const expensesFuture = useSelector((state) => state.expenses.future);
  console.log(expensesFuture);
  return (
    <Button
      variant="contained"
      sx={styles.button}
      onClick={() => dispatch(ActionCreators.redo())}
      disabled={expensesFuture.length === 0}
    >
      <span>Redo</span>
      <RedoIcon />
    </Button>
  );
}

export default Redo;
