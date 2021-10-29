import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../../redux/selectors/expenses";
import { Typography, Paper } from "@mui/material";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#008042"];

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

const styles = {
  tooltip: {
    padding: "10px",
    background: "rgba(255, 255, 255, 0.8)",
  },
  label: {
    textAlign: "center",
  },
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <Paper sx={styles.tooltip}>
        <Typography sx={styles.label}>{`${payload[0].name}`}</Typography>
        <Typography sx={styles.label}>{`${payload[0].value} PLN`}</Typography>
      </Paper>
    );
  }
  return null;
};

const PieChartComponent = () => {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  return (
    <PieChart width={450} height={450}>
      <Pie
        data={visibleExpenses}
        cx={225}
        cy={225}
        innerRadius={80}
        outerRadius={200}
        fill="#8884d8"
        dataKey="amount"
        nameKey="description"
        unit="%"
        labelLine={false}
        // label={renderCustomizedLabel}
        animationBegin={100}
        animationDuration={800}
      >
        {visibleExpenses.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  );
};
export default PieChartComponent;
