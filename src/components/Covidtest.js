import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar";
import "../App.css";

const CovidTest = ()=> {

    return(
        <>
        <div>
            <MainNavbar  list={listnavbar}/>
        </div>

        <div className="bodycontainer" style={{display: "flex",flexDirection: "row", margin: "10px",border: "1px black solid"}}>
            <div style={{width: "65%", border:"1px black solid", margin: "3px"}} >
                <div style={{justifyContent: "center"}}>
                    
                <h2>Covid-19 Test</h2>
                <p>
                COVID-19 rapid antigen tests, also frequently called COVID-19 lateral flow tests, are rapid antigen tests used to detect SARS-COV-2 infection (COVID-19). They are quick to implement with minimal training, offered significant cost advantages, costing a fraction of other forms of COVID-19 testing and give users a result within 5–30 minutes. Rapid antigen tests are used in several countries as part of mass testing or population-wide screening approaches.[1][2][3] They are thought to be valuable for identifying individuals who are asymptomatic and could potentially spread the virus to other people, who would otherwise not know they were infected.[4] This differs from other forms of COVID-19 testing, such as PCR, that are generally seen to be a useful test for symptomatic individuals, as they have a higher sensitivity and can more accurately identify cases.
                </p>
                </div>
                


            </div>
            <div style={{width: "35%",border:"1px black solid", margin: "3px"}} > 
           <h3>Form for Covid-19 Test</h3>

            </div>
        </div>
        
        <div className="bottomnav">
        <Bottomnav />

        </div>

        
    
    
        </>
    );



}

export default CovidTest;