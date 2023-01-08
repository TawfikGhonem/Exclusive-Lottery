import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import execlusive from "../../images/execlusive.png";
import { Link } from "@mui/material";
import "./styles.css";

const Home = () => {
    return ( 
        <div className="home" style={{height : "90vh"}} id="home">
            <Box sx={{display : "flex", flexDirection : "row", justifyContent : "center", alignItems : "center", height: "100%", paddingBottom: "10px"}}>
                <Box sx={{display : "flex", flexDirection : "column", marginLeft: "3rem"}}>
                    <Typography sx={{color: "#FFFFFF"}} variant="h3">WELCOME TO EXECLUSIVE LOTTERY</Typography>
                    <Typography sx={{color: "#FFFFFF", fontWeight: "600"}} variant="h2">Best Lottery Site</Typography>
                    <Typography sx={{color: "#FFFFFF", fontWeight: "400"}} variant="h3">All Kind of Lottery</Typography>
                    <Typography sx={{color: "#FFFFFF", fontWeight: "400"}} variant="h3">Offering Lottery tickets WorldWide</Typography>
                </Box>
                <Box>
                <img src={execlusive} alt="home" width="500px" height="400px"></img>
                </Box>
            </Box>
        </div>
     );
}
 
export default Home;
