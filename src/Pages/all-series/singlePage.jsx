import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosGet from "../../common/helper/useAxiosGet";
import FixtureItem from "../allFirxtures/fixtureItem";

export default function SeriesSinglePage() {
  const {id} = useParams()
  const [data,getData] = useAxiosGet()

  useEffect(()=>{
    if(id){
      getData(`https://api.cricapi.com/v1/series_info?apikey=cd5cf8cf-7f19-4049-b01b-6ebc10f630db&offset=0&id=${id}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])
  return (
    <Box sx={{ color: "white", margin: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {data?.data?.info?.name}
      </Typography>
      <Divider sx={{ backgroundColor: "gray", margin: "10px 0px" }} />
      <Box>
        {data?.data?.matchList?.map((item) => (
          <FixtureItem
            key={Math.random() * 100}
            matchType={item?.matchType || ""}
            matchDate={item?.date || ""}
            matchTime={item?.dateTimeGMT || ""}
            teamOne={item?.teams[0] || ""}
            teamOneFlag={item?.teamInfo[0]?.img || ""}
            teamTwo={item?.teams[1] || ""}
            teamTwoFlag={item?.teamInfo[1]?.img || ""}
            matchNo={item?.name || ""}
            matchName={data?.data?.info?.name || ""}
            venue={item?.venue}
          />
        ))}
      </Box>
    </Box>
  );
}
