import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
// import "./Dashboard.module.scss";

import {
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  Divider,
  ListItemText,
  Fab,
} from "@mui/material";

import { FaFlagCheckered } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { FiUsers, FiLogIn } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";

import { Outlet, NavLink, Link } from "react-router-dom";
import DashboardContextProvider from "../../contexts/DashboardContextProvider";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <DashboardContextProvider>
      <div className={styles.Dashboard}>
        <Drawer
          variant="persistent"
          open={isOpen}
          sx={{ width: isOpen ? "200px" : "0px" }}
        >
          <Box sx={{ padding: "15px" }}>
            <Typography variant="h5" color="secondary">Dashboard MUI</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem>
              <Link to="/dashboard/top" style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <FaFlagCheckered />
                  </ListItemIcon>
                  <ListItemText primary="Top" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/dashboard/detalles" style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <CgDetailsMore />
                  </ListItemIcon>
                  <ListItemText primary="Detalles" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/dashboard/usuarios" style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <FiUsers />
                  </ListItemIcon>
                  <ListItemText primary="Usuarios" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/dashboard/login" style={{ textDecoration: "none", color: "inherit" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <FiLogIn />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={() => setIsOpen(false)}>
              <BsChevronLeft />
            </IconButton>
          </Box>
        </Drawer>
        {!isOpen && <Fab color="secondary" onClick={() => setIsOpen((prev) => !prev)} sx={{ position: "absolute", left: "10px", bottom: "10px" }}>
          {isOpen ? (
            <BsChevronLeft />
          ) : (
            <BsChevronLeft style={{ transform: "rotate(180deg)" }} />
          )}
        </Fab>}
        <div className={styles.contenido}>
          <Outlet />
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default Dashboard;
