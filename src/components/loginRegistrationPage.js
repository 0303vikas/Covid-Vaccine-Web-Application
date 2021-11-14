
import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar";
import "../App.css";
import PhoneInput from "react-phone-input-2";


import React from "react";




const LoginRegister = () => {

    return(
        <>
        <div>
            <MainNavbar  list={listnavbar}/>
        </div>

        

        <div className="bodycontainer" style={{display: "flex",flexDirection: "row", margin: "10px",border: "1px black solid"}}>
            <div style={{width: "50%", border:"1px black solid", margin: "3px"}} >
            <form
            class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full mb-8"
            // onSubmit={signIn}
          >
            <h1 class="mb-8 text-3xl text-center">Register Here</h1>

            <div style={{display: "flex",flexDirection: "row"}} >
                <div style={{marginRight: "15px"}}>
                <lable>First Name</lable>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fname"
              placeholder="Name"
              style={{display: 'block', border: "1px solid lightblue"}}
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
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
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            />
                    </div>
                </div>
           

            
            
            <PhoneInput
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

              />

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
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="E-mail"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />

            <label>Password Confirmation</label>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
            
            <div class="flex justify-center">
              <button
                type="submit"
                class="w-full bg-blue-500 text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Login
              </button>
            </div>
            <div class="w-full border border-gray-900 border-opacity-20 mt-2"></div>
            <div class="mt-2">
              <button
                type="submit"
                class="w-full border border-black border-opacity-50 text-center py-2 rounded text-black hover:bg-green-dark focus:outline-none my-1"
                
                // onClick={signUp}
              >
                Register
              </button>
            </div>
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
            <div style={{width: "50%",border:"1px black solid", margin: "3px"}} > 
            <form
            class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full mb-8"
            // onSubmit={signIn}
          >
            <h1 class="mb-8 text-3xl text-center">Login Here</h1>

            <label>E-mail</label>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="E-mail"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              style={{display: 'block', border: "1px solid lightblue"}}
              id="input1"
              
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
            />
            <div class="flex justify-center">
              <button
                type="submit"
                class="w-full bg-blue-500 text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Login
              </button>
            </div>
            <div class="w-full border border-gray-900 border-opacity-20 mt-2"></div>
            <div class="mt-2">
              <button
                type="submit"
                class="w-full border border-black border-opacity-50 text-center py-2 rounded text-black hover:bg-green-dark focus:outline-none my-1"
                // onClick={signUp}
              >
                Register
              </button>
            </div>
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