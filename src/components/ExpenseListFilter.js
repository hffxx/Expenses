import React, { useState } from "react";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Container,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { setTextFilter } from "../redux/actions/filterActions/setTextFilter";
import { sortByAmount } from "../redux/actions/filterActions/sortByAmount";
import { sortByDate } from "../redux/actions/filterActions/sortByDate";
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
  return (
    <Container className={classes.filterList}>
      <TextField
        className={classes.textFilter}
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
            if (e.target.value === "date") {
              dispatch(sortByDate(e.target.value));
            } else if (e.target.value === "amount") {
              dispatch(sortByAmount(e.target.value));
            }
          }}
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="amount">Amount</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Start Date"
          value={date.startDate}
          onChange={(newStartDate) => {
            setDate({ ...date, startDate: newStartDate });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="End Date"
          value={date.endDate}
          onChange={(newEndDate) => {
            setDate({ ...date, endDate: newEndDate });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Container>
  );
}

export default ExpenseListFilter;
