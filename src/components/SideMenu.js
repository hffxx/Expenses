import React from "react";
import { Paper, Typography } from "@mui/material";

import TotalBalance from "./Balance/TotalBalance";
// import { setSortBy } from "../redux/actions/filterActions";
// import { useDispatch, useSelector } from "react-redux";
import ButtonsComponent from "./Buttons/ButtonsComponent";

const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  item: {
    margin: "10px",
    width: "10rem",
  },
};

const SideMenu = (props) => {
  return (
    <Paper sx={styles.sideMenu} variant="elevation" elevation={4}>
      <Typography variant="h4">Total Balance</Typography>
      <TotalBalance />
      <ButtonsComponent />
    </Paper>
  );
};

export default SideMenu;
