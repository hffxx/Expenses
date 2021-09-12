import React from "react";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { connect } from "react-redux";
import { setTextFilter } from "../redux/actions/filterActions/setTextFilter";
import { sortByAmount } from "../redux/actions/filterActions/sortByAmount";
import { sortByDate } from "../redux/actions/filterActions/sortByDate";
import useStyles from "../styles";

function ExpenseListFilter({ filters, dispatch }) {
  const classes = useStyles();
  return (
    <div>
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
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
