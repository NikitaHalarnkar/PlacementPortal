import React from 'react';
import { AppBar, Button, Toolbar, Typography,Tabs,Tab, Container, Table, TableHead, TableRow, TableCell, TextField,  InputLabel, TextareaAutosize, Select, MenuItem } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from "react-router-dom";
// import { margin } from "@mui/system";
import history from "../history";
import axios from 'axios';

class StudentDetails extends React.Component {

    constructor(props){
        super(props);
        this.state={
            prn:"",
            rollno:"",
            division:"",
            phoneNo:"",
            FirstN:"",
            LastN:"",
            tempAddr:"",
            admYear:"",
            ugpointer:"",
            ugper:"",
            mcapointer:"",
            tenthScore:"",
            twelveScore:"",
            email:"",
            persEmail:""
        }
    }

     onLogout=()=>{
        history.push("/login")

    }

    

//     const userLocal=JSON.parse(localStorage.getItem('user'));
//     console.log(userLocal["email"])
// // eslint-disable-next-line
//     const userEmail=userLocal["email"]
// eslint-disable-next-line

    
handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})}
    // const handleChange=e=>{
    //     const{name,value}=e.target
    //     setValue({
    //         ...value,
    //         [name]:value,
    //     })

    // }

    //const[selectedDate,setSelectedDate]=useState(new Date());

    //const handleDateChange=(date)=>{setSelectedDate(date)}

     handleSubmit=async(event)=>{
        event.preventDefault()

        const{prn,rollno,division,phoneNo,FirstN,LastN,tempAddr,admYear,ugpointer,ugper,mcapointer,tenthScore,twelveScore,email,persEmail}=this.state
        // axios({
        //     method:"post",
        //     url:"http://localhost:5000/student/fillDetails",
        //     data: JSON.stringify(value),
        //     headers:{"Accept":"application/json","Content-type":"application/json"},
        // })
        // .then((res)=>{
        //     console.log(res)
        // })
        // .catch((err)=>{if(err.res)console.log(err)})
        //  const headers={headers: {
        //     "Accept":"application/json",
        //      'Content-Type': 'application/json',
        //    }};

        //    const body=JSON.stringify({
        //      prn:value.prn,
        //      rollno:value.rollno,
        //      phoneNo:value.phoneNo,
        //      FirstN:value.FirstN,
        //      LastN:value.LastN,
        //      tempAddr:value.tempAddr,
        //      ugpointer:value.ugpointer,
        //      ugper:value.ugper,
        //      mcapointer:value.mcapointer,
        //      tenthScore:value.tenthScore,
        //      twelveScore:value.twelveScore,
        //      email:value.email,
        //      persEmail:value.persEmail

        //  })

         axios.post("http://localhost:5000/student/fillDetails",{
            prn:prn,
            rollno:rollno,
            division:division,
            phoneNo:phoneNo,
            FirstN:FirstN,
            LastN:LastN,
            tempAddr:tempAddr,
            admYear:admYear,
            ugpointer:ugpointer,
            ugper:ugper,
            mcapointer:mcapointer,
            tenthScore:tenthScore,
            twelveScore:twelveScore,
            email:email,
            persEmail:persEmail
         }).then(res=>{
            
             alert(res.data.message)
            
             //updateUser(res.data.User)
             history.push("/StudentDetails")
            
         })
         .catch((err)=>{if(err.res)console.log(err)})
    }

//    const handleDivChange=e=>{setValue(e.target.value);}

    //const handleAdmYrChange=e=>{setValue(e.target.value);}
    render(){
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
                    </Tabs>
                    <Button sx={{marginLeft:"auto"}} variant="contained" onClick={this.onLogout}>Logout</Button>
                </Toolbar>
                
            </AppBar>
    
    <Table style={{marginTop:"50px"}}>
        <TableHead><h3>Student Details</h3>
            <TableRow>
                    <TableCell><label>PRN No*:</label><TextField variant='outlined' type="text" name="prn" value={this.state.prn} onChange={this.handleChange}/></TableCell>
                    <TableCell><label>Roll No.*:</label><TextField variant='outlined' type="text" name="rollno" value={this.state.rollno} onChange={this.handleChange}  /></TableCell>
                    <TableCell>
                       <InputLabel>Division*</InputLabel> <Select id="division" value={this.state.division} label="Division" name="division" onChange={this.handleChange}>
                            <MenuItem value={"shift1"}>Shift I</MenuItem>
                            <MenuItem value={"shift2"}>Shift II</MenuItem>
                            </Select>
                            </TableCell>
                    <TableCell><label>Phone No.*:</label><TextField  variant='outlined' type="text" name="phoneNo" value={this.state.phoneNo} onChange={this.handleChange} /></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><label>First Name*:</label><TextField  variant="outlined" type="text" name="FirstN" value={this.state.FirstN} onChange={this.handleChange}></TextField></TableCell>
                <TableCell><label>Last Name*:</label><TextField  variant="outlined" type="text" name="LastN" value={this.state.LastN} onChange={this.handleChange}></TextField></TableCell>
                <TableCell><InputLabel>Temporary Address*</InputLabel><TextareaAutosize name="tempAddr" placeholder='Temporary Address' minRows={4} value={this.state.tempAddr} onChange={this.handleChange}></TextareaAutosize></TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                       <InputLabel>Admission Year*</InputLabel> <Select id="admYear" value={this.state.admYear} label="Admission Year" name="admYear" onChange={this.handleChange}>
                            <MenuItem value={"2019"}>2019</MenuItem>
                            <MenuItem value={"2020"}>2020</MenuItem>
                            </Select>
                            </TableCell>
                            <TableCell><label>UG CGPI Pointer*:</label><TextField  variant="outlined" type="text" name="ugpointer" value={this.state.ugpointer} onChange={this.handleChange}></TextField></TableCell>
                            <TableCell><label>UG Percentage*:</label><TextField  variant="outlined" type="text" name="ugper" value={this.state.ugper} onChange={this.handleChange}></TextField></TableCell>
                            <TableCell><label>MCA SGPI Pointer*:</label><TextField  variant="outlined" type="text" name="mcapointer" value={this.state.mcapointer} onChange={this.handleChange}></TextField></TableCell>
    
    
            </TableRow>
            <TableRow>
            <TableCell><label>Tenth Score*:</label><TextField  variant="outlined" type="text" name="tenthScore" value={this.state.tenthScore} onChange={this.handleChange}></TextField></TableCell>
            <TableCell><label>Twelveth Score*:</label><TextField  variant="outlined" type="text" name="twelveScore" value={this.state.twelveScore} onChange={this.handleChange}></TextField></TableCell>
            <TableCell><label>Email*:</label><TextField  variant='outlined' type="email" name="email" value={this.state.email} onChange={this.handleChange}></TextField></TableCell>
            <TableCell><label>Personal Email*:</label><TextField  variant='outlined' type="email" name="persEmail" value={this.state.persEmail} onChange={this.handleChange}></TextField></TableCell>
    
            </TableRow>
            <div style={{marginLeft:"auto",marginRight:"auto",alignItems:"center"}}>        <Button variant="outlined" onClick={this.handleSubmit}>Submit</Button>
    </div>
        </TableHead>
    </Table>
    
            </Container>
            
            
        )
    }
    
}

export default StudentDetails