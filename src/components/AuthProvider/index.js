import { AuthContext } from "../AuthContext";
import React, { useState,  useEffect} from "react";
import { useNavigate } from "react-router-dom";

const useLocalStorage = (key, initialValue)=>{
  const [value, setValue] = useState(() => {
      // Retrieve the value from local storage or use the initial value
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
      // Update the local storage value whenever the state changes
      localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token', null);
  const [user, setUser] = useLocalStorage('user', null);


  const doLogin = (authData) => {
    console.log(authData, 'authData')
    setToken(authData.token);
    setUser(authData.user)
    navigate("/home");
  };

  return (
    <AuthContext.Provider value={{ doLogin, token, user, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
