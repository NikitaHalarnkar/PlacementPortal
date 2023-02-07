import React,{useState} from "react";
import {Button, TextField,Box} from "@mui/material";
import axios from "axios";
import history from "../history";
import { withRouter } from "react-router-dom";


const AdminLogin = () => {


    const [Admin, setAdmin] = useState({
        email:"",
        password:""
    })

    const handleChange=e=>{
        const{name,value}=e.target
        setAdmin({
            ...Admin,
            [name]:value
        })

    }

    const login=()=>{
        axios.post("http://localhost:5000/admin/Adminlogin",Admin).then(res=>{
            alert(res.data.message)
            history.push("/AdminHomepage")
            
        })
    }
    return (
        <div>
            <Box marginLeft="auto" marginRight="auto" display="flex" flexDirection="column" width={300} alignItems="left" justifyContent="center">
            <h1 style={{marginBottom:"10px"}}>Admin Login</h1>
            <TextField label="Email*" variant="outlined" type="email" placeholder="Email" name="email" value={Admin.email} onChange={handleChange}/><br/>
            <TextField label="Password*" variant="outlined" type="password" placeholder="Password" name="password" value={Admin.password} onChange={handleChange}/><br/>
            <div>
                <Button style={{marginRight:"5px"}} variant="contained" onClick={login}>Login</Button>
            
                <Button style={{marginRight:"5px"}} variant="contained" onClick={()=>history.push("/login")}>Student</Button>
            </div>
            </Box>
            
        </div>
    )
}

export default withRouter(AdminLogin)