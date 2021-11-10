import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Checkbox,
} from "@mui/material";
import {
  addToDeleteListById,
  removeFromDeleteListById,
  addAllToDeleteList,
  removeFromDeleteList,
} from "../redux/actions/deleteListActions";
import getVisibleExpenses from "../redux/selectors/expenses";

import moment from "moment";
import EditButton from "./Buttons/EditButton";
import DeleteButtonTable from "./Buttons/DeleteButtonTable";

const styles = {
  header: {
    background: "",
  },
  table: {
    borderRadius: "10px",
  },
  button: {
    padding: "0px",
    minWidth: "30px",
    minHeight: "30px",
  },
  description: {
    fontWeight: "bold",
  },
  tableElement: {
    "&:last-child td, &:last-child th": { border: 0 },
  },
  tableCell: {
    "&:first-of-type": { width: "0rem" },
  },
  tableCells: {
    "&:last-of-type": { width: "4.1rem" },
  },
};

const heads = [
  { field: "title", headerName: "Title", align: "center" },
  { field: "amount", headerName: "Amount", align: "center" },
  { field: "note", headerName: "Note", align: "center" },
  { field: "createdAt", headerName: "Created At", align: "center" },
  { field: "action", headerName: "", align: "center" },
];

export default function ExpenseListTable() {
  const dispatch = useDispatch();

  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );

  const deleteListAll = visibleExpenses.map((expense) => expense.id);

  const deleteList = useSelector((state) => state.deleteList);

  const visibleDeleteList = deleteList.filter((el) =>
    deleteListAll.includes(el)
  );
  const deleteListMissingIdList = deleteListAll.filter(
    (id) => !visibleDeleteList.includes(id)
  );

  const handleCheckBoxAll = () => {
    if (visibleDeleteList.length === visibleExpenses.length) {
      dispatch(removeFromDeleteList(visibleDeleteList));
    } else {
      dispatch(addAllToDeleteList(deleteListMissingIdList));
    }
  };
  const handleCheckBoxId = (id) => {
    if (deleteList.indexOf(id) < 0) {
      dispatch(addToDeleteListById(id));
    } else {
      dispatch(removeFromDeleteListById(id));
    }
  };
  return (
    <TableContainer component={Paper} sx={styles.table} elevation={4}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead sx={styles.header}>
          <TableRow>
            <TableCell align="center" sx={styles.tableCell}>
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
                sx={styles.tableCells}
              >
                <Typography variant="h6">{head.headerName}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleExpenses.map((expense) => (
            <TableRow key={expense.id} sx={styles.tableElement}>
              <TableCell align="left">
                <Checkbox
                  onChange={() => {
                    handleCheckBoxId(expense.id);
                  }}
                  checked={deleteList.indexOf(expense.id) !== -1}
                />
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <Typography sx={styles.description}>
                  {expense.description}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="string">{`${expense.amount} $`}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="string">{expense.note}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="string">
                  {moment(expense.createdAt).format("MM/DD/YYYY")}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <EditButton expense={expense} />
                <DeleteButtonTable id={expense.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
