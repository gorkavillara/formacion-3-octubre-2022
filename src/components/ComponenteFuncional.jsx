import PropTypes from "prop-types"
import React, { useState } from "react";

const ComponenteFuncional = ({ nombre, edad, children }) => {
  // const estado = useState(32)
  // console.log(estado[0], estado[1])
  const [contador, setContador] = useState(32)
  return (
    <>
      <div>
        Hola soy {nombre}, mi edad es {edad} y hoy es mi cumpleaños! 🥳
      </div>
      <div>
        <span>El contador vale {contador}</span>
        <br />
        <button onClick={() => setContador(prev => prev - 1)}>Menos</button>
        <button onClick={() => setContador(prev => prev + 1)}>Mas</button>
        <button onClick={() => setContador(0)}>Reset</button>
      </div>
      {/* {children} */}
    </>
  );
};

ComponenteFuncional.propTypes = {
    nombre: PropTypes.string.isRequired
}

export default ComponenteFuncional;
