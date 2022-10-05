import React, { useEffect, useState } from "react";

const value = 10 // eslint-disable-line no-unused-vars

const ComponenteFuncionalCicloDeVida = ({ contadorInicial = 0, toggleInicial = false }) => {
  const [toggle, setToggle] = useState(toggleInicial);
  const [contador, setContador] = useState(contadorInicial);
  
  const getValue = () => 5

  useEffect(() => console.log("Se acaba de montar"), []); // componentDidMount
  useEffect(() => console.log("Se ha renderizado")); // componentDidUpdate
  useEffect(() => console.log("Se ha cambiado la variable contador"), [contador]);
  useEffect(() => {
    // Lógica
    return () => console.log("Se va a desmontar"); // componentWillUnmount
  }, []);

  useEffect(() => console.log(getValue() * contador), []) // eslint-disable-line react-hooks/exhaustive-deps

  // Lógica añadir listeners
  useEffect(() => {
    // añade los listeners
    return () => {
        // quita los listeners
    }
  }, [])
  return (
    <>
      <div>ComponenteFuncionalCicloDeVida</div>
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "On" : "Off"}
      </button>
      <button onClick={() => setContador(prev => prev + 1)}>Suma</button>
    </>
  )
};

export default ComponenteFuncionalCicloDeVida;
