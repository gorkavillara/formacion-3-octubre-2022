import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";

export const DashboardContext = createContext(null);

const url =
  "https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/alumnos";

const initialState = {
  usuarios: [],
  configuracion: {
    darkMode: false,
  },
};

const actions = {
  SET_USUARIOS: "SET_USUARIOS",
  ADD_USUARIO: "ADD_USUARIO",
  TOGGLE_MODE: "TOGGLE_MODE",
};

// const actions = {
//     SET_USUARIOS: (payload) => console.log("Haz lo que quieras con el payload")
// }

const dashboardReducer = (state, action) => {
  // if (!Object.keys(actions).some(k => k === action.type)) return state
  // actions[action.type](action.payload)

  if (action.type === actions.SET_USUARIOS) {
    // Setear los usuarios
    return { ...state, usuarios: action.payload };
  }
  if (action.type === actions.ADD_USUARIO) {
    // Añadir un usuario al estado
    return { ...state, usuarios: [...state.usuarios, action.payload] };
  }
  if (action.type === actions.TOGGLE_MODE) {
    // Cambiar de modo de visualización
  }
  return state;
};

const DashboardContextProvider = ({ children }) => {
  const [dashboardState, dispatchDashboard] = useReducer(
    dashboardReducer,
    initialState
  );
  const { usuarios, configuracion } = dashboardState;

  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = () => {
    // Buscar los usuarios de la base de datos
    axios
      .post(url, { action: "obtenAlumnos" })
      .then((res) => {
        dispatchDashboard({
          type: actions.SET_USUARIOS,
          payload: res.data.alumnos,
        });
      })
      .catch((e) => console.error(e))
      .finally(() => console.log("He terminado"));
  };

  return (
    <DashboardContext.Provider
      value={{
        activeUser,
        setActiveUser,
        usuarios,
        configuracion,
        dispatchDashboard,
        actions,
        fetchUsuarios,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
