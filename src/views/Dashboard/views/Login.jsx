import React, { useContext, useEffect, useRef } from "react";
import { DashboardContext } from "../../../contexts/DashboardContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { activeUser, setActiveUser } = useContext(DashboardContext);
  const inputRef = useRef();
  // const navigate = useNavigate();
  const login = () => {
    console.log("Login", inputRef.current.value);
    setActiveUser(inputRef.current.value);
  };
  // useEffect(() => {
  //   activeUser !== null && navigate("/dashboard/perfil");
  // }, [activeUser, navigate]);
  return activeUser === null ? (
    <div>
      <h3>Haz login con tu usuario</h3>
      <input type="text" ref={inputRef} placeholder="Tu nombre de usuario" />
      <button onClick={login}>Login</button>
    </div>
  ) : <Navigate to="/dashboard/perfil" />
};

export default Login;
