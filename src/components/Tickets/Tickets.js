import React from "react";
import Cards from "../Cards/Cards";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import Ticket1 from "../../images/ticket1.png";
import Ticket2 from "../../images/ticket2.png";
import Ticket3 from "../../images/ticket3.png";

const Tickets = () => {
    return ( 
        <div style={{height : "90vh"}} id="Tickets">
        <Divider sx={{"&::before, &::after": {borderColor: "red"}}}><h2>Tickets</h2></Divider>
        <Box component={"div"} sx={{ height : "90%",display : "flex", justifyContent : "center", alignItems : "center" }} className="projects">
            <Box sx={{display : "flex", flexDirection : "column",justifyContent : "center", alignItems : "center"}}>
                <Grid container spacing={6}>
                    <Grid item xs={10} md={7} lg={4}><Cards image={Ticket1} text={"POWER BALL"} description={"Powerball is a drawing game in which players try to match five numbers from 1 through 69, plus a Powerball number from 1 through 26."}/></Grid>
                    <Grid item xs={10} md={7} lg={4}><Cards image={Ticket2} text={"MegaMillion"} description={"Mega Millions is a drawing game played in Virginia and most other U. S. states (Virginia is one of the original six states to first offer the game in 1996 when it was known as \"The Big Game\")"}/></Grid>
                    <Grid item xs={10} md={7} lg={4 }><Cards image={Ticket3} text={"Scratcher"} description={"From its inception, the Virginia Lottery has sold instant (scratcher) games. Originally, all scratch tickets were $1 each; in the mid-1990s"}/></Grid>
                </Grid>
            </Box>
        </Box>
        </div>
     );
}
 
export default Tickets;