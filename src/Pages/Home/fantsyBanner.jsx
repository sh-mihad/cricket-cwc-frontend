import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function FantsyBanner() {
  return (
    <Box sx={{backgroundColor:"#6631e1",marginTop:"20px",display:"flex",alignItems:"center", gap:"20px"}}>
        <img src="https://wordpresscdn.winzogames.com/prod/blog/wp-content/uploads/2022/05/03074225/FANTASY-CRICKET.jpg" alt="" />
        <Box>
            <Typography variant="h3" sx={{fontWeight:"bold"}}>IPL</Typography>
            <Typography variant="h4" sx={{fontWeight:"bold",margin:"10px 0px"}}>Indian Premier League-2022</Typography>
            <Typography variant="h5" sx={{fontWeight:"bold"}}>Click view for see Fixture</Typography>
            <Button sx={{marginTop:"10px",backgroundColor:"#896cce",color:"white"}}>View</Button>
        </Box>
    </Box>
  )
}
