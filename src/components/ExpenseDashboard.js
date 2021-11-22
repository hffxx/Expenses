import ExpenseListFilter from "./ExpenseListFilter";
import { Grid } from "@mui/material";
import React from "react";
import SideMenu from "./SideMenu";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { LS_EXPENSE } from "../config";
import TableComponent from "./Table/TableComponent";

const styles = {
  display: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px",
  },
};

const ExpenseDashboardPage = () => {
  const [isOpen, toggleView] = useState(false);

  const expenses = useSelector((state) => state.expenses.present);

  useEffect(() => {
    const updateExpensesLocalStorage = (state) => {
      localStorage.setItem(LS_EXPENSE, JSON.stringify(state));
    };
    updateExpensesLocalStorage(expenses);
  }, [expenses]);
  return (
    <Grid container sx={styles.display} spacing={2}>
      <Grid item xs={3}>
        <SideMenu toggleView={toggleView} isOpen={isOpen} />
      </Grid>
      <Grid item xs={9}>
        <TableComponent />
        <ExpenseListFilter isOpen={isOpen} />
      </Grid>
    </Grid>
  );
};
export default ExpenseDashboardPage;
