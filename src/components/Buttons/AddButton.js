import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Box, Container, Button } from "@mui/material";

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
    marginRight: "10px",
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
    backgroundColor: "#00b02f",
  },
};

const AddButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={styles.button}
        color="success"
      >
        <AddIcon />
      </Button>
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
