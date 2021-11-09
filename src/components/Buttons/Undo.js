import React from "react";
import UndoIcon from "@mui/icons-material/Undo";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";

const styles = {
  button: {
    margin: 0,
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
    marginRight: "10px",
  },
};

function Undo() {
  const expensesPast = useSelector((state) => state.expenses.past);
  const dispatch = useDispatch();
  console.log(expensesPast, "past");
  return (
    <Button
      variant="contained"
      sx={styles.button}
      onClick={() => dispatch(ActionCreators.undo())}
      disabled={expensesPast.length < 0}
    >
      <UndoIcon />
    </Button>
  );
}

export default Undo;
