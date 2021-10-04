import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../redux/selectors/expenses";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  total: {
    padding: "10px",
    "& p": {
      display: "inline",
    },
  },
  balanceMinus: {
    color: "red",
  },
  balancePlus: {
    color: "green",
  },
});

const TotalBalance = () => {
  const classes = useStyles();
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
    <Typography variant="h6" className={classes.total}>
      {"Balance: "}
      <p
        className={
          total >= 0
            ? total === 0
              ? undefined
              : classes.balancePlus
            : classes.balanceMinus
        }
      >
        {total} PLN
      </p>
    </Typography>
  );
};

export default TotalBalance;
