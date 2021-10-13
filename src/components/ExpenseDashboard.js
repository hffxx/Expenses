import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import { Grid } from "@mui/material";
import React from "react";
import SideMenu from "./SideMenu";
import ChartComponent from "./Charts/ChartComponent";
import { useState } from "react";

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
  return (
    <Grid container sx={styles.display} spacing={2}>
      <Grid item xs={3}>
        <SideMenu toggleView={toggleView} isOpen={isOpen} />
      </Grid>
      <Grid item xs={9}>
        <ExpenseListFilter isOpen={isOpen} />
        {isOpen ? <ChartComponent /> : <ExpenseList />}
      </Grid>
    </Grid>
  );
};
export default ExpenseDashboardPage;
