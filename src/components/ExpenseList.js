import React from "react";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../redux/selectors/expenses";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import { Button, Typography } from "@mui/material";
import EditExpenseModal from "./EditExpenseModal";
import Checkbox from "@mui/material/Checkbox";

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

const ExpenseList = (props) => {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );

  let deleteList = props.deleteList;
  console.log(deleteList);
  const handleDeleteList = (id) => {
    if (deleteList.indexOf(id) > -1) {
      deleteList = deleteList.filter((deleteId) => deleteId !== id);
      console.log(deleteList);
    } else {
      deleteList = [...deleteList, id];
      console.log(deleteList);
    }
  };

  return (
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
                handleDeleteList(expense.id);
              }}
            />
          </TableCell>
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
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default ExpenseList;
