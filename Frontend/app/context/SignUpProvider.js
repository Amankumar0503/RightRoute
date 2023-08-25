import React, { createContext, useContext, useState } from 'react';

const SignUpContext = createContext();

const SignUpProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
   const [profile, setProfile] = useState({});

  return (
    <SignUpContext.Provider
      value={{ isSignedIn, setIsSignedIn, profile, setProfile }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

 export const useSignUP = () => useContext(SignUpContext);

export default SignUpProvider;