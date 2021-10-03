import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import AddExpenseModal from "./AddExpenseModal";
import TotalBalance from "./TotalBalance";

const style = {
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
    padding: "10px",
  },
};

const SideMenu = ({ classes }) => {
  return (
    <Paper className={classes.sideMenu} variant="elevation" elevation={4}>
      <AddExpenseModal />
      <TotalBalance />
    </Paper>
  );
};

export default withStyles(style)(SideMenu);
