import Box from "@mui/material/Box";
import React from "react";
import Divider from "@mui/material/Divider";
import {Typography } from "@mui/material";

const Footer = () => {
    return ( 
        <Box>
            <Divider></Divider>
            <Box component={"div"} sx={{display : "flex", flexDireciton : "row", justifyContent : "space-between", alignItems : "center", height : "10rem", paddingX : "2rem"}}>
                <Box>
                    <Typography variant={"h5"}>© 2022 3l2o2o, Pécs</Typography>
                    <Typography variant={"h5"}>Petőfi Sándor utca 70</Typography>
                
                </Box>
                <Box sx={{ display : "flex", justifyContent : "space-between", alignItems: "center", width : "15rem" }}>
                    <Typography variant={"h5"}>(+36)202843596</Typography>
                </Box>
            </Box>
        </Box>
     );
}
 
export default Footer;