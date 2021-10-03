import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import getVisibleExpenses from "../redux/selectors/expenses";
import { useSelector } from "react-redux";
import AddExpenseModal from "./AddExpenseModal";
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
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );

  const total = visibleExpenses
    .map((expense) => {
      if (expense.expenseType === "bill") {
        return -expense.amount;
      } else if (expense.expenseType === "earning") {
        return expense.amount;
      } else {
        return (expense.amount = undefined);
      }
    })
    .reduce((a, amount) => a + amount, 0);

  return (
    <Paper className={classes.sideMenu} variant="elevation" elevation={4}>
      <AddExpenseModal />
      <Typography variant="h6" className={classes.item}>
        Balance: {total} PLN
      </Typography>
    </Paper>
  );
};

export default withStyles(style)(SideMenu);
