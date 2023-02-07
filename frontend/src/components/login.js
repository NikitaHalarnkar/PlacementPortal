import React,{useState} from "react";
import {Button, TextField,Box} from "@mui/material";
import axios from "axios";
import history from "../history";
import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";


const Login = () => {

    // const history=useHistory()

    const [values, setValues] = useState({
        email: '',
        password: ''
      })
    


    const handleChange=e=>{
        const{name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })


    }

    const handleSubmit=async(event)=>{
        event.preventDefault()

        const headers={headers: {
            'Content-Type': 'application/json',
          }};

          const body=JSON.stringify({
          email: values.email,
          password: values.password,
        })

        localStorage.setItem("user",body)
         console.log(localStorage.getItem("user"))


        axios.post("http://localhost:5000/student/login",body,headers).then(res=>{
            
            alert(res.data.message)
            
            //updateUser(res.data.User)
            history.push("/homepage")
            
        })


    }
    return (
        <div>
            <Box marginLeft="auto" marginRight="auto" display="flex" flexDirection="column" width={300} alignItems="left" justifyContent="center">
            <h1 style={{marginBottom:"10px"}}>Login</h1>
            <TextField label="Email*" variant="outlined" type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange}/><br/>
            <TextField label="Password*" variant="outlined" type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange}/><br/>
            <div>
                <Button style={{marginRight:"5px"}} variant="contained" onClick={handleSubmit}>Login</Button>
            
                <Button style={{marginRight:"5px"}} variant="contained" onClick={()=>history.push("/register")}>Register</Button>

                <Button style={{marginRight:"5px"}} variant="contained" onClick={()=>history.push("/AdminLogin")}>Admin</Button>
            </div>
            </Box>
            
        </div>
    )
}

export default withRouter(Login)