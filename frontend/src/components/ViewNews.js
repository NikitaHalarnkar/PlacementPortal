import React, {useState, useEffect} from 'react';
import axios from "axios"
import { Container, AppBar,Toolbar,Typography,Tabs,Tab,Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import history from "../history";
import { Link } from "react-router-dom";




// class ViewNews extends React.Component{

//     onLogout=()=>{
//         history.push("/login")

//     }
    
    

//     componentDidMount=()=>{
//         this.getNewsPosted()
//     }

//     getNewsPosted=()=>{
//         axios.get('http://localhost:5000/student/getPost')
//         .then((response)=>{
//             const data=response.data;
//             this.setState({posts:data});
//             console.log("Data access successful");
//         })
//     }

//     displayNewsPosted=(posts)=>{
//         if(!posts.length) return null;

//        return posts.map((post,index)=>(
//             <div key={index}>
//                 <h3>{posts.postTitle}</h3>
//                 <h4>{posts.companyName}</h4>
//                 <p>{posts.companyDesc}</p>
//             </div>
//         ))
//     }

//     render(){
//         return(
//             <Container>
//             <AppBar position="fixed">
//             <Toolbar>
//                 <Typography variant="h5">
//                     Student Home
//                 </Typography>
//                 <SchoolIcon/>
//                 <Tabs textColor="inherit">
//                     <Tab to="/StudentDetails" LinkComponent={Link} label="Your Details"></Tab>
//                     <Tab to="/ApplyCompany" LinkComponent={Link} label="Apply for Company"></Tab>
//                     <Tab to="/ViewNews" LinkComponent={Link} label="View Posts"></Tab>
//                 </Tabs>
//                 <Button sx={{marginLeft:"auto"}} variant="contained" onClick={this.onLogout}>Logout</Button>
//             </Toolbar>
            
//         </AppBar>
//         <div style={{marginTop:"50px"}}>
//             <div>
//                 {this.displayNewsPosted(this.state.posts)}
//             </div>
//         </div>
//             </Container>
//         )
//     }
// }

const ViewNews=()=>{

    const onLogout=()=>{
              history.push("/login")
        
            }

    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/student/getPost')
        .then(res=>setPosts(res.data))
        .catch(error=>console.log(error))
    })

    return(
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
                     <Button sx={{marginLeft:"auto"}} variant="contained" onClick={onLogout}>Logout</Button>
                 </Toolbar>
                    
             </AppBar>
             <div>
            {posts.map((comp,key)=>(
                <div style={{marginTop:"50px"}}>
                <h3>{comp.postTitle}</h3>
                <h4>{comp.companyName}</h4>
                <p>{comp.companyDesc}</p>
                <hr/>
                </div>
            ))}
        </div>
                 </Container>
        
    )
}

export default ViewNews