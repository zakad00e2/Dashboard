import { Button, Stack } from "@mui/material";
import Row1 from "./row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

function Dashboard() {
  return (
    <div>
      <div className="btn" style={{ textAlign: "right", marginTop: "20px" }}>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          Dashboard page
        </Button>
      </div>
      <Row1/>
      <Row2/>
      <Row3/>
    </div>
  );
}

export default Dashboard;
