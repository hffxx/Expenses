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
import { heads, config } from "./config";
import DeleteButton from "../Buttons/DeleteButton";
import { setSortBy } from "../../redux/actions/filterActions";
import FiltersModal from "../Modals/FiltersModal";

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
    let SortIcon = config[field]?.[filters.sortBy]?.component;
    return SortIcon && <SortIcon />;
  };
  const setSort = (field) => {
    switch (field) {
      case "amount":
        if (filters.sortBy === "amountLow") {
          return dispatch(setSortBy(""));
        } else if (filters.sortBy === "amountHigh") {
          return dispatch(setSortBy("amountLow"));
        } else {
          return dispatch(setSortBy("amountHigh"));
        }
      case "createdAt":
        if (filters.sortBy === "dateOld") {
          return dispatch(setSortBy(""));
        } else if (filters.sortBy === "dateNew") {
          return dispatch(setSortBy("dateOld"));
        } else {
          return dispatch(setSortBy("dateNew"));
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
            sx={head.sort ? styles.tableCells : {}}
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
            <FiltersModal />
            {visibleDeleteList.length > 0 && <DeleteButton />}
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeaderComponent;
