import React, { useContext, useEffect, useRef } from "react";
import { DashboardContext } from "../../../contexts/DashboardContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

import { TextField, Button, Box, Typography, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "10px",
  // backgroundColor: theme.palette.secondary.light
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary
}))

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
    // <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
    <StyledBox>
      <CustomTitle variant="h4">Haz login con tu usuario</CustomTitle>
      <TextField
        label="Usuario"
        type="text"
        ref={inputRef}
        variant="outlined"
      />
      <Button color="primary" variant="contained" onClick={login}>
        Login
      </Button>
    {/* // </Box> */}
    </StyledBox>
  ) : (
    <Navigate to="/dashboard/perfil" />
  );
};

export default Login;
