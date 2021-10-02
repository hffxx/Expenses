import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import getVisibleExpenses from "../redux/selectors/expenses";
import { useSelector } from "react-redux";

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    marginLeft: "5px",
    borderRadius: "15px",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: "10px",
  },
};

const SideMenu = ({ classes }) => {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  const total = visibleExpenses.reduce(
    (a, { amount }) => a + Number(amount),
    0
  );

  return (
    <Paper className={classes.sideMenu} variant="elevation" elevation={4}>
      <Typography className={classes.item}>
        Total Spendings: {total} PLN
      </Typography>
    </Paper>
  );
};

export default withStyles(style)(SideMenu);