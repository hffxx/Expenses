import React from "react";
import { Paper, TablePagination } from "@mui/material";

function TablePaginationComponent({
  rows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  console.log();
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component={Paper}
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    ></TablePagination>
  );
}

export default TablePaginationComponent;
