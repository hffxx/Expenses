import React from "react";
import RedoIcon from "@mui/icons-material/Redo";
import { Fab } from "@mui/material";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";
import { clearDeleteList } from "../../redux/actions/deleteListActions";

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
    width: "110px",
    color: "white",
    background: "#6666ff",
    transition: "0.5s",
    "&:hover": {
      background: "#3333ff",
    },
  },
};

function Redo() {
  const dispatch = useDispatch();
  const expensesFuture = useSelector((state) => state.expenses.future);
  return (
    <Fab
      variant="extended"
      sx={styles.button}
      onClick={() => {
        dispatch(clearDeleteList());
        dispatch(ActionCreators.redo());
      }}
      disabled={expensesFuture.length === 0}
    >
      <span>Redo</span>
      <RedoIcon />
    </Fab>
  );
}

export default Redo;
