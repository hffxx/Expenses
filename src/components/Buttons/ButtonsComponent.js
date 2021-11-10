import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
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
  },
  test: {
    margin: "5px",
    display: "flex",
    justifyContent: "center",
  },
};

function ButtonsComponent() {
  return (
    <Container sx={styles.container}>
      <Container sx={styles.test}>
        <AddButton />
        <DeleteButton />
      </Container>
      <Container sx={styles.test}>
        <Undo />
        <Redo />
      </Container>
    </Container>
  );
}

export default ButtonsComponent;
