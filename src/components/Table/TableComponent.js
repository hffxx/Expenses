import React from "react";
import { Paper, TableContainer, Table } from "@mui/material";
import TableHeader from "./TableHeader";
import TableBodyComponent from "./TableBodyComponent";
const styles = {
  table: {
    borderRadius: "10px",
  },
};

function TableComponent() {
  return (
    <TableContainer component={Paper} sx={styles.table} elevation={4}>
      <Table sx={{ minWidth: 500 }}>
        <TableHeader />
        <TableBodyComponent />
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
