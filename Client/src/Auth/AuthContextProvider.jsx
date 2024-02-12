import React, { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchData, setSearchData] = useState([]);
  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn, setIsLoggedIn, searchData, setSearchData }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
