import React from "react";
import { AppBar, Button, Toolbar, Typography,Tabs,Tab, Container, TextField } from "@mui/material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from "react-router-dom";
import axios from "axios";
import history from "../history";

class AdminPostNews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            postTitle:"",
        companyName:"",
        companyDesc:""
        }
    }
    
    onLogout=()=>{
        history.push("/AdminLogin")

    }

//     const[value,setValue]=useState({
//         postTitle:"",
//         companyName:"",
//         companyDesc:""
// })

 handleChange=e=>{
    this.setState({[e.target.name]:e.target.value})}

     handleSubmit=async(event)=>{
        event.preventDefault()

        const{postTitle,companyName,companyDesc}=this.state

        // const headers={headers: {
        //     "Accept":"application/json",
        //      'Content-Type': 'application/json',
        //    }};

        //    const body=JSON.stringify({
        //     postTitle:value.postTitle,
        //     companyName:value.companyName,
        //     companyDesc:value.companyDesc,
        //  })

         axios.post("http://localhost:5000/admin/AdminPost",{
            postTitle:postTitle,
            companyName:companyName,
            companyDesc:companyDesc
         }).then(res=>{
            
             alert(res.data.message)
            
             //updateUser(res.data.User)
             history.push("/AdminPostNews")
            
         })
         .catch((err)=>{if(err.res)console.log(err)})
    }

    render(){
        return (
            <Container>
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
                    <Button sx={{marginLeft:"auto"}} variant="contained" onClick={this.onLogout}>Logout</Button>
                </Toolbar>
    
            </AppBar>
            <form onSubmit={this.handleSubmit}>
            <h3>Post Company Details</h3>

            <TextField style={{paddingBottom:"5px", width:"100%"}} label="Post Title*:" variant="outlined" type="text" name="postTitle" value={this.state.postTitle} onChange={this.handleChange} ></TextField><br/>
            <TextField style={{paddingBottom:"5px", width:"100%"}} label="Company Name*:" variant="outlined" type="text" name="companyName" value={this.state.companyName} onChange={this.handleChange} ></TextField><br/>
            <TextField style={{paddingBottom:"5px", width:"100%"}} label="Description*:" variant="outlined" type="text" name="companyDesc" value={this.state.companyDesc} onChange={this.handleChange} ></TextField><br/>

            <Button variant="contained" type="submit">Submit</Button>
            {/* <label>Post Title*:</label><input type="text" name="postTitle" value={this.state.postTitle} onChange={this.handleChange}/>

            <label>Company Name*:</label><input type="text" name="companyName" value={this.state.companyName} onChange={this.handleChange}/>

            <label>Description*:</label><input type="textarea" name="companyDesc" placeholder='Description' value={this.state.companyDesc} onChange={this.handleChange}/> */}

             {/* <input style={{}} type="submit" value="submit"/> */}
 
            </form>
            
            </Container>
            
        )
    
    }
    
}

export default AdminPostNews