import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../../redux/selectors/expenses";
import { Typography } from "@mui/material";

const styles = {
  balance: {},
  balanceMinus: {
    color: "red",
  },
  balancePlus: {
    color: "green",
  },
  balanceZero: {
    color: "gray",
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
        return Number(-amount);
      } else if (expenseType === "Earning") {
        return Number(amount);
      } else {
        return (amount = 0);
      }
    })
    .reduce((a, amount) => a + amount, 0)
    .toFixed(2);

  return (
    <Typography variant="h4" sx={balanceStyle(total, styles)}>
      {total} $
    </Typography>
  );
};

export default TotalBalance;
