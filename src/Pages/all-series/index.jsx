/* eslint-disable react/no-unescaped-entities */
import { Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosGet from "../../common/helper/useAxiosGet";

export default function AllSeries() {
    const [rowData,getRowData] =useAxiosGet()
    const navigate = useNavigate()

    const handleRowHandler =(id)=>{
    navigate(`/all-series/${id}`)
    }
    
    useEffect(()=>{
        getRowData(`https://api.cricapi.com/v1/series?apikey=cd5cf8cf-7f19-4049-b01b-6ebc10f630db&offset=0`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
   <Box sx={{ color: "white", margin: "20px" }}>
     <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        All Series's
      </Typography>
      <Divider sx={{ backgroundColor: "gray", margin:"10px 0px"}} />

      <TableContainer sx={{color:"white"}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{color:"white"}}>
            <TableCell sx={{color:"white",fontWeight:"bold"}}>Series Name</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="right">Start Date</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}}  align="right">End Date</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="right">odi</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="right">t20</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="right">test</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="right">Total Matches</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData?.data?.map((row) => (
            <TableRow
              key={Math?.random()*100}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              hover={true}
              selected={true}
              onClick={()=>{
                // console.log("hello");
                handleRowHandler(row?.id)
              }}
            >
              <TableCell sx={{color:"white"}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{color:"white"}} align="right">{row?.startDate}</TableCell>
              <TableCell sx={{color:"white"}} align="right">{row.endDate}</TableCell>
              <TableCell sx={{color:"white"}} align="right">{row.odi}</TableCell>
              <TableCell sx={{color:"white"}} align="right">{row.t20}</TableCell>
              <TableCell sx={{color:"white"}} align="right">{row.test}</TableCell>
              <TableCell sx={{color:"white"}} align="right">{row.matches}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Box>
  )
}
