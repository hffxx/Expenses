import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expensesActions";
import { editExpense } from "../../redux/actions/expensesActions";
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

function FormComponent(props) {
  const expenseProps = props.expense;
  const handleClose = props.handleClose;
  const getInitState = (expense) => {
    return {
      id: expense?.id || "",
      description: expense?.description || "",
      amount: expense?.amount || "",
      createdAt: expense?.createdAt || moment().valueOf(),
      note: expense?.note || "",
      expenseType: expense?.expenseType || "Bill",
    };
  };

  const [expense, setExpense] = useState(getInitState(expenseProps));

  const [error, setError] = useState("");
  useEffect(() => {
    /^\d+(\.\d{1,2})?$/.test(expense.amount) || expense.amount === ""
      ? setError("")
      : setError("Number is not valid");
  }, [expense.amount]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddExpense = () => {
    !!props.expense
      ? dispatch(editExpense(expense.id, expense))
      : dispatch(addExpense(expense));
    handleClose();
    history.push("/");
  };

  return (
    <Box>
      <Typography gutterBottom variant="h3" align="center">
        {props.expense ? "Edit Expense" : "Add Expense"}
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            value={expense.description}
            label="Description"
            placeholder="Enter an Description"
            variant="outlined"
            onChange={(e) =>
              setExpense({ ...expense, description: e.target.value })
            }
            inputProps={{ maxLength: 10 }}
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
            error={!!error}
            inputProps={{ maxLength: 15 }}
            InputProps={{
              endAdornment: <span>$</span>,
            }}
          ></TextField>
        </Grid>
        <Grid item lg={6} sx={styles.inputModal}>
          <TextField
            value={expense.note}
            label="Note"
            placeholder="Enter a Note"
            variant="outlined"
            onChange={(e) => setExpense({ ...expense, note: e.target.value })}
            inputProps={{ maxLength: 15 }}
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
                  : setExpense({ ...expense, createdAt: null });
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
              expense.amount === "" ||
              !moment(expense.createdAt).isValid()
            }
            size="large"
          >
            {!!props.expense ? "Edit Expense" : "Add Expense"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormComponent;
