import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar";
import "../App.css";

const Vaccine = ()=> {

    return(<>

    <div><MainNavbar  list={listnavbar}/></div>

    <div className="bodycontainer" style={{display: "flex",flexDirection: "row", margin: "10px",border: "1px black solid"}}>
            <div style={{width: "65%", border:"1px black solid", margin: "3px"}} >
                <h2>Covid-19 Vaccine</h2>
                <p>A COVID‑19 vaccine is a vaccine intended to provide acquired immunity against severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2), the virus that causes coronavirus disease 2019 (COVID‑19). Prior to the COVID‑19 pandemic, an established body of knowledge existed about the structure and function of coronaviruses causing diseases like severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS). This knowledge accelerated the development of various vaccine platforms during early 2020.[1] The initial focus of SARS-CoV-2 vaccines was on preventing symptomatic, often severe illness.[2] On 10 January 2020, the SARS-CoV-2 genetic sequence data was shared through GISAID, and by 19 March, the global pharmaceutical industry announced a major commitment to address COVID-19.[3] The COVID‑19 vaccines are widely credited for their role in reducing the spread, severity, and death caused by COVID-19.[4]</p>

            </div>
            <div style={{width: "35%",border:"1px black solid", margin: "3px"}} > 
            <h3>
            Form for Covid-19 Test</h3>

            </div>
        </div>

        <div className="bottomnav">
        <Bottomnav />

        </div>


         
    
    </>)

   



}

export default Vaccine;