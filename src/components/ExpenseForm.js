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
  btnAdd: {
    marginTop: "20px",
  },
};

function ExpenseForm({ handleClose }) {
  const [expense, setExpense] = useState({
    description: "",
    note: "",
    amount: 0,
    createdAt: moment().valueOf(),
    expenseType: "Bill",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddExpense = () => {
    const { description, amount, createdAt } = expense;
    if (description && amount && moment(createdAt).isValid()) {
      dispatch(addExpense(expense));
      handleClose();
      history.push("/");
    } else {
      window.alert("Invalid data, please fill again");
    }
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
            onChange={(e) =>
              setExpense({ ...expense, description: e.target.value })
            }
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            label="Amount"
            placeholder="Enter an Amount"
            variant="outlined"
            type="number"
            onChange={(e) =>
              setExpense({ ...expense, amount: Number(e.target.value) })
            }
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            label="Note"
            placeholder="Enter a Note"
            variant="outlined"
            onChange={(e) => setExpense({ ...expense, note: e.target.value })}
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="expenseType"
              name="row-radio-buttons-group"
              value={expense.expenseType}
              onChange={(e) =>
                setExpense({
                  ...expense,
                  expenseType: e.target.value,
                })
              }
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
              value={expense.createdAt}
              onChange={(date) => {
                if (date) {
                  setExpense({
                    ...expense,
                    createdAt: date.valueOf(),
                  });
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item lg={6} sx={styles.btnAdd}>
          <Button onClick={handleAddExpense} variant="contained">
            Add Balance
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExpenseForm;
