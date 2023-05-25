import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from 'antd'

const Logout = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return <Button type='link' onClick={handleLogout}>Logout</Button>;
};

export default Logout;
