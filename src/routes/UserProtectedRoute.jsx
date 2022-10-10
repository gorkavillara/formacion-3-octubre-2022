import React, { useContext, useEffect } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { DashboardContext } from "../contexts/DashboardContextProvider";

const UserProtectedRoute = ({ children }) => {
  const { activeUser } = useContext(DashboardContext);
// const navigate = useNavigate()
// useEffect(() => {
//   activeUser === null && navigate("/dashboard/login")
// }, [activeUser, navigate])
console.log(activeUser)
  return activeUser === null ? <Navigate to="/dashboard/login" /> : children;
//   return children;
};

export default UserProtectedRoute;
