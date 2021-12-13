import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginRegister from "./components/loginRegistrationPage.js";
import Home from "./components/Home.js";
import CovidTest from "./components/Covidtest.js";
import Report from "./components/Report.js";
import Vaccine from "./components/Vaccine.js";
import  { AuthProvider } from './contexts/AuthContext';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoutes'



axios.defaults.withCredentials = true;

function App({history}) {

   const handlelogout = async () => {
     await axios.post('http://localhost:8000/users/logout');
      history.push('/')

   }

  return (<>
  <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginRegister} exact/>
        <Route exact path="/home" component={Home} exact/>

        <PrivateRoute exact path="/covidtest" component={CovidTest} exact/>

        <PrivateRoute exact path="/report" component={Report} exact/>

        <PrivateRoute exact path="/vaccine" component={Vaccine} exact/>
        {/* <Route exact path="/logout" render={() => handlelogout} /> */}



        
      </Switch>

    </Router>
    </AuthProvider>
    </>
    
  );
}

export default App;
