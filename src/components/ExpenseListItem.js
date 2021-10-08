import React from "react";
import { useDispatch } from "react-redux";
import { removeExpense } from "../redux/actions/expensesActions";
import { Button, Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import EditExpenseModal from "./EditExpenseModal";

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
  const expense = { description, amount, createdAt, id, note, expenseType };
  return (
    <Card sx={styles.card} variant="elevation" elevation={4}>
      <Typography variant="h2">{description}</Typography>
      <Typography variant="h2">Amount: {amount} PLN</Typography>
      <Typography variant="h4">Date: {createdAtFormatted}</Typography>
      <Typography variant="h5">Note: {note}</Typography>
      <Typography variant="h5">Type: {expenseType}</Typography>
      <EditExpenseModal expense={expense} />
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
