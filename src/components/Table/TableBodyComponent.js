import React, { useRef } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDeleteListById,
  removeFromDeleteListById,
} from "../../redux/actions/deleteListActions";
import {
  Typography,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Box,
  Fade,
} from "@mui/material";
import getVisibleExpenses from "../../redux/selectors/expenses";
import DeleteButtonTable from "../Buttons/DeleteButtonTable";
import EditButton from "../Buttons/EditButton";
import { TransitionGroup } from "react-transition-group";

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

function TableBodyComponent({ page, rowsPerPage, emptyRows }) {
  const containerRef = useRef(null);

  const dispatch = useDispatch();

  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );

  const deleteList = useSelector((state) => state.deleteList);

  const handleCheckBoxId = (id) => {
    if (deleteList.indexOf(id) < 0) {
      dispatch(addToDeleteListById(id));
    } else {
      dispatch(removeFromDeleteListById(id));
    }
  };

  const isChecked = (id) => deleteList.indexOf(id) !== -1;

  return (
    <TableBody>
      <TransitionGroup component={null}>
        {visibleExpenses
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((expense) => (
            <Fade key={expense.id} in={expense.in}>
              <TableRow
                key={expense.id}
                sx={
                  isChecked(expense.id) && {
                    background: "rgba(63, 101, 191, 0.1)",
                  }
                }
              >
                <TableCell align="left">
                  <Checkbox
                    onChange={() => {
                      handleCheckBoxId(expense.id);
                    }}
                    checked={isChecked(expense.id)}
                  />
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  <Typography sx={styles.description}>
                    {expense.description}
                  </Typography>
                </TableCell>
                <TableCell
                  align="center"
                  sx={
                    expense.expenseType === "Bill"
                      ? { color: "red" }
                      : { color: "green" }
                  }
                >
                  <Typography variant="string">
                    {expense.expenseType === "Bill"
                      ? `- $${expense.amount}`
                      : `+ $${expense.amount}`}
                  </Typography>
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
            </Fade>
          ))}
      </TransitionGroup>
      {emptyRows > 0 && (
        <TableRow style={{ height: 75 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}

export default TableBodyComponent;
