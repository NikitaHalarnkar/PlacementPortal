import React from "react";
import { AppBar, Button, Toolbar, Typography,Tabs,Tab } from "@mui/material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from "react-router-dom";
import history from "../history";

const AdminHomepage=()=>{
    const onLogout=()=>{
        history.push("/AdminLogin")
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h5">
                    Admin Home
                </Typography>
                <SupervisorAccountIcon/>
                <Tabs textColor="inherit">
                    <Tab to="/AdminPostNews" LinkComponent={Link} label="Post News"></Tab>
                    <Tab to="/ViewStudents" LinkComponent={Link} label="Student Data"></Tab>
                </Tabs>
                {/* <NavLink to="/studentPersonalDetails">
                    Personal Details
                </NavLink> */}
                {/* <Typography sx={{textDecoration:"none", ml:"15px"}} variant="h6" component={Link}>Personal Details<Link to="/studentPersonalDetails"onClick={()=>history.push("/studentPersonalDetails")}></Link></Typography> */}
                <Button sx={{marginLeft:"auto"}} variant="contained" onClick={onLogout}>Logout</Button>
            </Toolbar>

        </AppBar>
    )
}

export default AdminHomepage