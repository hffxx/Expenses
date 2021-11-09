import React from "react";
import RedoIcon from "@mui/icons-material/Redo";
import { Button } from "@mui/material";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";

const styles = {
  button: {
    margin: 0,
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
    marginLeft: "10px",
  },
};

function Redo() {
  const dispatch = useDispatch();
  const expensesFuture = useSelector((state) => state.expenses.future);

  return (
    <Button
      variant="contained"
      sx={styles.button}
      onClick={() => dispatch(ActionCreators.redo())}
      disabled={expensesFuture.length < 0}
    >
      <RedoIcon />
    </Button>
  );
}

export default Redo;
