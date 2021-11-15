import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { heads as columns } from "./config";

function Table() {
  const rows = [];

  return (
    <div className="App">
      <div style={{ height: "400px" }}>
        <DataGrid
          // sortModel={[
          //   {
          //     field: "id",
          //     sort: "asc",
          //   },
          // ]}
          pagination
          rows={rows}
          rowCount={100}
          paginationMode="client"
          columns={columns}
          pageSize={10}
          onPageChange={(params) => {
            console.log("===params===", params);
          }}
          loading={false}
        />
      </div>
    </div>
  );
}

export default Table;
