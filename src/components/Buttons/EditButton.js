import React from "react";
import EditExpenseModal from "../EditExpenseModal";
import { Button } from "@mui/material";

const styles = {
  button: {
    padding: "0px",
    minWidth: "30px",
    minHeight: "30px",
  },
};

function EditButton({ expense }) {
  return (
    <Button sx={styles.button} variant="contained">
      <EditExpenseModal expense={expense} />
    </Button>
  );
}

export default EditButton;
