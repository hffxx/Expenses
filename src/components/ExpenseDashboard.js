import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import { Container } from "@material-ui/core";
import useStyles from "../styles";
import React from "react";

const ExpenseDashboardPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <ExpenseListFilter />
      <ExpenseList />
    </Container>
  );
};
export default ExpenseDashboardPage;
