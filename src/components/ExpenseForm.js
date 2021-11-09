import React, { useState, useEffect } from "react";
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
  Box,
} from "@mui/material";

const styles = {
  inputModal: {
    margin: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    margin: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnAdd: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function ExpenseForm({ handleClose }) {
  const [expense, setExpense] = useState({
    description: "",
    note: "",
    amount: "",
    createdAt: moment().valueOf(),
    expenseType: "Bill",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    /^\d+(\.\d{1,2})?$/.test(expense.amount) || expense.amount === ""
      ? setError("")
      : setError("Number is not valid");
  }, [expense.amount]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddExpense = () => {
    dispatch(addExpense(expense));
    handleClose();
    history.push("/");
  };

  return (
    <Box>
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
            onChange={(e) => {
              const { value } = e.target;
              !isNaN(value) && setExpense({ ...expense, amount: value });
            }}
            value={expense.amount}
            helperText={error}
            error={!!error}
            InputProps={{
              endAdornment: <span>$</span>,
            }}
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
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              value={expense.createdAt}
              onChange={(date) => {
                date !== null
                  ? setExpense({
                      ...expense,
                      createdAt: date.valueOf(),
                    })
                  : console.log("Blad");
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item lg={6} sx={styles.radio}>
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

        <Grid item lg={6} sx={styles.btnAdd}>
          <Button
            onClick={handleAddExpense}
            variant="contained"
            disabled={
              !!error ||
              expense.description === "" ||
              !moment(expense.createdAt).isValid()
            }
            size="large"
          >
            Add Balance
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ExpenseForm;
