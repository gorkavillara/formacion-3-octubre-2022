import React from "react";
import styles from "./Dashboard.module.scss";
// import "./Dashboard.module.scss";

import { Outlet, NavLink } from "react-router-dom";
import DashboardContextProvider from "../../contexts/DashboardContextProvider";

const Dashboard = () => {
  return (
    <DashboardContextProvider>
      <div className={styles.Dashboard}>
        <div className={styles.sidebar}>
          <span className={styles.logo}>SpeedRanking</span>
          <ul>
            <li>
              <NavLink to="/dashboard/top">Top</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/detalles">Detalles</NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: "/dashboard/usuarios" }}>
                Usuarios
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/registro">Registro</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/configuracion">Configuración</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.contenido}>
          <Outlet />
        </div>
      </div>
    </DashboardContextProvider>
  );
};

export default Dashboard;
