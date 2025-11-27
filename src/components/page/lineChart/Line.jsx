import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import React from "react";
const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 281,
      },
      {
        x: "helicopter",
        y: 154,
      },
      {
        x: "boat",
        y: 117,
      },
      {
        x: "train",
        y: 207,
      },
      {
        x: "subway",
        y: 73,
      },
      {
        x: "bus",
        y: 139,
      },
      {
        x: "car",
        y: 73,
      },
      {
        x: "moto",
        y: 125,
      },
      {
        x: "bicycle",
        y: 200,
      },
      {
        x: "horse",
        y: 293,
      },
      {
        x: "skateboard",
        y: 31,
      },
      {
        x: "others",
        y: 121,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 48,
      },
      {
        x: "helicopter",
        y: 213,
      },
      {
        x: "boat",
        y: 162,
      },
      {
        x: "train",
        y: 147,
      },
      {
        x: "subway",
        y: 281,
      },
      {
        x: "bus",
        y: 176,
      },
      {
        x: "car",
        y: 129,
      },
      {
        x: "moto",
        y: 86,
      },
      {
        x: "bicycle",
        y: 195,
      },
      {
        x: "horse",
        y: 284,
      },
      {
        x: "skateboard",
        y: 54,
      },
      {
        x: "others",
        y: 111,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 224,
      },
      {
        x: "helicopter",
        y: 231,
      },
      {
        x: "boat",
        y: 72,
      },
      {
        x: "train",
        y: 33,
      },
      {
        x: "subway",
        y: 260,
      },
      {
        x: "bus",
        y: 53,
      },
      {
        x: "car",
        y: 77,
      },
      {
        x: "moto",
        y: 97,
      },
      {
        x: "bicycle",
        y: 246,
      },
      {
        x: "horse",
        y: 263,
      },
      {
        x: "skateboard",
        y: 97,
      },
      {
        x: "others",
        y: 171,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 168,
      },
      {
        x: "helicopter",
        y: 279,
      },
      {
        x: "boat",
        y: 291,
      },
      {
        x: "train",
        y: 114,
      },
      {
        x: "subway",
        y: 254,
      },
      {
        x: "bus",
        y: 280,
      },
      {
        x: "car",
        y: 63,
      },
      {
        x: "moto",
        y: 59,
      },
      {
        x: "bicycle",
        y: 60,
      },
      {
        x: "horse",
        y: 121,
      },
      {
        x: "skateboard",
        y: 79,
      },
      {
        x: "others",
        y: 233,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 26,
      },
      {
        x: "helicopter",
        y: 238,
      },
      {
        x: "boat",
        y: 229,
      },
      {
        x: "train",
        y: 71,
      },
      {
        x: "subway",
        y: 140,
      },
      {
        x: "bus",
        y: 55,
      },
      {
        x: "car",
        y: 140,
      },
      {
        x: "moto",
        y: 138,
      },
      {
        x: "bicycle",
        y: 3,
      },
      {
        x: "horse",
        y: 48,
      },
      {
        x: "skateboard",
        y: 32,
      },
      {
        x: "others",
        y: 130,
      },
    ],
  },
];
function Line({ isDashboard = false }) {
  const theme = useTheme();
  return (
    <Box height={isDashboard ? "400px" : "75vh"}>
      <ResponsiveLine /* or Line for fixed dimensions */
        enableGridX={false}
        enableGridY={false}
        data={data}
        theme={{
          // background: theme.palette.text.primary,
          text: {
            fontSize: 11,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: theme.palette.text.primary,
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: theme.palette.text.primary,
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: "#333333",
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
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            link: {
              stroke: theme.palette.text.primary,
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#df0c0cff",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            symbol: {
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
          },
          tooltip: {
            // wrapper: {},
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisBottom={{ legend: "transportation", legendOffset: 36 }}
        axisLeft={{ legend: "count", legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
}

export default Line;
