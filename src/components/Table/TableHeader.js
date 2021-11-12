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
} from "@mui/material";
import { heads } from "./config";

const styles = {
  header: {
    background: "",
  },
  tableCell: {
    "&:first-of-type": { width: "0rem" },
  },
  tableCells: {
    "&:last-of-type": { width: "4.1rem" },
  },
};

function TableHeader() {
  const dispatch = useDispatch();
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );
  const deleteListAll = visibleExpenses.map((expense) => expense.id);
  const deleteList = useSelector((state) => state.deleteList);

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
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
