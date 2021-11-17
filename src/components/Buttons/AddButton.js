import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Box, Fab } from "@mui/material";

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

const AddButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Fab onClick={handleOpen} variant="extended" sx={styles.button}>
        <AddIcon />
        <span>Add Expense</span>
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <ExpenseForm handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default AddButton;
