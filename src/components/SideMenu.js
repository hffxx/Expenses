import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    marginLeft: "5px",
    borderRadius: "15px",
    justifyContent: "center",
  },
};

const SideMenu = ({ classes }) => {
  return (
    <Paper className={classes.sideMenu} variant="elevation" elevation={4}>
      SIDE MENU ITEMS
    </Paper>
  );
};

export default withStyles(style)(SideMenu);
