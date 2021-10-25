import React from "react";
import { useSelector, useDispatch } from "react-redux";
import getVisibleExpenses from "../redux/selectors/expenses";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditExpenseModal from "./EditExpenseModal";
import { removeExpense } from "../redux/actions/expensesActions";
import { reset } from "../redux/actions/filterActions";

const styles = {
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
    fontWeight: "bold",
  },
};

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  const dispatch = useDispatch();
  return (
    <TableBody>
      {visibleExpenses.map((expense) => (
        <TableRow
          key={expense.id}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
        >
          <TableCell component="th" scope="row">
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
              {/* <DeleteIcon
                onClick={() => {
                  if (expenses.length === 1) {
                    dispatch(reset());
                    dispatch(removeExpense(expense.id));
                  } else {
                    dispatch(removeExpense(expense.id));
                  }
                }}
              /> */}
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default ExpenseList;
