import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import { Grid } from "@mui/material";
import React from "react";
import SideMenu from "./SideMenu";

const styles = {
  display: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px",
  },
};

const ExpenseDashboardPage = () => {
  return (
    <Grid container sx={styles.display} spacing={2}>
      <Grid item xs={3}>
        <SideMenu />
      </Grid>
      <Grid item xs={9}>
        <ExpenseListFilter />
        <ExpenseList />
      </Grid>
    </Grid>
  );
};
export default ExpenseDashboardPage;
