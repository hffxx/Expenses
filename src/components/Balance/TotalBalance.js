import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../../redux/selectors/expenses";
import { Container, Typography } from "@mui/material";

const styles = {
  balance: {},
  balanceMinus: {
    color: "red",
    marginTop: "20px",
  },
  balancePlus: {
    color: "green",
    marginTop: "20px",
  },
  balanceZero: {
    color: "gray",
    marginTop: "20px",
  },
};
const balanceStyle = (total, styles) => {
  if (total > 0) {
    return styles.balancePlus;
  } else if (total < 0) {
    return styles.balanceMinus;
  } else {
    return styles.balanceZero;
  }
};

const TotalBalance = () => {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );
  const total = visibleExpenses
    .map(({ expenseType, amount }) => {
      if (expenseType === "Bill") {
        return -amount;
      } else if (expenseType === "Earning") {
        return amount;
      } else {
        return (amount = undefined);
      }
    })
    .reduce((a, amount) => a + amount, 0);

  return (
    <Typography variant="h4" sx={balanceStyle(total, styles)}>
      {total} $
    </Typography>
  );
};

export default TotalBalance;
