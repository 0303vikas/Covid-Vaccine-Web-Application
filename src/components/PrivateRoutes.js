import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
 const { currentUser } = useAuth()

 const checkcurrentuser = () => {
     if(currentUser){
         console.log(currentUser)
         return true;
     }
     else{
         return false;
     }
 }

  return (<>
  
    <Route
     
     //Listen auth state of current user and decides where to redirect
      {...rest}
      render={props => (
        checkcurrentuser() ? 
          <Component {...props} />
         :<Redirect to="/" />
        )
      }
     />

     </>
    
  );
}

