import React from "react";
import { Paper, Typography, Button } from "@mui/material";
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
  item: {
    margin: "10px",
    width: "10rem",
  },
};

const SideMenu = (props) => {
  const { togglePieChart, isOpen } = props;
  return (
    <Paper sx={styles.sideMenu} variant="elevation" elevation={4}>
      <Typography variant="h6">Total Balance</Typography>
      <TotalBalance />
      <AddExpenseModal />
      <Button
        variant="outlined"
        color="secondary"
        sx={styles.item}
        onClick={() => togglePieChart(!isOpen)}
      >
        {isOpen ? "Toggle Table" : "Toggle Charts"}
      </Button>
    </Paper>
  );
};

export default SideMenu;
