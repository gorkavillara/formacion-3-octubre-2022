import axios from "axios";
import React, { useState, useMemo, useCallback, useEffect } from "react";

const calculoGrande = () => {
  let suma = 0;
  for (let i = 0; i < 1000; i++) {
    suma++;
  }
  return suma;
};

const obtenCredenciales = () => {
  calculoGrande();
  return {
    username: "gorka",
    password: "123456",
  };
};

const HooksPerformance = () => {
  const [contador, setContador] = useState(0);
  const [credenciales, setCredenciales] = useState({});
  const sumaInicial = useMemo(() => calculoGrande(), []);

  const llamaABBDD = useCallback(() => { setContador(10) }, [])

  //   const obtenSuma = useCallback(() => {
  //     const suma = calculoGrande();
  //     return (valor) => valor + suma;
  //   }, []);
  //     (contador => {
  //     const suma = calculoGrande()
  //     return contador + suma
  //   }

  //   useEffect(
  //     () =>
  //       axios
  //         .get("https://gorkavillar.com/credenciales")
  //         .then((res) => setCredenciales(res)),
  //     []
  //   );

  const generaFuncionIntroduceDatos = () => {
    const cred = obtenCredenciales();
    return () =>
      axios.post(
        "https://gorkavillar.com",
        {
          nombre: "Gorka",
          apellido: "Villar",
        },
        {
          auth: cred,
        }
      );
  }

  const introduceDatos = () => {
    const llamar = generaFuncionIntroduceDatos();
    llamar();
  };

  return (
    <>
      <div>La suma inicial es de {100}</div>
      <button
        style={{ padding: "10px" }}
        onClick={() => setContador((cont) => cont + 1)}
      >
        {contador}
      </button>
      <button onClick={introduceDatos}>Introduce entrada en BBDD</button>
    </>
  );
};

export default HooksPerformance;
