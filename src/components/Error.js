import React from 'react';


export default function Error(props){

   

    
    

    return (
        <div id="errordiv" style={{width: "90%", backgroundColor: "#FFCCBA", color:"#D63301", border: "1px solid",margin:"10px 0px", padding:"5px 5px 5px 10px", backgroundRepeat: 'no-repeat'}}>
            <h5>{props.error}<button  style={{float: "right"}} onClick={props.delete}>X</button></h5>
            


        </div>
    )
}