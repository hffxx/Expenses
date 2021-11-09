import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import Redo from "./Redo";
import Undo from "./Undo";
import React from "react";
import { Container } from "@mui/material";

const styles = {
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    height: "200px",
    width: "200px",
    justifyContent: "center",
    alignItems: "center",
  },
};

function ButtonsComponent() {
  return (
    <Container sx={styles.buttons}>
      <AddButton />
      <DeleteButton />
      <Undo />
      <Redo />
    </Container>
  );
}

export default ButtonsComponent;
