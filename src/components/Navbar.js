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
            <Container >
                
                <Image src={image} alt="CovidVaccine Logo" className="logoimg" height="180" rounded/>
                <div className="navbarcont">
                {listofitems.map((object,index) => { return(<Link to={object.link} key={index} className={object.id} id="cssstyleid" style={{paddingRight: "5%", textDecoration: 'none'  }}exact="true">{object.title} 
                    
                    </Link>)
                })}
                </div>

                
            </Container> 
            

        
        
        </Navbar>
            
        



    
            </>)

    }

   



    

}




export default MainNavbar;