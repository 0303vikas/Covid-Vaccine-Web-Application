import listnavbar from "./Navitem.js";
import MainNavbar from "./Navbar.js";
import Bottomnav from './Bottomnavbar.js'


const Home = () => {

   


    return (
        <>

<MainNavbar  list={listnavbar}/>
        <div>
        <h1></h1>Welcome to CovidVaccine App!
        </div>
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>

        <div>
            <Bottomnav />
        </div>
        </>
    )
}


export default Home;