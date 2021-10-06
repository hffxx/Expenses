import React, { useState } from "react";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Paper,
  Button,
} from "@mui/material";
import { setTextFilter } from "../redux/actions/filterActions/setTextFilter";
import { sortByAmountHigh } from "../redux/actions/filterActions/sortByAmountHigh";
import { sortByAmountLow } from "../redux/actions/filterActions/sortByAmountLow";
import { sortByDateNew } from "../redux/actions/filterActions/sortByDateNew";
import { sortByDateOld } from "../redux/actions/filterActions/sortByDateOld";
import { setStartDate } from "../redux/actions/filterActions/setStartDate";
import { setEndDate } from "../redux/actions/filterActions/setEndDate";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useDispatch } from "react-redux";
import { reset } from "../redux/actions/filterActions/reset";
import { defaultFilterState } from "../redux/reducers/defaultExpensesState";

const styles = {
  filterList: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    borderRadius: "10px",
  },
  formControl: {
    minWidth: 100,
    margin: "0px 5px",
  },
  clearButton: {
    padding: "0px",
    marginLeft: "5px",
  },
  item: {
    margin: "0px 5px",
  },
};

const ExpenseListFilter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(defaultFilterState);
  return (
    <Paper sx={styles.filterList} variant="elevation" elevation={4}>
      <TextField
        sx={styles.item}
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        value={filter.text}
        onChange={(e) => {
          setFilter({ ...filter, text: e.target.value });
          dispatch(setTextFilter(e.target.value));
        }}
      ></TextField>
      <FormControl variant="outlined" sx={styles.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="SortBy"
          value={filter.sortBy}
          onChange={(e) => {
            if (e.target.value === "dateNew") {
              setFilter({ ...filter, sortBy: e.target.value });
              dispatch(sortByDateNew(e.target.value));
            } else if (e.target.value === "dateOld") {
              setFilter({ ...filter, sortBy: e.target.value });
              dispatch(sortByDateOld(e.target.value));
            } else if (e.target.value === "amountHigh") {
              setFilter({ ...filter, sortBy: e.target.value });
              dispatch(sortByAmountHigh(e.target.value));
            } else if (e.target.value === "amountLow") {
              setFilter({ ...filter, sortBy: e.target.value });
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
          value={filter.startDate}
          onChange={(newStartDate) => {
            setFilter({ ...filter, startDate: newStartDate });
            dispatch(setStartDate(newStartDate.startOf("day").valueOf()));
          }}
          renderInput={(params) => <TextField {...params} />}
          inputVariant="outlined"
        />
        <DatePicker
          label="End Date"
          value={filter.endDate}
          onChange={(newEndDate) => {
            setFilter({ ...filter, endDate: newEndDate });
            dispatch(setEndDate(newEndDate.endOf("day").valueOf()));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        sx={styles.clearButton}
        variant="outlined"
        onClick={() => {
          setFilter(defaultFilterState);
          dispatch(reset());
        }}
      >
        Clear filters
      </Button>
    </Paper>
  );
};

export default ExpenseListFilter;
