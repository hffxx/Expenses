import React from "react";
import { useDispatch } from "react-redux";
import { removeExpense } from "../redux/actions/expensesActions/removeExpense";
import { Button, Card } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& Button": {
      width: "120px",
      margin: "5px",
    },
  },
});

const ExpenseListItem = ({ description, amount, createdAt, id, note }) => {
  const createdAtFormatted = moment(createdAt).format("MM/DD/YYYY");
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card} variant="elevation" elevation={4}>
      <h1>{description}</h1>
      <h2>Date: {createdAtFormatted}</h2>
      <h2>Amount: {amount} PLN</h2>
      <h3>{note}</h3>
      <Button variant="contained" color="primary" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => dispatch(removeExpense(id))}
      >
        Delete
      </Button>
    </Card>
  );
};

export default ExpenseListItem;
