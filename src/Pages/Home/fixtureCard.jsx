/* eslint-disable react/prop-types */
import SportsVolleyballRoundedIcon from "@mui/icons-material/SportsVolleyballRounded";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import { dateFormatterWithMonthName, timeFormatter } from "../../common/helper/dateFormatter";
import { matchNum } from "../../common/helper/matchInfo";

export default function FixtureCard({item}) {
  const {matchType,date,dateTimeGMT,teamInfo,name,venue} = item || {}
  console.log("item",item);
  return (
    <Card classes="card" sx={{}}>
      <CardContent sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 14, fontWeight: "bold" }} color="red">
            {matchType}
          </Typography>
          <Typography sx={{ fontSize: 12 }} color="gray">
           {`${dateFormatterWithMonthName(date)} , ${timeFormatter(dateTimeGMT)}`}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <img
            src={`${teamInfo[0]?.img}`}
            alt=""
            width="20px"
            height="20px"
          />
          <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>{teamInfo[0]?.shortname}</Typography>
        </Box>
        <Box sx={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <img
            src={`${teamInfo[1]?.img}`}
            alt=""
            width="20px"
            height="20px"
          />
          <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>{teamInfo[1]?.shortname}</Typography>
        </Box>
        <Divider sx={{ margin: "10px 0px" }} />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <SportsVolleyballRoundedIcon />
          <Typography sx={{fontSize:"14px"}}>{`${matchNum(name)}, ${venue}`}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
