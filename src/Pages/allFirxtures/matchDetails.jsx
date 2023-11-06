import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MatchDetails() {
  const { state } = useLocation();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
//   console.log(state);
  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
        marginTop: "20px",
        color: "white",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ margin: "20px" }}>
        Cricket World Cup , 11 Nov 12:00 pm
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "15px 0px 30px 0",
        }}
      >
        <Box>
          <img
            src="https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_96x96.png"
            width="80px"
            height="60px"
            alt=""
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography>VS</Typography>
          <Typography>ODI 36 of 48</Typography>
        </Box>
        <Box>
          <img
            src="https://ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_96x96.png"
            width="80px"
            height="60px"
            alt=""
          />
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "white" }} />
      <Typography sx={{ margin: "10px 0px", textAlign: "center" }}>
        Score Card
      </Typography>

     
    </Box>
  );
}
