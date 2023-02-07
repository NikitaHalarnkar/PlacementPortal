import React,{useState, useEffect} from "react";
import { AppBar, Button, Toolbar, Typography,Tabs,Tab, Container, TextField, InputLabel } from "@mui/material";
import SchoolIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from "react-router-dom";
import axios from "axios";
import history from "../history";

const ApplyCompany=()=>{

    const onLogout=()=>{
              history.push("/login")}

              // eslint-disable-next-line
    const[email,setEmail]=useState({
        email:''
    })

    const[company,setCompany]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/student/getPost")
        .then((res)=>{
            setCompany(res.data)
        })
            },[])


    

// class ApplyCompany extends React.Component{

//     state={
//         email:"",
//         compName:[],
//         selectedCompany:""
//     }

//     componentDidMount(){
//         fetch("http://localhost:5000/student/getCompany")
//         .then((response)=>{
//             return response.json()
//         })
//         .then(data=>{
//             let compFromData=data.map((comp,key)=>{
//                 return{value:comp,display:comp}
//             })
//             this.setState({
//                 compName:[{value:'',display:'(Select company to apply)'}].concat(compFromData)
//             })
//         })
//         .catch(error=>{
//             console.log(error)
//         })
//     }
//     // constructor(props){
//     //     super(props);
//     //     this.state={
//     //         email:"",
//     //     companyName:""
//     //     }
//     // }

//     onLogout=()=>{
//         history.push("/login")

//     }

//     //  handleChange=e=>{
//     //      this.setState({[e.target.name]:e.target.value})}

         const handleSubmit=async(event)=>{
             event.preventDefault()
    
             const{email,companyName}=""
    
              axios.post("http://localhost:5000/student/ApplyNow",{
                 email:email,
                 companyName:companyName,
              }).then(res=>{
                
                  alert(res.data.message)
                
                  //updateUser(res.data.User)
                  history.push("/ApplyCompany")
                
              })
              .catch((err)=>{if(err.res)console.log(err)})
         }

//         render(){
//             const compName=this.state.compName.map((comp,key)=><option key={comp.value} value={comp.value}>{comp.display}</option>)
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
                        <Tab to="/ViewPost" LinkComponent={Link} label="View Posts"></Tab>
                    </Tabs>
                    <Button sx={{marginLeft:"auto"}} variant="contained" onClick={onLogout}>Logout</Button>
                </Toolbar>
                
            </AppBar>
                 <form onSubmit={handleSubmit}>
                <h3 style={{marginBottom:"20px"}}>Apply for Company</h3>
    
                <TextField style={{paddingBottom:"5px"}} label="Email*:" variant="outlined" type="email" name="email" value={email.email} onChange={(e)=>setEmail({email:e.target.value})} ></TextField><br/>
                <InputLabel>Company Name*:</InputLabel> <select style={{marginBottom:"20px"}}>
                    {
                        company.map(comp=>
                            <option key={comp._id} value={comp.companyName}>{comp.companyName}</option>
                            )
                    }
                    </select><br/>
                <Button variant="contained" type="submit">Submit</Button>
                {/* <label>Post Title*:</label><input type="text" name="postTitle" value={this.state.postTitle} onChange={this.handleChange}/> */}
    
                {/* <label>Company Name*:</label><input type="text" name="companyName" value={this.state.companyName} onChange={this.handleChange}/>
    
                <label>Description*:</label><input type="textarea" name="companyDesc" placeholder='Description' value={this.state.companyDesc} onChange={this.handleChange}/> */}
    
                 {/* <input style={{}} type="submit" value="submit"/> */}
     
                </form>
                </Container>
            )
}
//             )
// }
// }

export default ApplyCompany