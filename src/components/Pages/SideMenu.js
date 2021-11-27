import React from "react";
import { Paper, Typography, TextField } from "@mui/material";
import TotalBalance from "../Balance/TotalBalance";
import ButtonsComponent from "../Buttons/ButtonsComponent";
import { useDispatch, useSelector } from "react-redux";
import { setTextFilter } from "../../redux/actions/filterActions";

const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  filter: {
    margin: "20px",
  },
};

const SideMenu = () => {
  const dispatch = useDispatch();
  const filtersState = useSelector((state) => state.filters);
  return (
    <Paper sx={styles.sideMenu} variant="elevation" elevation={4}>
      <Typography variant="h4">Total Balance</Typography>
      <TotalBalance />
      <ButtonsComponent />
      <TextField
        sx={styles.filter}
        id="outlined-basic"
        label="Title filter"
        variant="outlined"
        value={filtersState.description}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      ></TextField>
    </Paper>
  );
};

export default SideMenu;
