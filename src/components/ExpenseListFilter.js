import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
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

const ExpenseListFilter = (props) => {
  const dispatch = useDispatch();
  const { isOpen } = props;
  const filtersState = useSelector((state) => state.filters);

  return (
    <Paper sx={styles.filterList} variant="elevation" elevation={4}>
      <TextField
        sx={styles.item}
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        value={filtersState.description}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      ></TextField>
      <FormControl variant="outlined" sx={styles.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sort by</InputLabel>
        <Select
          disabled={isOpen ? true : false}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="SortBy"
          value={filtersState.sortBy}
          onChange={(e) => {
            if (e.target.value === "dateNew") {
              dispatch(setSortBy(e.target.value));
            } else if (e.target.value === "dateOld") {
              dispatch(setSortBy(e.target.value));
            } else if (e.target.value === "amountHigh") {
              dispatch(setSortBy(e.target.value));
            } else if (e.target.value === "amountLow") {
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
          value={filtersState.expensesType}
          onChange={(e) => {
            if (e.target.value === "all") {
              dispatch(setExpensesType("all"));
            } else if (e.target.value === "Bill") {
              dispatch(setExpensesType(e.target.value));
            } else if (e.target.value === "Earning") {
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
          value={filtersState.startDate}
          onChange={(newStartDate) => {
            dispatch(setStartDate(newStartDate.startOf("day").valueOf()));
          }}
          renderInput={(params) => <TextField {...params} />}
          inputVariant="outlined"
        />
        <DatePicker
          label="End Date"
          value={filtersState.endDate}
          onChange={(newEndDate) => {
            dispatch(setEndDate(newEndDate.endOf("day").valueOf()));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        sx={styles.clearButton}
        variant="outlined"
        onClick={() => {
          if (isOpen) {
            dispatch(reset());
            dispatch(setSortBy("dateOld"));
          } else {
            dispatch(reset());
          }
        }}
      >
        <RefreshIcon />
      </Button>
    </Paper>
  );
};

export default ExpenseListFilter;
