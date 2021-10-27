import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../../redux/selectors/expenses";
import { Container, Typography } from "@mui/material";

const styles = {
  balanceMinus: {
    color: "red",
    padding: "10px",
  },
  balancePlus: {
    color: "green",
    padding: "10px",
  },
  balanceZero: {
    padding: "10px",
  },
};
const balanceStyle = (total, styles) => {
  if (total === 0) {
    return undefined;
  } else if (total > 0) {
    return styles.balancePlus;
  } else if (total < 0) {
    return styles.balanceMinus;
  } else {
    return styles.balanceZero;
  }
};

const TotalBalance = () => {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
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
    <Typography variant="h6" sx={balanceStyle(total, styles)}>
      {total} PLN
    </Typography>
  );
};

export default TotalBalance;
