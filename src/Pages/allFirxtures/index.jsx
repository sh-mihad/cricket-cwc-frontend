import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosGet from "../../common/helper/useAxiosGet";
import FixtureItem from "./fixtureItem";

export default function AllFixtures() {
  const [fixtures, getFixtures] = useAxiosGet();
  const navigate = useNavigate();

  useEffect(() => {
    getFixtures(`http://localhost:5000/upcoming-matchSaccule`);
  }, []);

  return (
    <Box sx={{ color: "white", margin: "20px" }}>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Upcoming Fixtures
      </Typography>
      <Button sx={{borderColor:"white",color:"white"}} onClick={()=>{navigate('/all-fixture/add')}} variant="outlined">
        Add Match
      </Button>
      </Box>
      <Divider sx={{ backgroundColor: "gray", margin: "10px 0px" }} />
      <Box>
        {fixtures
          ?.sort(
            (a, b) =>
              a.name.split(",")[1].split(" ")[1].split("th")[0] -
              b.name.split(",")[1].split(" ")[1].split("th")[0]
          )
          .map((item) => (
            <FixtureItem
              id={item?._id}
              key={Math.random()}
              matchType={item?.matchType}
              matchDate={item?.date}
              matchTime={item?.dateTimeGMT}
              teamOne={item?.teamInfo[0]?.shortname}
              teamOneFlag={item?.teamInfo[0]?.img}
              teamTwo={item?.teamInfo[1]?.shortname}
              teamTwoFlag={item?.teamInfo[1]?.img}
              matchNo={item?.name}
              matchName={item?.name}
              venue={item?.venue}
              item={item}
            />
          ))}
      </Box>
    </Box>
  );
}
