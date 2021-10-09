import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editExpense } from "../redux/actions/expensesActions";
import { useHistory } from "react-router";
import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import DatePicker from "@mui/lab/DatePicker";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Typography,
  TextField,
  Grid,
} from "@mui/material";

const styles = {
  inputModal: {
    margin: "5px",
  },
};

const ExpenseEditForm = (props) => {
  const { description, amount, createdAt, id, note, expenseType } =
    props.expense;
  const handleClose = props.handleClose;

  const [expense, setExpense] = useState({
    description,
    note,
    amount,
    todayDate: moment(createdAt),
    createdAt,
    expenseType,
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditExpense = () => {
    const { description, amount } = expense;
    if (description && amount) {
      dispatch(editExpense(id, expense));
      handleClose();
      history.push("/");
    } else {
      window.alert("Invalid data");
    }
  };

  const handleAddAmount = (e) => {
    setExpense({ ...expense, amount: Number(e.target.value) });
  };
  const handleDescription = (e) => {
    setExpense({ ...expense, description: e.target.value });
  };
  const handleNote = (e) => {
    setExpense({ ...expense, note: e.target.value });
  };
  const handleExpenseType = (e) => {
    setExpense({
      ...expense,
      expenseType: e.target.value,
    });
  };
  const handleDateChange = (date) => {
    setExpense({
      ...expense,
      todayDate: date,
      createdAt: date.valueOf(),
    });
  };

  return (
    <Grid container align="center" justifyContent="center" spacing={2}>
      <Typography gutterBottom variant="h3" align="center">
        Edit Balance
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            label="Description"
            placeholder="Enter an Description"
            variant="outlined"
            onChange={handleDescription}
            value={expense.description}
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            label="Amount"
            placeholder="Enter an Amount"
            variant="outlined"
            onChange={handleAddAmount}
            type="number"
            value={expense.amount}
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            label="Note"
            placeholder="Enter a Note"
            variant="outlined"
            onChange={handleNote}
            value={expense.note}
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="expenseType"
              name="row-radio-buttons-group"
              value={expense.expenseType}
              onChange={handleExpenseType}
            >
              <FormControlLabel value="Bill" control={<Radio />} label="Bill" />
              <FormControlLabel
                value="Earning"
                control={<Radio />}
                label="Earning"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Date"
              value={expense.todayDate}
              onChange={(date) => {
                handleDateChange(date);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <Button onClick={handleEditExpense} variant="contained">
            Edit Balance
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExpenseEditForm;
