import React from "react";
import ExpenseModal from "../Modals/ExpenseModal";
import { Fab } from "@mui/material";

const styles = {
  button: {
    color: "white",
    background: "#0066ff",
    transition: "0.5s",
    "&:hover": {
      background: "#0047b3",
    },
  },
};

function EditButton({ expense }) {
  return (
    <Fab size="small" sx={styles.button} variant="contained">
      <ExpenseModal expense={expense} />
    </Fab>
  );
}

export default EditButton;
