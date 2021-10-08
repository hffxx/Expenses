import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expensesActions";
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

function ExpenseForm({ handleClose }) {
  const [expense, setExpense] = useState({
    description: "",
    note: "",
    amount: 0,
    todayDate: moment(),
    createdAt: moment().valueOf(),
    expenseType: "Bill",
  });

  const dispatch = useDispatch();
  const history = useHistory();

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
        Add Balance
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            label="Description"
            placeholder="Enter an Description"
            variant="outlined"
            onChange={handleDescription}
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            label="Amount"
            placeholder="Enter an Amount"
            variant="outlined"
            onChange={handleAddAmount}
            type="number"
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            label="Note"
            placeholder="Enter a Note"
            variant="outlined"
            onChange={handleNote}
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
          <Button onClick={handleAddExpense} variant="contained">
            Add Balance
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExpenseForm;
