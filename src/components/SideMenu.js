import React from "react";
import { Paper } from "@mui/material";
import AddExpenseModal from "./AddExpenseModal";
import TotalBalance from "./TotalBalance";

const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
};

const SideMenu = () => {
  return (
    <Paper sx={styles.sideMenu} variant="elevation" elevation={4}>
      <AddExpenseModal />
      <TotalBalance />
    </Paper>
  );
};

export default SideMenu;
