
import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar"
import "../App.css"



const LoginRegister = () => {

    return(
        <>
        <div>
            <MainNavbar  list={listnavbar}/>
        </div>

        

        <div className="bodycontainer">
            <div style={{display: "inline"}} >
                <p>
                
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1></p>


            </div>
            <div style={{display: "inline"}} > 
            <p>
            Hello How can i help you</p>

            </div>
        </div>

        <div className="bottomnav">
        <Bottomnav />

        </div>
            
        
        </>
    );
};

export default LoginRegister;