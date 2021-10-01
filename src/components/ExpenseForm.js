import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expensesActions/addExpense";
import { useHistory } from "react-router";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";
import { Typography, TextField, Grid } from "@material-ui/core";
import useStyles from "../styles";

function ExpenseForm({ handleClose }) {
  const [expense, setExpense] = useState({
    description: "",
    note: "",
    amount: 0,
    createdAt: moment(),
  });

  const dispatch = useDispatch();
  const history = useHistory();
  console.log(expense);
  const classes = useStyles();

  // const regex = /^\d*(\.\d{0,2})?$/;

  const handleAddExpense = () => {
    const { description, amount } = expense;
    if (description && amount) {
      dispatch(addExpense(expense));
      handleClose();
      history.push("/");
    } else {
      window.alert("Invalid data");
    }
  };

  const handleAddAmount = (e) => {
    setExpense({ ...expense, amount: e.target.value });
  };
  const handleDescription = (e) => {
    setExpense({ ...expense, description: e.target.value });
  };
  const handleNote = (e) => {
    setExpense({ ...expense, note: e.target.value });
  };
  return (
    <Grid container align="center" justifyContent="center" spacing={2}>
      <Typography gutterBottom variant="h3" align="center">
        Add Expense
      </Typography>
      <Grid
        container
        align="center"
        justifyContent="center"
        className={classes.modal}
      >
        <Grid item lg={6} className={classes.inputModal}>
          <TextField
            label="Description"
            placeholder="Enter an Description"
            variant="outlined"
            onChange={(e) => handleDescription(e)}
          ></TextField>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <TextField
            label="Amount"
            placeholder="Enter an Amount"
            variant="outlined"
            onChange={(e) => handleAddAmount(e)}
          ></TextField>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <TextField
            label="Note"
            placeholder="Enter a Note"
            variant="outlined"
            onChange={(e) => handleNote(e)}
          ></TextField>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Date"
              value={expense.createdAt}
              onChange={(date) => {
                setExpense({ ...expense, createdAt: date });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <Button onClick={handleAddExpense} variant="contained">
            Add Expense
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExpenseForm;
