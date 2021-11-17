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
const styles = {
  firstRow: {
    "&:first-of-type": { width: "2rem" },
  },
  tableCells: {
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
  console.log(visibleDeleteList);
  const handleCheckBoxAll = () => {
    if (visibleDeleteList.length === visibleExpenses.length) {
      dispatch(removeFromDeleteList(visibleDeleteList));
    } else {
      dispatch(addAllToDeleteList(deleteListMissingIdList));
    }
  };

  return (
    <TableHead sx={styles.header}>
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
          <TableCell key={head.field} align={head.align} sx={styles.tableCells}>
            <Typography variant="h6">{head.headerName}</Typography>
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
