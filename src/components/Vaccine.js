import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar";
import "../App.css";
import Select from "react-select"
import React, {useState} from 'react';
import DateTimePicker from "react-datetime-picker";
import { useAuth } from "../contexts/AuthContext";
import axios  from "axios";
import Success from './successmessage.js';
import Error from './Error.js';


const options = [
    {value: "HA" , label: "Hospital A"},
    {value: "HB", label: "Hospital B"},
    {value: "HC", label: "Hospital C"}
]

const Vaccine = ()=> {


    const {currentUser}  = useAuth()
    const [wrong,setwrong]  = useState("");
    const [startDate, setStartDate] = useState(new Date()); 
    const isWeekday = date => {
        const day = date.getDay(date);
        return day !== 0 && day !== 6;
    }
    const [hospital,setHospital] = useState();
    const [vaccine, setVaccine] = useState(); 
    const[regsuccessmessage, setregsuccessmessage] = useState(null);
    const [error, setErrors] = useState(null); 
  
    
  
  
    const clearsuccessmessage = () =>{
      setregsuccessmessage(null)
  
    }
  
    const clearerrormessage = () =>{
      setErrors(null)
  
    }  



    const bookVaccine = async (e) => {
        e.preventDefault();

        try{

            const vaccinedata = {
                hospital: hospital,
                
                latestDate: startDate
            }
            await axios.post('http://localhost:8000/users/vaccines/certificates/submit', vaccinedata)

            setErrors(null)

        setregsuccessmessage("Test slot successfully booked");
        


        }catch(error){
            console.log(error.response.data.msg)
        setregsuccessmessage(null);
        setErrors(error.response.data.msg)
        }




    }

    




    return(<>

    <div><MainNavbar  list={listnavbar}/></div>

    <div className="bodycontainer" style={{display: "flex",flexDirection: "row", margin: "10px",border: "1px black solid"}}>
            <div style={{width: "65%", border:"1px black solid", margin: "3px"}} >
                <h2>Covid-19 Vaccine</h2>
                <p>A COVID‑19 vaccine is a vaccine intended to provide acquired immunity against severe acute respiratory syndrome coronavirus 2 (SARS‑CoV‑2), the virus that causes coronavirus disease 2019 (COVID‑19). Prior to the COVID‑19 pandemic, an established body of knowledge existed about the structure and function of coronaviruses causing diseases like severe acute respiratory syndrome (SARS) and Middle East respiratory syndrome (MERS). This knowledge accelerated the development of various vaccine platforms during early 2020.[1] The initial focus of SARS-CoV-2 vaccines was on preventing symptomatic, often severe illness.[2] On 10 January 2020, the SARS-CoV-2 genetic sequence data was shared through GISAID, and by 19 March, the global pharmaceutical industry announced a major commitment to address COVID-19.[3] The COVID‑19 vaccines are widely credited for their role in reducing the spread, severity, and death caused by COVID-19.[4]</p>

            </div>
            <div style={{width: "35%",border:"1px black solid", margin: "3px", displayContent: "Center"}} > 
            <div  style={{paddingLeft: "10px"}}>
           

            <form
            class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full mb-8"
            onSubmit={bookVaccine}
          >
              <h6>Welcome, {currentUser.firstName} </h6>
            <h1 class="mb-8 text-3xl text-center">Book Covid-19 Vaccine</h1>
            {regsuccessmessage && <Success successmes={regsuccessmessage} delete={clearsuccessmessage}/>}
            {error && <Error error={error} delete={clearerrormessage}/>}

          

          
          <div>

            <label>
                    Choose Hospital
                    <div></div>
                    <select style={{width: '100%'}} onChange={(e) => setHospital(e.target.value)} >
                        <option value="Hospital1">Hospital 1</option>
                        <option value="Hospital2">Hospital 2</option>
                        <option value="Hospital3">Hospital 3</option>
                        <option value="Hospital4">Hospital 4</option>
                    </select>
            </label>
            </div>
            <div>
            <label>
                    Choose Vaccine Company
                    <div></div>
                    <select style={{width: '100%'}} onchange={(e) => setVaccine(e.target.value)}>
                        <option value="Vaccine1">Vaccine 1</option>
                        <option value="Vaccine2">Vaccine 2</option>
                        <option value="Vaccine3">Vaccine 3</option>
                        <option value="Vaccine4">Vaccine 4</option>
                    </select>
            </label>
            </div> 
            <div>
                <label>
                    Pick date and time
                    <div></div>
            <DateTimePicker 
                value={startDate}
                onChange={date => setStartDate(date)}
                format='dd-MM-y h:mm:ss a '
                minDate={new Date()}
                locale="en-GB"
                placeholderText="Select a date"
                filterDate={isWeekday}
                name='datefield'
                required
              
                
            />
            </label>

            </div>           
            

            {/* <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Phone Number"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            /> */}

           
            
            <div class="flex justify-center">
                    <button
                        type="submit"
                        class="w-full bg-blue-500 text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
                        style={{backgroundColor: 'orange'}}
                    >
                        Book
                    </button>
            </div>
            <div class="w-full border border-gray-900 border-opacity-20 mt-2"></div>
            <div class="mt-2">
             
            </div>
          
          </form>
            </div>

            </div>
        </div>

        <div className="bottomnav">
        <Bottomnav />

        </div>


         
    
    </>)

   



}

export default Vaccine;