import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../../redux/selectors/expenses";
import { Typography } from "@mui/material";
import CountUp from "react-countup";

const balanceStyle = (total) => {
  let totalStyle = { margin: "15px 0px 15px 0px", transition: "color 1s" };
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
  console.log(visibleExpenses);
  const total = visibleExpenses
    .map(({ expenseType, amount }) =>
      expenseType === "Bill" ? -Number(amount) : Number(amount)
    )
    .reduce((a, amount) => a + amount, 0);
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
