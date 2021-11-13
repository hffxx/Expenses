import React from "react";
import UndoIcon from "@mui/icons-material/Undo";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";
import { Fab } from "@mui/material";
import { clearDeleteList } from "../../redux/actions/deleteListActions";

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    marginRight: "5px",
    width: "110px",
    color: "White",
    background: "#6666ff",
    transition: "0.5s",
    "&:hover": {
      background: "#3333ff",
    },
  },
};

function Undo() {
  const expensesPast = useSelector((state) => state.expenses.past);
  const dispatch = useDispatch();
  return (
    <Fab
      variant="extended"
      sx={styles.button}
      onClick={() => {
        dispatch(clearDeleteList());
        dispatch(ActionCreators.undo());
      }}
      disabled={expensesPast.length === 0}
    >
      <UndoIcon />
      <span>Undo</span>
    </Fab>
  );
}

export default Undo;
