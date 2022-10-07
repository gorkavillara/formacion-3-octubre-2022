import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../../../contexts/DashboardContextProvider";

const initialValues = {
  username: "",
  password: "",
  email: "",
};

const url =
  "https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/alumnos";

const Registro = () => {
  const { dispatchDashboard, actions, fetchUsuarios } =
    useContext(DashboardContext);
  const [formValues, setFormValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const { username, password, email } = formValues;

  const navigate = useNavigate()

  const changeValues = ({ value, key }) =>
    setFormValues((prevValues) => ({ ...prevValues, [key]: value }));

  const handleSubmit = async (e) => {
    // Crear un registro en la base de datos
    e.preventDefault();
    setLoading(true);
    try {
      const respuesta = await axios.post(url, {
        action: "nuevoAlumno",
        alumno: formValues,
      });
      console.log(respuesta);
      //   dispatchDashboard({ type: actions.ADD_USUARIO, payload: formValues })
      fetchUsuarios();
      navigate("/dashboard/usuarios")
    } catch (e) {
      console.error(e);
    } finally {
      // Esto se ejecuta siempre al final
      setLoading(false);
      setFormValues(initialValues);
    }
  };

  return (
    <div>
      <h2>Registro de usuarios</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre de usuario"
          value={username}
          onChange={(e) =>
            changeValues({ key: "username", value: e.target.value })
          }
          disabled={loading}
        />
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) =>
            changeValues({ key: "email", value: e.target.value })
          }
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={(e) =>
            changeValues({ key: "password", value: e.target.value })
          }
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default Registro;
