import React from "react";
import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

function Card({ icon, number, title, data, number2 }) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        flexGrow: 1,
        width: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
      }}
    >
      <Stack>
        <p style={{ margin: 0, color: theme.palette.secondary.dark }}>{icon}</p>

        <Typography variant="body1" fontSize={15} marginY={0.7}>
          {number}
        </Typography>

        <Typography variant="body1" fontSize={15}>
          {title}
        </Typography>
      </Stack>

      <Stack alignItems="center" marginBottom={3}>
        <Box sx={{ height: 100, width: 100 }}>
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 25, right: 80, bottom: 0, left: 80 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            enableArcLabels={false}
            enableArcLinkLabels={false}
          />
        </Box>

        <Typography variant="body1">{number2}</Typography>
      </Stack>
    </Paper>
  );
}

export default Card;
