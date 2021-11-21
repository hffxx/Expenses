import React from "react";
import getVisibleExpenses from "../../redux/selectors/expenses";
import {
  addAllToDeleteList,
  removeFromDeleteList,
} from "../../redux/actions/deleteListActions";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  TableRow,
  TableHead,
  TableCell,
  Checkbox,
  Box,
} from "@mui/material";
import { heads } from "./config";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteButton from "../Buttons/DeleteButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { setSortBy } from "../../redux/actions/filterActions";

const styles = {
  firstRow: {
    "&:first-of-type": { width: "2rem" },
  },
  tableCells: {
    userSelect: "none",
    "&:hover": {
      cursor: "pointer",
    },
    "&:last-of-type": { width: "4.1rem" },
  },
  settings: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gear: {
    transition: "0.5s",
    "&:hover": {
      color: "gray",
      cursor: "pointer",
    },
  },
  lastRow: {
    width: "20px",
  },
  typography: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function TableHeaderComponent() {
  const dispatch = useDispatch();
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );
  const deleteList = useSelector((state) => state.deleteList);
  const deleteListAll = visibleExpenses.map((expense) => expense.id);
  const deleteListMissingIdList = deleteListAll.filter(
    (id) => !deleteList.includes(id)
  );
  const visibleDeleteList = deleteList.filter((el) =>
    deleteListAll.includes(el)
  );
  const handleCheckBoxAll = () => {
    if (visibleDeleteList.length === visibleExpenses.length) {
      dispatch(removeFromDeleteList(visibleDeleteList));
    } else {
      dispatch(addAllToDeleteList(deleteListMissingIdList));
    }
  };
  const filters = useSelector((state) => state.filters);

  const arrowIcon = (field) => {
    switch (field) {
      case "amount":
        if (filters.sortBy === "amountLow") {
          return <ArrowDropUpIcon />;
        } else if (filters.sortBy === "amountHigh") {
          return <ArrowDropDownIcon />;
        } else {
          return null;
        }
      case "createdAt":
        if (filters.sortBy === "dateNew") {
          return <ArrowDropUpIcon />;
        } else if (filters.sortBy === "dateOld") {
          return <ArrowDropDownIcon />;
        } else {
          return null;
        }
      default:
        return;
    }
  };
  const setSort = (field) => {
    switch (field) {
      case "amount":
        if (filters.sortBy === "") {
          return dispatch(setSortBy("amountLow"));
        } else if (filters.sortBy === "amountLow") {
          return dispatch(setSortBy("amountHigh"));
        } else {
          return dispatch(setSortBy(""));
        }
      case "createdAt":
        if (filters.sortBy === "") {
          return dispatch(setSortBy("dateNew"));
        } else if (filters.sortBy === "dateNew") {
          return dispatch(setSortBy("dateOld"));
        } else {
          return dispatch(setSortBy(""));
        }
      default:
        return;
    }
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center" sx={styles.firstRow}>
          <Checkbox
            onChange={() => handleCheckBoxAll()}
            indeterminate={
              visibleDeleteList.length > 0 &&
              visibleDeleteList.length !== visibleExpenses.length
            }
            checked={
              visibleDeleteList.length > 0 &&
              visibleDeleteList.length === visibleExpenses.length
            }
          />
        </TableCell>
        {heads.map((head) => (
          <TableCell
            key={head.field}
            align={head.align}
            sx={head.sort && styles.tableCells}
            onClick={() => head.sort && setSort(head.field)}
          >
            <Typography variant="h6" sx={styles.typography}>
              {head.headerName}
              {arrowIcon(head.field)}
            </Typography>
          </TableCell>
        ))}
        <TableCell align="right" sx={styles.lastRow}>
          <Box sx={styles.settings}>
            {visibleDeleteList.length > 0 ? (
              <DeleteButton />
            ) : (
              <SettingsIcon sx={styles.gear} />
            )}
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeaderComponent;
