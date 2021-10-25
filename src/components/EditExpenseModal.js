import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import ExpenseEditForm from "./ExpenseEditForm";
import EditIcon from "@mui/icons-material/Edit";

const styles = {
  modalForm: {
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const EditExpenseModal = (props) => {
  const expense = props.expense;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={styles.modal}>
      <EditIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalForm}>
          <ExpenseEditForm handleClose={handleClose} expense={expense} />
        </Box>
      </Modal>
    </Box>
  );
};

export default EditExpenseModal;
