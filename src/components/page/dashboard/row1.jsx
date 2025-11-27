import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Stack } from "@mui/material";
import { data1, data2, data3, data4 } from "./data";
function Row1() {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={2}
      mt={3}
      justifyContent={{ xs: "center", md: "flex-start", lg: "space-between" }}
    >
      <Card
        icon={<EmailIcon />}
        number={12623}
        title="Total Emails"
        data={data1}
        number2={"+21%"}
      />

      <Card
        icon={<PointOfSaleIcon />}
        number={12623}
        title="Total Emails"
        data={data2}
        number2={"+21%"}
      />

      <Card
        icon={<PersonAddIcon />}
        number={12623}
        title="Total Emails"
        data={data3}
        number2={"+21%"}
      />

      <Card
        icon={<TrafficIcon />}
        number={12623}
        title="Total Emails"
        data={data4}
        number2={"+21%"}
      />
    </Stack>
  );
}

export default Row1;
