import React from "react";
import execlusive from "../../images/execlusive.png";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import "./styles.css";
import { Typography } from "@mui/material";

export default function About() {
    return (
        <div style={{ height : "90vh" }} id="about">
            <Divider sx={{"&::before, &::after": {borderColor: "blue"}}}><h2>About</h2></Divider>
            <Box sx={{ display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center", height : "90vh" }}>
            <Box component={"div"} sx={{ display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center", paddingX : "3rem", width : "90%", height: "90%" }} className="about">
                    <Box sx={{flex : 1}}>
                        <Typography variant={"vlottery"} sx={{ width : "55rem", fontSize: "30px" }}>The Exclusive Lottery is an independent agency of the Commonwealth of Exclusive. It was created in 1987 when Exclusivens voted in a statewide referendum in favor of a state lottery. The first ticket was sold on September 20, 1988.</Typography>
                    </Box>
                    <Box>
                        <img style={{ borderRadius : "50%" }} src={execlusive} alt="execlusivev" width="400" height="400"></img>
                    </Box>
                </Box>
           </Box>
        </div>
    )
}