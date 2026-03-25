import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);  
  const login = (userData) => {  
    setIsLoggedIn(true);
    setUser(userData);           
  };
  const logout = () => {
    setIsLoggedIn(false);
    setPhone('');
    setUser(null);               
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, phone, setPhone, user }}>  
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);