import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Box, Badge } from "@mui/material";
import ExpenseListFilter from "../Pages/ExpenseListFilter";
import FilterListIcon from "@mui/icons-material/FilterList";
import { defaultFilterState } from "../../redux/defaultState/defaultState";

const styles = {
  modalForm: {
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    outline: "none",
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
  gear: {
    marginLeft: " 5px",
    transition: "0.5s",
    "&:hover": {
      color: "gray",
      cursor: "pointer",
    },
  },
};
function FiltersModal() {
  const filtersState = useSelector((state) => state.filters);
  const [open, setOpen] = useState(false);

  const invisible = () =>
    JSON.stringify(defaultFilterState) === JSON.stringify(filtersState);

  return (
    <Box sx={styles.modal}>
      <Badge color="primary" variant="dot" invisible={invisible()}>
        <FilterListIcon sx={styles.gear} onClick={() => setOpen(true)} />
      </Badge>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalForm}>
          <ExpenseListFilter />
        </Box>
      </Modal>
    </Box>
  );
}

export default FiltersModal;
