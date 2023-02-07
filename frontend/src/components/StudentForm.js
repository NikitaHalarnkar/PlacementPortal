import React from 'react';
import { AppBar, Button, Toolbar, Typography,Tabs,Tab, Container, Table } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";
import history from "../history";
//import { margin } from '@mui/system';

const StudentForm = () => {
    
    const onLogout=()=>{
        history.push("/login")

    }
    
    return (
        <Container>
            <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h5">
                    Student Home
                </Typography>
                <SchoolIcon/>
                <Tabs textColor="inherit">
                    <Tab to="/StudentForm" LinkComponent={Link} label="Your Details"></Tab>
                </Tabs>
                <Button sx={{marginLeft:"auto"}} variant="contained" onClick={onLogout}>Logout</Button>
            </Toolbar>
            
        </AppBar>

        <Table responsive>
            <thead>
                <tr>
                    <label>PRN *:</label><input type="text" name="prn"/>
                </tr>
            </thead>

        </Table>


        </Container>
        
        
    )
}

export default StudentForm