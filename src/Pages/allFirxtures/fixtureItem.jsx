/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  dateFormatterWithMonthName,
  timeFormatter,
} from "../../common/helper/dateFormatter";
import { matchNum, seriesName } from "../../common/helper/matchInfo";

export default function FixtureItem({
  id,
  matchType,
  matchDate,
  matchTime,
  teamOne,
  teamOneFlag,
  teamTwo,
  teamTwoFlag,
  matchNo,
  matchName,
  venue,
  item
}) {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        margin: "15px 0px",
        padding: "10px",
        border: "1px solid gray",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          padding: "7px 15px",
          backgroundColor: `${
            matchType === "odi"
              ? "#16d9f9"
              : matchType === "t20"
              ? "#fa0ceb"
              : "#ff1e50"
          }`,
          color: "white",
          fontSize: "13px",
        }}
      >
        {matchType}
      </Typography>
      <Divider
        sx={{ backgroundColor: "gray" }}
        orientation="vertical"
        flexItem
      />
      {console.log(matchDate)}
      <Typography>{`${dateFormatterWithMonthName(matchDate)} ${timeFormatter(
        matchTime
      )}`}</Typography>
      <Divider
        sx={{ backgroundColor: "gray" }}
        orientation="vertical"
        flexItem
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
          flexGrow: 1,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {teamOne}
              </Typography>
              <img src={`${teamOneFlag}`} width="40px" height="30px" alt="" />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              VS
            </Typography>
            <img src={`${teamTwoFlag}`} width="40px" height="30px" alt="" />
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {teamTwo}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ margin: "10px " }}>
            {`${matchNum(matchNo)},${seriesName(matchName)},${venue}`}
          </Typography>
        </Box>
        <Button
          onClick={() => {
            navigate(`/all-fixture/view-details/${id}`,{ state: item})
          }}
          sx={{ borderColor: "white", color: "white" }}
          variant="outlined"
        >
          View Details
        </Button>
      </Box>
    </Box>
  );
}
