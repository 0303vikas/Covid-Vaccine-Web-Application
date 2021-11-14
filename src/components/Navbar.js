import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import  Container from 'react-bootstrap/Container';
import "../App.css"
import image from "../img/logo.png";


const MainNavbar = (props) => {

    const listofitems = props.list;



    if(listofitems.length === 0) {
        return(<>
        
        </>)

    }else{

        return(<>
        <Navbar className="navbarhead" >
            <Container>
                
                <Image src={image} alt="CovidVaccine Logo" className="logoimg" height="200" rounded/>
                {listofitems.map((object) => { return(<NavLink><Link exact to={object.link} className={object.id}>{object.title}
                    
                    </Link></NavLink>)
                })}

                
            </Container> 
            

        
        
        </Navbar>
            
        



    
            </>)

    }

   



    

}




export default MainNavbar;