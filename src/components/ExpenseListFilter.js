import React from "react";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { connect, useSelector } from "react-redux";
import { setTextFilter } from "../redux/actions/filterActions/setTextFilter";
import { sortByAmount } from "../redux/actions/filterActions/sortByAmount";
import { sortByDate } from "../redux/actions/filterActions/sortByDate";
import useStyles from "../styles";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useDispatch } from "react-redux";

function ExpenseListFilter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const classes = useStyles();
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <div>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <TextField
          id="outlined-basic"
          label="Filter"
          variant="outlined"
          onChange={(e) => dispatch(setTextFilter(e.target.value))}
        ></TextField>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Sort by
          </InputLabel>
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
        <DatePicker
          label="Basic example"
          value={startDate}
          onChange={(e) => {
            setStartDate(e);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default ExpenseListFilter;
