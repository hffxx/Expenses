import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Paper,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Checkbox,
  Box,
} from "@mui/material";
import {
  addToDeleteListById,
  removeFromDeleteListById,
} from "../redux/actions/deleteListActions";
import getVisibleExpenses from "../redux/selectors/expenses";
import TableHeader from "./Table/TableHeader";
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
  buttons: {
    display: "flex",
  },
};

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
        <TableHeader />
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
                <Box sx={styles.buttons}>
                  <EditButton expense={expense} />
                  <DeleteButtonTable id={expense.id} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
