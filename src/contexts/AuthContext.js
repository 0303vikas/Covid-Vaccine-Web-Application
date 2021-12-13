import axios from "axios";
import React, { useContext, useState, useEffect, createContext } from "react";



export const AuthContext = createContext();

export function useAuth(){

  return useContext(AuthContext)
}

export function AuthProvider({children}) {

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading]= useState(true);

  async function getLoggedIn(){
    const loggedInRes = await axios.get(
      "http://localhost:8000/users/loggedIn"
    );
    
    setCurrentUser(loggedInRes.data);   
    
  }

  

  useEffect(() => {    
    getLoggedIn();
    setLoading(true);
    
  }, []);

  const value = {
    currentUser,
    getLoggedIn
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
  }

  

