import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { rows } from "./data";
import { columns } from "./data";
import { GridToolbar } from "@mui/x-data-grid/internals";
function Contacts() {
  return (
    <div>
      <Box>
      {/* <Header title={"TEAM"} subTitle={"Managing the Team Members"} /> */}

      <Box sx={{ height: 600, mx: "auto", width: "95%" }}>
        <DataGrid
        slots={{
          toolbar:GridToolbar
        }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
    </div>
  )
}

export default Contacts