import React, { useContext, useEffect } from "react";
import { DashboardContext } from "../../../contexts/DashboardContextProvider";
import styles from "./Usuarios.module.scss";

const Usuarios = () => {
  const { usuarios, fetchUsuarios } = useContext(DashboardContext);
//   useEffect(() => {
//     fetchUsuarios();
//   }, [fetchUsuarios]);
  return (
    <div>
      <h2>Listado de usuarios</h2>
      {usuarios && usuarios.length > 0 && (
        <ul className={styles.listado}>
          {usuarios.map((usuario, index) => (
            <li key={index}>
              {usuario.username} - {usuario.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Usuarios;
