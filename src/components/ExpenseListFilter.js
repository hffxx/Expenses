import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Paper,
  Button,
} from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useDispatch } from "react-redux";
import { defaultFilterState } from "../redux/defaultState/defaultState";
import {
  setSortBy,
  setEndDate,
  setStartDate,
  setTextFilter,
  reset,
  setExpensesType,
} from "../redux/actions/filterActions";
import RefreshIcon from "@mui/icons-material/Refresh";

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
  const filters = useSelector((state) => state.filters);
  const currstate = useSelector((state) => state.expenses);
  console.log(currstate);
  console.log(filters);
  console.log(filter);
  return (
    <Paper sx={styles.filterList} variant="elevation" elevation={4}>
      <TextField
        sx={styles.item}
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        value={filter.description}
        onChange={(e) => {
          setFilter({ ...filter, description: e.target.value });
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
              dispatch(setSortBy(e.target.value));
            } else if (e.target.value === "dateOld") {
              setFilter({ ...filter, sortBy: e.target.value });
              dispatch(setSortBy(e.target.value));
            } else if (e.target.value === "amountHigh") {
              setFilter({ ...filter, sortBy: e.target.value });
              dispatch(setSortBy(e.target.value));
            } else if (e.target.value === "amountLow") {
              setFilter({ ...filter, sortBy: e.target.value });
              dispatch(setSortBy(e.target.value));
            }
          }}
        >
          <MenuItem value="dateNew">Date Newest</MenuItem>
          <MenuItem value="dateOld">Date Oldest</MenuItem>
          <MenuItem value="amountHigh">Amount Highest</MenuItem>
          <MenuItem value="amountLow">Amount Lowest</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={styles.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Show</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="showExpensesType"
          value={filter.expensesType}
          onChange={(e) => {
            if (e.target.value === "all") {
              setFilter({ ...filter, expensesType: e.target.value });
              dispatch(setExpensesType(""));
            } else if (e.target.value === "Bill") {
              setFilter({ ...filter, expensesType: e.target.value });
              dispatch(setExpensesType(e.target.value));
            } else if (e.target.value === "Earning") {
              setFilter({ ...filter, expensesType: e.target.value });
              dispatch(setExpensesType(e.target.value));
            }
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Bill">Bills</MenuItem>
          <MenuItem value="Earning">Earnings</MenuItem>
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
        <RefreshIcon />
      </Button>
    </Paper>
  );
};

export default ExpenseListFilter;
