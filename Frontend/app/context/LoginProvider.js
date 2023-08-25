import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [profile, setProfile] = useState({});

  //  const fetchUser=()=>{
  //    const token=AsyncStorage.getItem('token');
  //    if(token!=null)
  //    {

  //    }

     
  //  }
  //  useEffect(()=>{
  //   fetchUser()
  //  },[])

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, profile, setProfile }}
    >
      {children}
    </LoginContext.Provider>
  );
};

 export const useLogin = () => useContext(LoginContext);

export default LoginProvider;