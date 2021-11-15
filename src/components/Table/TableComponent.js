import React, { useState } from "react";
import { Paper, TableContainer, Table } from "@mui/material";
import TableHeaderComponent from "./TableHeaderComponent";
import TableBodyComponent from "./TableBodyComponent";
import TablePaginationComponent from "./TablePaginationComponent";
import { useSelector } from "react-redux";
import getVisibleExpenses from "../../redux/selectors/expenses";
const styles = {
  table: {
    borderRadius: "10px",
  },
};

function TableComponent() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0);
  };
  const rows = useSelector((state) =>
    getVisibleExpenses(state.expenses.present, state.filters)
  );
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const props = {
    page,
    setPage,
    rowsPerPage,
    handleChangeRowsPerPage,
    emptyRows,
    rows,
  };
  return (
    <TableContainer component={Paper} sx={styles.table} elevation={4}>
      <Table sx={{ minWidth: 500 }}>
        <TableHeaderComponent />
        <TableBodyComponent {...props} />
      </Table>
      <TablePaginationComponent {...props} />
    </TableContainer>
  );
}

export default TableComponent;
