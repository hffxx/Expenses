import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../redux/selectors/expenses";
import { Container, Typography } from "@mui/material";

const styles = {
  balance: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  balanceMinus: {
    color: "red",
  },
  balancePlus: {
    color: "green",
  },
};
const balanceStyle = (total, styles) => {
  if (total === 0) {
    return undefined;
  } else if (total > 0) {
    return styles.balancePlus;
  } else if (total < 0) {
    return styles.balanceMinus;
  }
};

const TotalBalance = () => {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  const total = visibleExpenses
    .map(({ expenseType, amount }) => {
      if (expenseType === "bill") {
        return -amount;
      } else if (expenseType === "earning") {
        return amount;
      } else {
        return (amount = undefined);
      }
    })
    .reduce((a, amount) => a + amount, 0);

  return (
    <Container sx={styles.balance}>
      <Typography variant="h6" sx={balanceStyle(total, styles)}>
        {total} PLN
      </Typography>
    </Container>
  );
};

export default TotalBalance;
