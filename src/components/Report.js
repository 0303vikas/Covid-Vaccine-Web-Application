import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar.js";
import React from "react";



const Report = ()=> {

    return(<>
    <div>

        <MainNavbar  list={listnavbar}/></div>
        <div  className="bodycontainer" style={{ margin: "10px",border: "1px black solid"}}>
        <div style={{fontSize: '25px', fontWeight: 'bolder'}}>
            COVID-19 certificates
            </div>
            <div>
            The EU Digital COVID Certificates, including a vaccination certificate, test certificate and certificate of recovery, are available form My Kanta Pages.

The EU COVID-19 vaccination certificate will be visible in your My Kanta Pages once you have been vaccinated. The certificate shows the name of your last vaccine, the date it was administered and the number of vaccine doses you have received.
The EU COVID-19 test certificate will be visible in your My Kanta Pages once you have undergone a COVID-19 test and the result has come back. The certificate in the My Kanta Pages is based on the results of your most recent test.
The EU certificate of recovery from COVID-19 will be visible in the My Kanta Pages once you have recovered from the disease and your COVID-19 infection has been confirmed with a positive PCR test result. There are two types of COVID-19 tests: PCR tests and rapid diagnostic test (antigen tests). A rapid test result is not sufficient proof of recovery from COVID-19.
                
            </div>
            <div style={{fontSize: '25px', fontWeight: 'bolder'}}>
            You can use the COVID certificates when crossing borders within the EU

            </div>
            <div>
            You can use the COVID certificates when crossing borders within the EU
All three types of the EU Digital COVID Certificate can be used when crossing borders within the EU. The aim is to facilitate safe and free movement. Each EU Member State can decide for itself on other uses of the certificate.

The Finnish vaccination certificate is easy to get and use, as you can show it on your mobile device or print it out. The certificate is free of charge.

You do not need to contact a healthcare professional to get the certificate: the certificate will be created automatically in the My Kanta Pages. In this way, healthcare resources can be used elsewhere.

Once the EU Digital COVID Certificates are in use, they are easy to check in other EU Member States, because they have the same content across the EU. Each Member State can decide what certificates they require from incoming travellers and how many vaccine doses the travellers need to have received. Under the EU regulation, Member States must accept the EU Digital COVID Certificate if they accept other similar certificates.
            </div>
            <div style={{padding: '10px 0 0 10px', fontWeight: '500'}}>
                Click me to download the Vaccine Certificate
                
            </div>
       
        </div>
    

        <div className="bottomnav">
        <Bottomnav />

        </div>
            
            </>)



}

export default Report;