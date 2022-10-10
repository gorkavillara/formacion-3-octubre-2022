import React, { useState } from "react";

const calculoGrande = () => {
    let suma = 0
    for (let i = 0; i < 100000000; i++) {
        suma++
    }
    return suma
}

const Contador = React.memo(({ valorInicial }) => {
  const [contador, setContador] = useState(valorInicial);
    
  calculoGrande()
  
  return (
    <button
      style={{ padding: "10px" }}
      onClick={() => setContador((cont) => cont + 1)}
    >
      {contador}
    </button>
  );
})

export default Contador;
