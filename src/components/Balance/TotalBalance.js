import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../../redux/selectors/expenses";
import { Typography } from "@mui/material";
import CountUp from "react-countup";

const balanceStyle = (total) => {
  let totalStyle = { marginTop: "10px" };
  if (total > 0) {
    return { ...totalStyle, color: "green" };
  } else if (total < 0) {
    return { ...totalStyle, color: "red" };
  } else {
    return { ...totalStyle, color: "grey" };
  }
};

const TotalBalance = () => {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );
  const total = visibleExpenses
    .map(({ expenseType, amount }) =>
      expenseType === "Bill" ? Number(-amount) : Number(amount)
    )
    .reduce((a, amount) => a + amount, 0)
    .toFixed(2);
  return (
    <Typography variant="h4" sx={balanceStyle(total)}>
      <CountUp
        end={total}
        preserveValue={true}
        duration={1}
        prefix="$"
        decimals={2}
        useEasing={true}
      ></CountUp>
    </Typography>
  );
};

export default TotalBalance;
