import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Line from "../lineChart/Line";

function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={{ lg: "row" , md: "column" }} my={2} gap={1}>
      <Paper sx={{ flexGrow: 4 }}>
        <Line isDashboard={true} />
      </Paper>

      <Box my={0} flexGrow={1}>
        <Paper>
          <Typography
            variant="h6"
            fontWeight="bold"
            p={1}
            color={theme.palette.secondary.main}
          >
            Paper Title
          </Typography>
        </Paper>

        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0.5,
            mt: 1,
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <div>
            <Typography fontWeight="bold">01gewdsd</Typography>
            <Typography variant="body2">jonde</Typography>
          </div>
          <div>01-09- 2023</div>
          <Button
            sx={{
              display: "inline",
              backgroundColor: "#df3000ff",
              color: "#fff",
            }}
            variant="contained"
          >
            $34.91
          </Button>
        </Paper>

        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0.5,
            flexGrow: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <div>
            <Typography fontWeight="bold">01gewdsd</Typography>
            <Typography variant="body2">jonde</Typography>
          </div>
          <div>01-09- 2023</div>
          <Button
            sx={{
              display: "inline",
              backgroundColor: "#df3000ff",
              color: "#fff",
            }}
            variant="contained"
          >
            $34.91
          </Button>
        </Paper>

        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0.5,
            mt: 1,
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <div>
            <Typography fontWeight="bold">01gewdsd</Typography>
            <Typography variant="body2">jonde</Typography>
          </div>
          <div>01-09- 2023</div>
          <Button
            sx={{
              display: "inline",
              backgroundColor: "#df3000ff",
              color: "#fff",
            }}
            variant="contained"
          >
            $34.91
          </Button>
        </Paper>

        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0.5,
            mt: 1,
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <div>
            <Typography fontWeight="bold">01gewdsd</Typography>
            <Typography variant="body2">jonde</Typography>
          </div>
          <div>01-09- 2023</div>
          <Button
            sx={{
              display: "inline",
              backgroundColor: "#df3000ff",
              color: "#fff",
            }}
            variant="contained"
          >
            $34.91
          </Button>
        </Paper>

        <Paper
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0.5,
            mt: 1,
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <div>
            <Typography fontWeight="bold">01gewdsd</Typography>
            <Typography variant="body2">jonde</Typography>
          </div>
          <div>01-09- 2023</div>
          <Button
            sx={{
              display: "inline",
              backgroundColor: "#df3000ff",
              color: "#fff",
            }}
            variant="contained"
          >
            $34.91
          </Button>
        </Paper>

      </Box>
    </Stack>
  );
}

export default Row2;
