import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "./Home/Home";
import Login from "./LoginAndRegister/Login/Login";
import Register from "./LoginAndRegister/Register/Register";
import AllSeries from "./all-series";
import SeriesSinglePage from "./all-series/singlePage";
import AllFixtures from "./allFirxtures";
import AddFixture from "./allFirxtures/addFixture";
import MatchDetails from "./allFirxtures/matchDetails";
import PlayerProfile from "./playerRanking/playerProfile";
import PlayerRankig from "./playerRanking/playerRankig";
import TeamTable from "./teamInformation";
import TeamProfile from "./teamInformation/teamProfile";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/all-series",
          element: <AllSeries/>,
        },
        {
          path: "/all-series/:id",
          element: <SeriesSinglePage/>,
        },
        {
          path: "/all-fixture",
          element: <AllFixtures/>,
        },
        {
          path: "/all-fixture/view-details/:id",
          element: <MatchDetails/>,
        },
        {
          path: "/all-fixture/add",
          element: <AddFixture/>,
        },
        {
          path: "/all-teams",
          element: <TeamTable/>,
        },
        {
          path: "/all-teams/:name",
          element: <TeamProfile/>,
        },
        {
          path: "/top-players",
          element: <PlayerRankig/>,
        },
        {
          path: "/top-players/:name",
          element: <PlayerProfile/>,
        },
      ]
    },
    
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

export default router