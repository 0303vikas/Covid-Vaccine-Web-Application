import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from "./Bottomnavbar.js";

const Report = ()=> {

    return(<>

        <MainNavbar  list={listnavbar}/>

        <div className="bottomnav">
        <Bottomnav />

        </div>
            
            </>)



}

export default Report;