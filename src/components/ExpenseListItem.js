import React from "react";
import { useDispatch } from "react-redux";
import { removeExpense } from "../redux/actions/expensesActions";
import { Button, Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

const styles = {
  card: {
    padding: "20px",
    borderRadius: "10px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& Button": {
      width: "120px",
      margin: "5px",
    },
  },
};

const ExpenseListItem = ({
  description,
  amount,
  createdAt,
  id,
  note,
  expenseType,
}) => {
  const createdAtFormatted = moment(createdAt).format("MM/DD/YYYY");
  const dispatch = useDispatch();
  return (
    <Card sx={styles.card} variant="elevation" elevation={4}>
      <h1>{description}</h1>
      <h2>Date: {createdAtFormatted}</h2>
      <h2>Amount: {amount} PLN</h2>
      <h3>{note}</h3>
      <h4>{expenseType}</h4>
      <Button variant="contained" color="primary" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => dispatch(removeExpense(id))}
      >
        Delete
      </Button>
    </Card>
  );
};

export default ExpenseListItem;
