import {  AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import history from "../history";


import axios from "axios";
import {  useEffect, useState } from "react";

const ViewStudents=()=>{
    const[rowData,setRowData]=useState([]);

    useEffect(()=>{
            axios.get('http://localhost:5000/admin/matchStudent').then((res)=>{
                 setRowData(res.data);
             });
         },[]);

    const studentCols=[
        {field:"prn",headerName:"PRN No",width:100},
        {field:"name",headerName:"Name",width:100},
        {field:"rollno",headerName:"Roll No",width:100},
        {field:"division",headerName:"Division",width:100},
        {field:"phoneNo",headerName:"Phone No",width:100},
        {field:"FirstN",headerName:"First Name",width:100},
        {field:"LastN",headerName:"Last Name",width:100},
        {field:"tempAddr",headerName:"Temporary Address",width:300},
        {field:"admYear",headerName:"Admission Year",width:100},
        {field:"ugpointer",headerName:"UG CGPI",width:100},
        {field:"ugper",headerName:"UG Percentage",width:100},
        {field:"mcapointer",headerName:"MCA SGPI",width:100},
        {field:"tenthScore",headerName:"Tenth Score",width:100},
        {field:"twelveScore",headerName:"Twelveth Score",width:100},
        {field:"email",headerName:"Email",width:150},
        {field:"persEmail",headerName:"Personal Email",width:150},


    ];

    const onLogout=()=>{
            history.push("/login")
    }

    return(
        <>
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
                 <Button sx={{marginLeft:"auto"}} variant="contained" onClick={onLogout}>Logout</Button>
             </Toolbar>

         </AppBar>
        <DataGrid style={{marginTop:"150px"}} components={{Toolbar:GridToolbar}} columns={studentCols} rows={rowData} pageSize={10} getRowId={rowData=>rowData._id} checkboxSelection={true}>

        </DataGrid>
        </>

    );

}
export default ViewStudents