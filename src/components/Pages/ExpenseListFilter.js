import React from "react";
import {
  TextField,
  FormControl,
  Box,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Typography,
  Grid,
} from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useDispatch, useSelector } from "react-redux";
import {
  setEndDate,
  setStartDate,
  setExpensesType,
  setTextFilter,
} from "../../redux/actions/filterActions";
import ResetFilter from "../Buttons/ResetFilter";

const styles = {
  filterList: {
    display: "flex",
    margin: "5px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
  },
  filterListItem: {
    margin: "10px 0px 10px 0px",
  },
};

const ExpenseListFilter = () => {
  const dispatch = useDispatch();
  const filtersState = useSelector((state) => state.filters);

  return (
    <Box sx={styles.filterList} elevation={0}>
      <Typography gutterBottom variant="h3" align="center">
        Filters
      </Typography>

      <Grid item lg={6} sx={styles.filterListItem}>
        <FormControl component="fieldset">
          <FormLabel
            component="legend"
            disabled={true}
            sx={{ marginBottom: "10px" }}
          >
            Expenses Type
          </FormLabel>
          <RadioGroup
            aria-label="expenseType"
            name="radio-buttons-group"
            value={filtersState.expensesType}
            onChange={(e) => dispatch(setExpensesType(e.target.value))}
          >
            <FormControlLabel
              sx={{ margin: 0 }}
              value="all"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel
              sx={{ margin: 0 }}
              value="Bill"
              control={<Radio />}
              label="Bill"
            />
            <FormControlLabel
              sx={{ margin: 0 }}
              value="Earning"
              control={<Radio />}
              label="Earning"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item lg={6} sx={styles.filterListItem}>
        <TextField
          sx={styles.filter}
          id="outlined-basic"
          label="Title filter"
          variant="outlined"
          value={filtersState.description}
          onChange={(e) => {
            dispatch(setTextFilter(e.target.value));
          }}
        ></TextField>
      </Grid>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Grid item lg={6} sx={styles.filterListItem}>
          <DatePicker
            label="Start Date"
            value={filtersState.startDate}
            onChange={(newStartDate) => {
              !!newStartDate
                ? dispatch(setStartDate(newStartDate.startOf("day").valueOf()))
                : dispatch(setStartDate(null));
            }}
            renderInput={(params) => <TextField {...params} />}
            inputVariant="outlined"
          />
        </Grid>
        <Grid item lg={6} sx={styles.filterListItem}>
          <DatePicker
            label="End Date"
            value={filtersState.endDate}
            onChange={(newEndDate) => {
              !!newEndDate
                ? dispatch(setEndDate(newEndDate.endOf("day").valueOf()))
                : dispatch(setEndDate(null));
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
      </LocalizationProvider>

      <Grid item lg={6} sx={styles.filterListItem}>
        <ResetFilter />
      </Grid>
    </Box>
  );
};

export default ExpenseListFilter;
