import AddExpense from "../Modals/AddExpense";
import Redo from "./Redo";
import Undo from "./Undo";
import React from "react";
import { Container } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  buttons: {
    margin: "10px",
    display: "flex",
    justifyContent: "center",
  },
};

function ButtonsComponent() {
  return (
    <Container sx={styles.container}>
      <Container sx={styles.buttons}>
        <AddExpense />
      </Container>
      <Container sx={styles.buttons}>
        <Undo />
        <Redo />
      </Container>
    </Container>
  );
}

export default ButtonsComponent;
