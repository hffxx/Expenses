import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import { Container, Grid } from "@material-ui/core";
import React from "react";
import SideMenu from "./SideMenu";
import { withStyles } from "@material-ui/core/styles";

const style = {
  display: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px",
  },
};

const ExpenseDashboardPage = ({ classes }) => {
  return (
    <Grid container className={classes.display} spacing={2}>
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
export default withStyles(style)(ExpenseDashboardPage);
