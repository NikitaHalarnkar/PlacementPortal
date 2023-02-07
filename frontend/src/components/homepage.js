import React from "react";
import { AppBar, Button, Toolbar, Typography,Tabs,Tab, Container } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";
// import { margin } from "@mui/system";
import history from "../history";
// import { useState } from "react";

const Homepage = () => {

    
    // const userLocal=JSON.parse(localStorage.getItem('user'))

    const onLogout=()=>{
        localStorage.removeItem('user')
        history.push("/login")

        
    }

    //const user=JSON.parse(localStorage.getItem('user'))

    return (
        <Container>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h5">
                    Student Home
                </Typography>
                <SchoolIcon/>
                <Tabs textColor="inherit">
                    <Tab to="/StudentDetails" LinkComponent={Link} label="Your Details"></Tab>
                    <Tab to="/ApplyCompany" LinkComponent={Link} label="Apply for Company"></Tab>
                    <Tab to="/ViewNews" LinkComponent={Link} label="View Posts"></Tab>

                    {/* <Tab label="College Details"></Tab>
                    <Tab label="Academic Details"></Tab> */}
                </Tabs>
                {/* <NavLink to="/studentPersonalDetails">
                    Personal Details
                </NavLink> */}
                {/* <Typography sx={{textDecoration:"none", ml:"15px"}} variant="h6" component={Link}>Personal Details<Link to="/studentPersonalDetails"onClick={()=>history.push("/studentPersonalDetails")}></Link></Typography> */}
                <Button sx={{marginLeft:"auto"}} variant="contained" onClick={onLogout}>Logout</Button>
            </Toolbar>

        </AppBar>
        </Container>
    )
}

export default Homepage