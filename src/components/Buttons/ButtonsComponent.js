import ExpenseModal from "../Modals/ExpenseModal";
import React from "react";
import { Container } from "@mui/material";
import UndoRedoButton from "./UndoRedoButton";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
};

function ButtonsComponent() {
  return (
    <Container sx={styles.container}>
      <UndoRedoButton type={"Undo"} />
      <ExpenseModal />
      <UndoRedoButton type={"Redo"} />
    </Container>
  );
}

export default ButtonsComponent;
