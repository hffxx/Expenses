import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Typography, Paper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import getVisibleExpenses from "../redux/selectors/expenses";
import { useDispatch, useSelector } from "react-redux";
import EditExpenseModal from "./EditExpenseModal";
import moment from "moment";
import {
  addToDeleteListById,
  removeFromDeleteListById,
  addAllToDeleteList,
  removeFromDeleteList,
} from "../redux/actions/deleteListActions";

const styles = {
  table: {
    borderRadius: "10px",
  },
  row: {},
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    padding: "0px",
    minWidth: "30px",
    minHeight: "30px",
  },
  description: {
    fontWeight: 500,
  },
};

const heads = [
  { field: "title", headerName: "Title", align: "left" },
  { field: "amount", headerName: "Amount", align: "center" },
  { field: "note", headerName: "Note", align: "center" },
  { field: "createdAt", headerName: "Created At", align: "center" },
  { field: "type", headerName: "Type", align: "center" },
  { field: "action", headerName: "Action", align: "right" },
];

export default function ExpenseListTable() {
  const dispatch = useDispatch();

  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
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
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={styles.row}>
            <TableCell>
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
              <TableCell key={head.field} align={head.align}>
                <h2>{head.headerName}</h2>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleExpenses.map((expense) => (
            <TableRow
              key={expense.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell>
                <Checkbox
                  onChange={() => {
                    handleCheckBoxId(expense.id);
                  }}
                  checked={deleteList.indexOf(expense.id) !== -1}
                />
              </TableCell>
              <TableCell component="th" scope="row" align="left">
                <Typography sx={styles.description}>
                  {expense.description}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="inherit">{`${expense.amount} PLN`}</Typography>
              </TableCell>
              <TableCell align="center">{expense.note}</TableCell>
              <TableCell align="center">
                {moment(expense.createdAt).format("MM/DD/YYYY")}
              </TableCell>
              <TableCell align="center">{expense.expenseType}</TableCell>
              <TableCell align="right" sx={{ paddingRight: "20px" }}>
                <Button sx={styles.button} variant="contained">
                  <EditExpenseModal expense={expense} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
