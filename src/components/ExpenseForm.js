import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expensesActions/addExpense";
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
import { withStyles } from "@mui/styles";
// import { makeStyles } from "@mui/styles";

const style = {
  inputModal: {
    margin: "5px",
  },
};

// const useStyles = makeStyles({
//   inputModal: {
//     margin: "5px",
//   },
// });

function ExpenseForm({ handleClose, classes }) {
  const [expense, setExpense] = useState({
    description: "",
    note: "",
    amount: 0,
    todayDate: moment(),
    createdAt: moment().valueOf(),
    expenseType: "bill",
  });
  // const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(expense.createdAt);

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

  return (
    <Grid container align="center" justifyContent="center" spacing={2}>
      <Typography gutterBottom variant="h3" align="center">
        Add Balance
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={6} className={classes.inputModal}>
          <TextField
            label="Description"
            placeholder="Enter an Description"
            variant="outlined"
            onChange={handleDescription}
          ></TextField>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <TextField
            label="Amount"
            placeholder="Enter an Amount"
            variant="outlined"
            onChange={handleAddAmount}
            type="number"
          ></TextField>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <TextField
            label="Note"
            placeholder="Enter a Note"
            variant="outlined"
            onChange={handleNote}
          ></TextField>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="expenseType"
              name="row-radio-buttons-group"
              value={expense.expenseType}
              onChange={handleExpenseType}
            >
              <FormControlLabel value="bill" control={<Radio />} label="Bill" />
              <FormControlLabel
                value="earning"
                control={<Radio />}
                label="Earning"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Date"
              value={expense.todayDate}
              onChange={(date) => {
                setExpense({ ...expense, createdAt: date.valueOf() });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item lg={6} className={classes.inputModal}>
          <Button onClick={handleAddExpense} variant="contained">
            Add Balance
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(style)(ExpenseForm);
