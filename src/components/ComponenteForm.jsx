import React, { useState } from "react";

const ComponenteForm = () => {
//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: ""
  })
  return (
    <form>
      <input
        type="text"
        placeholder="Tu Nombre"
        value={formValues.nombre}
        onChange={(e) => setFormValues(prevValues => ({ ...prevValues, nombre: e.target.value }))}
      />
      <input
        type="text"
        placeholder="Tu Apellido"
        value={formValues.apellido}
        onChange={(e) => setFormValues(prevValues => ({ ...prevValues, apellido: e.target.value }))}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default ComponenteForm;
