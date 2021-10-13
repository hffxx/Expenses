import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import AddExpenseModal from "./AddExpenseModal";
import TotalBalance from "./TotalBalance";
import { setSortBy } from "../redux/actions/filterActions";
import { useDispatch, useSelector } from "react-redux";

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
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const { toggleView, isOpen } = props;
  return (
    <Paper sx={styles.sideMenu} variant="elevation" elevation={4}>
      <Typography variant="h6">Total Balance</Typography>
      <TotalBalance />
      <AddExpenseModal />
      <Button
        disabled={!expenses.length}
        variant="outlined"
        color="secondary"
        sx={styles.item}
        onClick={() => {
          dispatch(setSortBy("dateOld"));
          toggleView(!isOpen);
        }}
      >
        {isOpen ? "Toggle Table" : "Toggle Charts"}
      </Button>
    </Paper>
  );
};

export default SideMenu;
