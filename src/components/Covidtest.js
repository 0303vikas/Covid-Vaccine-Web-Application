import React, {useState} from 'react';
import Success from './successmessage.js';
import Error from './Error.js';
import axios from 'axios'



import listnavbar from "./Navitem.js";

import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar";
import "../App.css";
import DateTimePicker  from 'react-datetime-picker';


const CovidTest = ()=> {

    const [startDate, setStartDate] = useState(new Date()); 
  const isWeekday = date => {
      const day = date.getDay(date);
      return day !== 0 && day !== 6;
  }

  const[regsuccessmessage, setregsuccessmessage] = useState(null);
  const [error, setErrors] = useState(null); 
  const [hospital, setHospital] = useState()
  


  const clearsuccessmessage = () =>{
    setregsuccessmessage(null)

  }

  const clearerrormessage = () =>{
    setErrors(null)

  }





  const bookTest = async (e) => {
    e.preventDefault();

    try{

        const vaccinedata = {
            type: "Test",
            hospital: hospital,           
            latestDate: startDate,
            result: false
        }
        await axios.post('http://localhost:8000/users/test/submit', vaccinedata)
        setErrors(null)

        setregsuccessmessage("Test slot successfully booked");
        



    }catch(error){
        console.log(error.response.data.msg)
        setregsuccessmessage(null);
        setErrors(error.response.data.msg)
    }




}

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
            <div style={{width: "35%",border:"1px black solid", margin: "3px", paddingLeft: "10px"}} > 
           
           <div>
           <form
            class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full mb-8"
            onSubmit={bookTest}
          >
            <h1 class="mb-8 text-3xl text-center">Book Covid-19 Test</h1>
            {regsuccessmessage && <Success successmes={regsuccessmessage} delete={clearsuccessmessage}/>}
            {error && <Error error={error} delete={clearerrormessage}/>}

          
          <div>

            <label>
                    Choose Hospital
                    <div></div>
                    <select style={{width: '100%'}} onChange={(e) => setHospital(e.target.value) }>
                        <option value="Hospital1">Hospital 1</option>
                        <option value="Hospital2">Hospital 2</option>
                        <option value="Hospital3">Hospital 3</option>
                        <option value="Hospital4">Hospital 4</option>
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

        
    
    
        </>
    );



}

export default CovidTest;