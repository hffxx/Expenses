import React from "react";
import UndoIcon from "@mui/icons-material/Undo";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";
import { Fab } from "@mui/material";

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    marginRight: "5px",
    width: "100px",
    padding: "10px",
  },
};

function Undo() {
  const expensesPast = useSelector((state) => state.expenses.past);
  const dispatch = useDispatch();
  console.log(expensesPast, "past");
  return (
    <Fab
      variant="extended"
      sx={styles.button}
      onClick={() => dispatch(ActionCreators.undo())}
      disabled={expensesPast.length === 0}
    >
      <UndoIcon />
      <span>Undo</span>
    </Fab>
  );
}

export default Undo;
