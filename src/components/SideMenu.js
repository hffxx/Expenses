import React from "react";
import { Paper } from "@mui/material";
import AddExpenseModal from "./AddExpenseModal";
import TotalBalance from "./TotalBalance";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
});

const SideMenu = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.sideMenu} variant="elevation" elevation={4}>
      <AddExpenseModal />
      <TotalBalance />
    </Paper>
  );
};

export default SideMenu;
