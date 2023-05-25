import { AuthContext } from "../AuthContext";
import {useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


export const AuthRequired = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    console.log(token)
    if (token===null) {
      navigate("/login");
    }
  }, [token,navigate]);

  return children;
};
