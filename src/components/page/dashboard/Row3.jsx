import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
import Bar from "../barChart/Bar";
import Geo from "../geography/geo";
const data = [
  {
    id: "stylus",
    label: "stylus",
    value: 164,
    color: "hsl(339, 70%, 50%)",
  },
  {
    id: "lisp1",
    label: "lisp1",
    value: 88,
    color: "hsla(176, 85%, 48%, 1.00)",
  },
  {
    id: "lisp",
    label:  "lisp",
    value: 88,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "stylus1",
    label: "stylus1",
    value: 164,
    color: "hsla(339, 93%, 47%, 1.00)",
  },
];
function Row3() {
  const theme = useTheme();
  return (
    <Stack direction="row" gap={1} flexWrap="wrap" justifyContent="center">
      <Paper sx={{ minWidth: 460, height: 400, padding: 2 , width: { xs: '100%', lg: 460 } }}>
        <Typography color={theme.palette.secondary.main} fontSize={20}>
          {" "}
          Campaign{" "}
        </Typography>
        <ResponsivePie /* or Pie for fixed dimensions */
          data={data}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          theme={{
            // "background": theme.palette.text.primary,
            text: {
              fontSize: 11,
              fill: "#e30707ff",
              outlineWidth: 0,
              outlineColor: theme.palette.text.primary,
            },
            axis: {
              domain: {
                line: {
                  stroke: "#f20f0fff",
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: "#ec1414ff",
                  outlineWidth: 0,
                  outlineColor: theme.palette.text.primary,
                },
              },
              ticks: {
                line: {
                  stroke: "#d91111ff",
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: "#e52020ff",
                  outlineWidth: 0,
                  outlineColor: theme.palette.text.primary,
                },
              },
            },
            grid: {
              line: {
                stroke: "#d21313ff",
                strokeWidth: 1,
              },
            },
            legends: {
              title: {
                text: {
                  fontSize: 11,
                  fill: "#f11b1bff",
                  outlineWidth: 0,
                  outlineColor: theme.palette.text.primary,
                },
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: theme.palette.text.primary,
              },
              ticks: {
                line: {},
                text: {
                  fontSize: 10,
                  fill: "#e20d0dff",
                  outlineWidth: 0,
                  outlineColor: theme.palette.text.primary,
                },
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                fill: "#ff0000ff",
                outlineWidth: 2,
                outlineColor: theme.palette.text.primary,
                outlineOpacity: 1,
              },
              link: {
                stroke: "#d81111ff",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: theme.palette.text.primary,
                outlineOpacity: 1,
              },
              outline: {
                stroke: "#d80505ff",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: theme.palette.text.primary,
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#e40c0cff",
                outlineWidth: 2,
                outlineColor: theme.palette.text.primary,
                outlineOpacity: 1,
              },
            },
            tooltip: {
              // "wrapper": {},
              container: {
                background: theme.palette.background.paper,
                color: theme.palette.text.primary,
                fontSize: 12,
              },
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme.palette.text.primary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              symbolShape: "circle",
            },
          ]}
        />
      </Paper>

      <Paper sx={{ minWidth: 460, height: 400, padding: 2 , width: { xs: '100%', lg: 460 } }}>
        <Typography color={theme.palette.secondary.main} fontSize={20}>
          {" "}
          Campaign{" "}
        </Typography>
      <Bar isDashboard={true}/>
      </Paper>

      <Paper sx={{ minWidth: 460, height: 400, padding: 2 , width: { xs: '100%', lg: 460 } }}>
        <Typography color={theme.palette.secondary.main} fontSize={20}>
          {" "}
          Campaign{" "}
        </Typography>
       <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
}

export default Row3;
