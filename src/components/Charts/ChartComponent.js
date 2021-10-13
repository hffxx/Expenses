// import "./styles.css";
import React from "react";
import { Paper, Typography } from "@mui/material";
import PieChartComponent from "./PieChartComponent";

const styles = {
  pieChart: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    marginTop: "10px",
  },
};

const ChartComponent = () => {
  return (
    <Paper sx={styles.pieChart} variant="elevation" elevation={4}>
      <Typography variant="h3">Pie chart</Typography>
      <PieChartComponent></PieChartComponent>
    </Paper>
  );
};
export default ChartComponent;
