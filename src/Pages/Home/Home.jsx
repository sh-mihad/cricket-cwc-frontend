import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosGet from "../../common/helper/useAxiosGet";
import PlayerRankig from "../playerRanking/playerRankig";
import Blog from "./Blog";
import FantsyBanner from "./fantsyBanner";
import FixtureCard from "./fixtureCard";
export default function Home() {
  const [fixtures,getFixtures] =useAxiosGet()
  const navigate = useNavigate()

  useEffect(()=>{
    getFixtures(`http://localhost:5000/upcoming-matchSaccule`)
  },[])

  return (
    <>
      <Box sx={{ margin: "20px", color: "white" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component="h5">
            Fixture
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
            onClick={()=>{
              navigate("/all-fixture")
            }}
          >
            View All Fixture
          </Button>
        </Box>
        <Divider
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            backgroundColor: "white",
          }}
        />
        <Grid container spacing={2}>
          {fixtures?.length>0 && fixtures?.slice(0,3)?.map(item=>(
            <Grid key={Math?.random()*100} item xs={4}>
            <FixtureCard item={item} />
          </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ margin: "20px", color: "white" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" component="h5">
           Current Match Result
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            View All Match Result
          </Button>
        </Box>
        <Divider
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            backgroundColor: "white",
          }}
        />
         <Typography sx variant="h5" component="h5">
           Top Five Batsman
          </Typography>
          <Divider
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            backgroundColor: "white",
          }}
        />
        <PlayerRankig/>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* <FixtureCard /> */}
          </Grid>
          <Grid item xs={4}>
            {/* <FixtureCard /> */}
          </Grid>
          <Grid item xs={4}>
            {/* <FixtureCard /> */}
          </Grid>
        </Grid>
        <Box>
        <Grid sx={{marginTop:"20px"}} container spacing={2}>
          <Grid item xs={3}>
            <Blog />
          </Grid>
          <Grid item xs={3}>
            <Blog />
          </Grid>
          <Grid item xs={3}>
            <Blog />
          </Grid>
          <Grid item xs={3}>
            <Blog />
          </Grid>
          <Grid item xs={3}>
            <Blog />
          </Grid>
          <Grid item xs={3}>
            <Blog />
          </Grid>
          <Grid item xs={3}>
            <Blog />
          </Grid>
          <Grid item xs={3}>
            <Blog />
          </Grid>
        </Grid>
        </Box>
        <FantsyBanner/>
      </Box>
    </>
  );
}
