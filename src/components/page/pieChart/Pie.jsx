import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'

const data = [
  {
    "id": "stylus",
    "label": "stylus",
    "value": 164,
    "color": "hsl(339, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 88,
    "color": "hsl(31, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 560,
    "color": "hsl(63, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 114,
    "color": "hsl(315, 70%, 50%)"
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 553,
    "color": "hsl(355, 70%, 50%)"
  }
]
function Pie() {
    const theme = useTheme();
  return (
    <div>
         <Box height="75vh">
        <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        theme={{
    // "background": theme.palette.text.primary,
    "text": {
        "fontSize": 11,
        "fill": "#e30707ff",
        "outlineWidth": 0,
        "outlineColor": theme.palette.text.primary
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "#f20f0fff",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": "#ec1414ff",
                "outlineWidth": 0,
                "outlineColor": theme.palette.text.primary
            }
        },
        "ticks": {
            "line": {
                "stroke": "#d91111ff",
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": "#e52020ff",
                "outlineWidth": 0,
                "outlineColor": theme.palette.text.primary
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#d21313ff",
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": "#f11b1bff",
                "outlineWidth": 0,
                "outlineColor": theme.palette.text.primary
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": theme.palette.text.primary
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#e20d0dff",
                "outlineWidth": 0,
                "outlineColor": theme.palette.text.primary
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#ff0000ff",
            "outlineWidth": 2,
            "outlineColor": theme.palette.text.primary,
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#d81111ff",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": theme.palette.text.primary,
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#d80505ff",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": theme.palette.text.primary,
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#e40c0cff",
            "outlineWidth": 2,
            "outlineColor": theme.palette.text.primary,
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        // "wrapper": {},
        "container": {
            "background": theme.palette.background.paper,
            "color": theme.palette.text.primary,
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
    </div>
  )
}

export default Pie