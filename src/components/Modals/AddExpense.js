import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Box, Fab, Typography } from "@mui/material";
import FormComponent from "../FormComponent.js/FormComponent";
const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  },
  button: {
    marginRight: "5px",
    background: "  #258e25",
    color: "white",
    transition: "0.5s",
    "&:hover": {
      background: "#1a651a",
    },
  },
};

const AddExpense = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Fab onClick={() => setOpen(true)} variant="extended" sx={styles.button}>
        <AddIcon />
        <Typography variant="string">Add Expense</Typography>
      </Fab>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <FormComponent handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default AddExpense;
