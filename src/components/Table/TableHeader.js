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

const styles = {
  tableCell: {
    "&:first-of-type": { width: "2rem" },
  },
  tableCells: {
    "&:last-of-type": { width: "4.1rem" },
  },
  settings: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    transition: "0.5s",
    "&:hover": {
      color: "gray",
    },
  },
  lastRow: {
    width: "20px",
  },
};

function TableHeader() {
  const dispatch = useDispatch();
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );
  const deleteList = useSelector((state) => state.deleteList);
  const deleteListAll = visibleExpenses.map((expense) => expense.id);
  const deleteListMissingIdList = deleteListAll.filter(
    (id) => !deleteList.includes(id)
  );

  const handleCheckBoxAll = () => {
    if (deleteList.length === visibleExpenses.length) {
      dispatch(removeFromDeleteList(deleteList));
    } else {
      dispatch(addAllToDeleteList(deleteListMissingIdList));
    }
  };

  return (
    <TableHead sx={styles.header}>
      <TableRow>
        <TableCell align="center" sx={styles.tableCell}>
          <Checkbox
            onChange={() => handleCheckBoxAll()}
            indeterminate={
              deleteList.length > 0 &&
              deleteList.length !== visibleExpenses.length
            }
            checked={
              deleteList.length > 0 &&
              deleteList.length === visibleExpenses.length
            }
          />
        </TableCell>
        {heads.map((head) => (
          <TableCell key={head.field} align={head.align} sx={styles.tableCells}>
            <Typography variant="h6">{head.headerName}</Typography>
          </TableCell>
        ))}
        <TableCell align="right" sx={styles.lastRow}>
          <Box sx={styles.settings}>
            <SettingsIcon />
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
