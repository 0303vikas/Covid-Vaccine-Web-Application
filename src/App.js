import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginRegister from "./components/loginRegistrationPage.js";
import Home from "./components/Home.js";
import CovidTest from "./components/Covidtest.js";
import Report from "./components/Report.js";
import Vaccine from "./components/Vaccine.js";

function App() {
  return (<>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginRegister} />
        <Route exact path="/home" component={Home} />

        <Route exact path="/covidtest" component={CovidTest} />

        <Route exact path="/report" component={Report} />

        <Route exact path="/vaccine" component={Vaccine} />



        
      </Switch>

    </Router>
    </>
    
  );
}

export default App;
