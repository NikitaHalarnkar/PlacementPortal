import './App.css';
import Homepage from './components/homepage';
import Login from './components/login';
import Register from './components/register';
import React from "react";
import history from './history';
import { Router, Switch, Route} from "react-router-dom";
import StudentDetails from './components/StudentDetails';
import AdminHomepage from './components/AdminHomepage';
import AdminPostNews from './components/AdminPostNews';
import ViewStudents from './components/ViewStudents';
import AdminLogin from './components/AdminLogin';
import StudentForm from './components/StudentForm';
import ApplyCompany from './components/ApplyCompany';
import ViewNews from './components/ViewNews';


function App() {
  // const [user,setLoginUser]=useState({});

  // useEffect(()=>{
  //   setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  // },[])

  // const updateUser=(user)=>{
  //   localStorage.setItem("MyUser",JSON.stringify(user))
  //   setLoginUser(user)
  // }

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <Login  />
          </Route>
          <Route path="/AdminLogin"><AdminLogin /></Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/StudentDetails">
            <StudentDetails />
          </Route>
          <Route path="/AdminHomepage"><AdminHomepage /></Route>
          <Route path="/AdminPostNews"><AdminPostNews /></Route>
          <Route path="/ViewStudents"><ViewStudents /></Route>
          <Route path="/StudentForm">
            <StudentForm />
          </Route>
          <Route path="/ApplyCompany"><ApplyCompany/></Route>
          <Route path="/ViewNews"><ViewNews/></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
