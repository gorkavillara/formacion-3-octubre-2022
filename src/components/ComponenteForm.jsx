import React, { useState } from "react";

const ComponenteForm = () => {
  //   const [nombre, setNombre] = useState("");
  //   const [apellido, setApellido] = useState("");
  const [formValues, setFormValues] = useState({
    nombre: "",
    apellido: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // utilizar un fetch o un axios para enviar los datos
    console.log(formValues);
  };

  const handleChangeApellido = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      apellido: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu Nombre"
        value={formValues.nombre}
        onChange={(e) =>
          setFormValues((prevValues) => ({
            ...prevValues,
            nombre: e.target.value,
          }))
        }
      />
      <input
        type="text"
        placeholder="Tu Apellido"
        value={formValues.apellido}
        onChange={handleChangeApellido}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default ComponenteForm;
