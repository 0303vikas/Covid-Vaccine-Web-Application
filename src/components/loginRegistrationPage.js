import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar";
import "../App.css";
import PhoneInput from "react-phone-input-2";
import axios from 'axios';
import Success from './successmessage.js';
import Error from './Error.js';
import { AuthContext } from '../contexts/AuthContext.js';







const LoginRegister = ({history}) => {

 
  // for Register page
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const[email, setemail] = useState();
  const[password, setpassword]  = useState();
  const[passwordrep, setpasswordred]  = useState();
  const[regsuccessmessage, setregsuccessmessage] = useState(null);
  const [error, setErrors] = useState(null); 


  //for Login in 
  const [loginemail, setloginemail] = useState();
  const [loginpassword, setloginpassword] = useState();
  const[logsuccessmessage, setlogsuccessmessage] = useState(null);
  const [loginerror, setloginErrors] = useState(null); 

  const {getLoggedIn}  = useContext(AuthContext);






  
  
  const onRegisterSubmit = async (e) => {
    e.preventDefault();

    try{
      const registrationdata = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        passwordCheck: passwordrep
      };
      await axios.post("http://localhost:8000/users/register", registrationdata)
      setErrors(null)

      setregsuccessmessage("User Successfully registered");
      // reset form elemeents

     
     


      
      

    }
    catch(error) {
      console.log(error.response.data.msg)
      setregsuccessmessage(null);
      setErrors(error.response.data.msg)
      

    }
   
    
  }

  const clearsuccessmessage = () =>{
    setregsuccessmessage(null)

  }

  const clearerrormessage = () =>{
    setErrors(null)

  }

  const onLoginSubmit = async (e) =>{
    e.preventDefault();

    try{

      const logindata = {
        email: loginemail,
        password: loginpassword
      }

      await axios.post('http://localhost:8000/users/login',logindata);
      await getLoggedIn().then(() => {history.push('/home');console.log("Successfully logged in")});
      setloginErrors(null)
      setlogsuccessmessage("Login Successfull")

    }catch(error){
      console.log(error.response.data.msg)
      setlogsuccessmessage(null)
      setloginErrors(error.response.data.msg)

    }

    


  }

  const clearloginsuccessmessage = () =>{
    setlogsuccessmessage(null)

  }

  const clearloginerrormessage = () =>{
    setloginErrors(null)

  }

  // form handling 










    return(
        <>
        <div>
            <MainNavbar  list={listnavbar}/>
        </div>

        

        <div className="bodycontainer" style={{display: "flex",flexDirection: "row", margin: "10px",border: "1px black solid"}}>
            <div style={{width: "50%", border:"1px black solid", margin: "3px"}} >
            <form
            class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full mb-8"
            onSubmit={onRegisterSubmit}
          >
            <h1 class="mb-8 text-3xl text-center">Register Here</h1>
            {regsuccessmessage && <Success successmes={regsuccessmessage} delete={clearsuccessmessage}/>}
            {error && <Error error={error} delete={clearerrormessage}/>}

            <div style={{display: "flex",flexDirection: "row"}} >
                <div style={{marginRight: "15px"}}>
                  <lable>First Name</lable>
                  <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fname"
                    placeholder="First Name"
                    style={{display: 'block', border: "1px solid lightblue"}}
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                  />
            </div>
                <div>
                  <lable>Last Name</lable>
                  <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="lname"
                    placeholder="Last name"
                    style={{display: 'block', border: "1px solid lightblue"}}
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                  />
                </div>
          </div>
              

            
            
          {/* <PhoneInput
                placeholder="country code without '+' sign"
                
                country={'fi'}
                name ="phoneNumber"
                inputProps={{
                    name: 'phone',
                    require: true,
                    autoFocus: true
                }}
                
                enableAreaCodes={true}
                required

          /> */}

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

            <label>E-mail</label>
            <input
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="E-mail"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <label>Password Confirmation</label>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Confirm Password"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
              value={passwordrep}
              onChange={(e) => setpasswordred(e.target.value)}
            />
            
            <div class="flex justify-center">
              <button
                type="submit"
                class="w-full bg-blue-500 text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
                style={{backgroundColor: 'orange'}}
                
              >
                Register
              </button>
            </div>
            <div class="w-full border border-gray-900 border-opacity-20 mt-2"></div>
            <div class="mt-2">
             
            </div>
            
          </form>



          {/* login page starts from here */}
                


            </div>
            <div style={{width: "50%",border:"1px black solid", margin: "3px"}} > 
            <form
            class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full mb-8"
            onSubmit={onLoginSubmit}
          >
            <h1 class="mb-8 text-3xl text-center">Login Here</h1>

            {logsuccessmessage && <Success successmes={regsuccessmessage} delete={clearloginsuccessmessage}/>}
            {loginerror && <Error error={error} delete={clearloginerrormessage}/>}

            <label>E-mail</label>
            <input
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="E-mail"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
             value={loginemail}
             onChange={(e) => setloginemail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
              value={loginpassword}
              onChange={(e) => setloginpassword(e.target.value)}
            />
            <div class="flex justify-center">
              <button
                type="submit"
                class="w-full bg-blue-500 text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
                style={{backgroundColor: "cyan"}}
              >
                Login
              </button>
            </div>
            <div class="w-full border border-gray-900 border-opacity-20 mt-2"></div>
           
            <div class="text-center text-sm text-grey-dark mt-4"></div>
            <div class="ml-1 text-blue-500">
              <button class="font-black" 
            //   onClick={forgotPassword}
            >
                Forgot password?
              </button>
            </div>
          </form>
            
            </div>
        </div>

        <div className="bottomnav">
        <Bottomnav />

        </div>
            
        
        </>
    );
};




export default LoginRegister;