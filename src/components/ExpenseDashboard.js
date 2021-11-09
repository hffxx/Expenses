import ExpenseListFilter from "./ExpenseListFilter";
import { Grid } from "@mui/material";
import React from "react";
import SideMenu from "./SideMenu";
import ChartComponent from "./Charts/ChartComponent";
import { useState, useEffect } from "react";
import ExpenseListTable from "./ExpenseListTable";
import { useDispatch } from "react-redux";
import { setExpenses } from "../redux/actions/expensesActions";
import { LS_EXPENSE } from "../config";

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
  const dispatch = useDispatch();
  useEffect(() => {
    const loadExpenses = () => {
      let list = [];
      try {
        list = JSON.parse(localStorage.getItem(LS_EXPENSE) || "[]");
        dispatch(setExpenses(list));
      } catch (e) {
        console.error("err");
        localStorage.setItem(LS_EXPENSE, "[]");
      }
    };
    loadExpenses();
  }, []);
  return (
    <Grid container sx={styles.display} spacing={2}>
      <Grid item xs={3}>
        <SideMenu toggleView={toggleView} isOpen={isOpen} />
      </Grid>
      <Grid item xs={9}>
        <ExpenseListFilter isOpen={isOpen} />
        {isOpen ? <ChartComponent /> : <ExpenseListTable />}
      </Grid>
    </Grid>
  );
};
export default ExpenseDashboardPage;
