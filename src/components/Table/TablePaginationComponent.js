import React from "react";
import { Paper, TablePagination } from "@mui/material";

function TablePaginationComponent({
  rows,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component={Paper}
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    ></TablePagination>
  );
}

export default TablePaginationComponent;
