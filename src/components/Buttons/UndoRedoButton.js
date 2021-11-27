import React from "react";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";
import { Fab } from "@mui/material";
import { clearDeleteList } from "../../redux/actions/deleteListActions";

const styles = {
  undoRedo: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px 0px 10px",
    width: "50px",
    color: "White",
    background: "#6666ff",
    transition: "0.5s",
    "&:hover": {
      background: "#3333ff",
    },
  },
};

function UndoRedoButton(props) {
  const { type } = props;
  const dispatch = useDispatch();
  const expensesFuture = useSelector((state) => state.expenses.future);
  const expensesPast = useSelector((state) => state.expenses.past);
  return (
    <Fab
      disableRipple={true}
      variant="extended"
      sx={styles.undoRedo}
      onClick={() => {
        dispatch(clearDeleteList());
        type === "Undo" && dispatch(ActionCreators.undo());
        type === "Redo" && dispatch(ActionCreators.redo());
      }}
      disabled={
        (type === "Undo" && expensesPast.length === 0) ||
        (type === "Redo" && expensesFuture.length === 0)
      }
    >
      {(type === "Undo" && <UndoIcon></UndoIcon>) ||
        (type === "Redo" && <RedoIcon></RedoIcon>)}
    </Fab>
  );
}

export default UndoRedoButton;
