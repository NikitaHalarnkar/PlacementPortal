import React,{useState} from "react";
import {Button, TextField,Box} from "@mui/material";
import axios from "axios";
import history from "../history";
import { withRouter } from "react-router-dom";
// import { regexPassword } from "../utils";
// import validator from "validator";
// import { useHistory } from "react-router-dom";



const Register = () => {
    // const history=useHistory();

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:""
    })

    // const [errors, setErrors] = useState({
    //     name:false,
    //     email: false,
    //     password: false,
    //     fetchError: false,
    //     fetchErrorMsg: '',
    //   })
    


    const handleChange=e=>{
        const{name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })

    }

    // const handleChange = (fieldName) => (event) => {
    //     const currValue = event.target.value
    //     // eslint-disable-next-line
    //     switch (fieldName) {
    //         case 'name':
    //             validator.isName(currValue)
    //             ? setErrors({ ...errors,name:false})
    //             : setErrors({ ...errors,name:true})
    //         break
    //       case 'email':
    //         validator.isEmail(currValue)
    //           ? setErrors({ ...errors, email: false })
    //           : setErrors({ ...errors, email: true })
    //         break
    
    //       case 'password':
    //         regexPassword.test(currValue)
    //           ? setErrors({ ...errors, password: false })
    //           : setErrors({ ...errors, password: true })
    //         break
    
    //     }
    //     setValues({ ...values, [fieldName]: event.target.value })
    //   }
    

    // const register=()=>{
    //     const {name,email,password}=User
    //     if(name && email && password){
    //         axios.post("http://localhost:5000/student/register",User)
    //         .then(res=>{
    //             alert(res.data.message)
    //             history.push("/login")})
    //     }else{
    //         alert("Enter all details")
    //     }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        // try {
        //   const res = await fetch('/student/register', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         name:values.name,
        //       email: values.email,
        //       password: values.password,
        //     }),
        //   })

          const headers={headers: {
            'Content-Type': 'application/json',
          }};

          const body=JSON.stringify({
            name:values.name,
          email: values.email,
          password: values.password,
        })

          axios.post("http://localhost:5000/student/register",body,headers)
          .then(res=>{
                 alert(res.data.message)
                 history.push("/login")})
    
        //   if (!res.ok) {
        //     const error = await res.json()
        //     return setErrors({
        //       ...errors,
        //       fetchError: true,
        //       fetchErrorMsg: error.msg,
        //     })
        //   }
        //   else{
        //       alert(res.data.message)
        //       history.push("/login")
        //   }
    
        //   const data = await res.json()
        //   // this is just a visual feedback for user for this demo
        //   // this will not be an error, rather we will show a different UI or redirect user to dashboard
        //   // ideally we also want a way to confirm their email or identity
        //   setErrors({
        //     ...errors,
        //     fetchError: true,
        //     fetchErrorMsg: data.msg,
        //   })
        //   setValues({
        //       name:'',
        //     email: '',
        //     password: '',
        //     showPassword: false,
        //   })
        //   return
        // } catch (error) {
        //   setErrors({
        //     ...errors,
        //     fetchError: true,
        //     fetchErrorMsg:
        //       'There was a problem with our server, please try again later',
        //   })
        
      }
    

    const gotoLogin=()=>{
        history.push("/login")
    }
    return (
        <div>
            <div>
            <Box marginLeft="auto" marginRight="auto" display="flex" flexDirection="column" width={300} alignItems="left" justifyContent="center">
            <h1 style={{marginBottom:"10px"}}>Register</h1>
            <TextField label="Name*" variant="outlined" type="text" placeholder="Name" name="name" value={values.name} onChange={handleChange}/><br/>
            <TextField label="Email*" variant="outlined" type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange}/><br/>
            <TextField label="Password*" variant="outlined" type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange}/><br/>
            <div>
                <Button variant="contained" onClick={handleSubmit}>Register</Button>
            </div><br/>
            <div>
                <Button variant="contained" onClick={gotoLogin}>Login</Button>
            </div>
            </Box>
            
        </div>
        </div>
    )
}

export default withRouter(Register)