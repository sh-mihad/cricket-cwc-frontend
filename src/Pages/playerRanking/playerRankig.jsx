import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAxiosGet from '../../common/helper/useAxiosGet'


export default function PlayerRankig() {
    const [palyers,getPlayers] = useAxiosGet()
    useEffect(()=>{
        getPlayers(`http://localhost:5000/top-batsmans`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
   <Box sx={{backgroundColor:"white"}}>
     <TableContainer>
      <Table >
        <TableHead >
          <TableRow>
            <TableCell sx={{color:"white"}}>Rank</TableCell>
            <TableCell sx={{color:"white"}} align="center">Player</TableCell>
            <TableCell  sx={{color:"white"}} align="center">Runs</TableCell>
            <TableCell sx={{color:"white"}} align="center">Average</TableCell>
            <TableCell sx={{color:"white"}} align="center">Strike Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {palyers.map((row) => (
            <TableRow
              key={Math?.random()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" scope="row">
                {row?.rank}
              </TableCell>
              <TableCell align="center">
              <Link to={`/top-players/${row?.player}`} state={row}>{row.player}</Link>
              </TableCell>
              <TableCell align="center">{row.runs}</TableCell>
              <TableCell align="center">{row.average}</TableCell>
              <TableCell align="center">{row.strike_rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Box>
  )
}
