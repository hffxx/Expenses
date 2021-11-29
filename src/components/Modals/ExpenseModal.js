import React, { useState } from "react";
import { Modal, Box, Fab, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import FormComponent from "../FormComponent.js/FormComponent";

const styles = {
  modalForm: {
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    background: "  #258e25",
    color: "white",
    transition: "0.5s",
    "&:hover": {
      background: "#1a651a",
    },
  },
};

const ExpenseModal = (props) => {
  const expense = props.expense;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const isEdit = !!expense;

  return (
    <Box sx={isEdit ? styles.modal : {}}>
      {isEdit ? (
        <EditIcon onClick={() => setOpen(true)} />
      ) : (
        <Fab
          disableRipple={true}
          onClick={() => setOpen(true)}
          variant="extended"
          sx={styles.button}
        >
          <AddIcon />
          <Typography variant="string">Add</Typography>
        </Fab>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalForm}>
          <FormComponent handleClose={handleClose} expense={expense} />
        </Box>
      </Modal>
    </Box>
  );
};

export default ExpenseModal;
