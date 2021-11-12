import React from "react";
import EditExpenseModal from "../EditExpenseModal";
import { Button, Fab } from "@mui/material";

const styles = {
  button: {
    color: "white",
    background: "blue",
  },
};

function EditButton({ expense }) {
  return (
    <Fab size="small" sx={styles.button} variant="contained">
      <EditExpenseModal expense={expense} />
    </Fab>
  );
}

export default EditButton;
