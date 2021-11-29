import React from "react";
import { Paper, Typography } from "@mui/material";
import TotalBalance from "../Balance/TotalBalance";
import ButtonsComponent from "../Buttons/ButtonsComponent";

const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
};

const SideMenu = () => {
  return (
    <Paper sx={styles.sideMenu} variant="elevation" elevation={4}>
      <Typography variant="h4">Total Balance</Typography>
      <TotalBalance />
      <ButtonsComponent />
    </Paper>
  );
};

export default SideMenu;
