// import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ToolTipContainerStyles } from "recharts";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../redux/selectors/expenses";
import { Paper, Typography } from "@mui/material";
import { typography } from "@mui/system";

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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PieChartComponent = () => {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  const data = visibleExpenses;
  return (
    <Paper sx={styles.pieChart} variant="elevation" elevation={4}>
      <Typography variant="h3">Pie chart</Typography>
      <PieChart width={450} height={450}>
        <Tooltip cursor={false} />
        <Pie
          data={data}
          cx={225}
          cy={225}
          innerRadius={80}
          outerRadius={200}
          fill="#8884d8"
          dataKey="amount"
          nameKey="description"
          unit="%"
          labelLine={false}
          label={renderCustomizedLabel}
          animationBegin={100}
          animationDuration={800}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Paper>
  );
};
export default PieChartComponent;
