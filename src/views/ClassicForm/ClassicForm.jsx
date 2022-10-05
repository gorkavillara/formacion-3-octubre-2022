import React, { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const ClassicForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({})

  const changeValues = (key, value) => {
    setFormValues((prevValues) => ({ ...prevValues, [key]: value }));
  };
  return (
    <div>
      <h3>Formulario Clásico</h3>
      <form onSubmit={() => null}>
        <input
          type="text"
          value={formValues.name}
          onChange={(e) => changeValues("name", e.target.value)}
          placeholder="Tu nombre"
        />
        <input
          type="text"
          value={formValues.email}
          onChange={(e) => changeValues("email", e.target.value)}
          placeholder="Tu email"
        />
        <input
          type="password"
          value={formValues.password}
          onChange={(e) => changeValues("password", e.target.value)}
          placeholder="Tu contraseña"
        />
      </form>
    </div>
  );
};

export default ClassicForm;
