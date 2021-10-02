import React, { useState } from "react";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Paper,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { setTextFilter } from "../redux/actions/filterActions/setTextFilter";
import { sortByAmountHigh } from "../redux/actions/filterActions/sortByAmountHigh";
import { sortByAmountLow } from "../redux/actions/filterActions/sortByAmountLow";
import { sortByDateNew } from "../redux/actions/filterActions/sortByDateNew";
import { sortByDateOld } from "../redux/actions/filterActions/sortByDateOld";
import { setStartDate } from "../redux/actions/filterActions/setStartDate";
import { setEndDate } from "../redux/actions/filterActions/setEndDate";
import useStyles from "../styles";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useDispatch } from "react-redux";
import moment from "moment";

function ExpenseListFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const classes = useStyles();
  const [date, setDate] = useState({
    startDate: moment(),
    endDate: moment(),
  });
  console.log(filters);
  return (
    <Paper className={classes.filterList} variant="elevation" elevation={4}>
      <TextField
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        onChange={(e) => dispatch(setTextFilter(e.target.value))}
      ></TextField>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="SortBy"
          value={filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "dateNew") {
              dispatch(sortByDateNew(e.target.value));
            } else if (e.target.value === "dateOld") {
              dispatch(sortByDateOld(e.target.value));
            } else if (e.target.value === "amountHigh") {
              dispatch(sortByAmountHigh(e.target.value));
            } else if (e.target.value === "amountLow") {
              dispatch(sortByAmountLow(e.target.value));
            }
          }}
        >
          <MenuItem value="dateNew">Date Newest</MenuItem>
          <MenuItem value="dateOld">Date Oldest</MenuItem>
          <MenuItem value="amountHigh">Amount Highest</MenuItem>
          <MenuItem value="amountLow">Amount Lowest</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Start Date"
          value={date.startDate}
          onChange={(newStartDate) => {
            setDate({ ...date, startDate: newStartDate });
            dispatch(setStartDate(newStartDate.valueOf()));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="End Date"
          value={date.endDate}
          onChange={(newEndDate) => {
            setDate({ ...date, endDate: newEndDate });
            dispatch(setEndDate(newEndDate.valueOf()));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Paper>
  );
}

export default ExpenseListFilter;
