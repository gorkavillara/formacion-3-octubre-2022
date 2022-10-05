import React, { createContext, useState, useReducer } from "react";

export const SpeedTestContext = createContext();

// const contadorReducer = (estadoActual, accionObjetivo) => {
//     if (accionObjetivo === "incrementar") return estadoActual + 1
//     if (accionObjetivo === "decrementar") return estadoActual - 1
//     if (accionObjetivo === "resetear") return 0
//     return estadoActual
// }

const writeReducer = (state, action) => {
  const { written, testPhrase } = action?.payload;
  if (action.type === "tryWrite") {
    if (written === "") return ""
    return written.substr(-1) === testPhrase.at(written.length - 1)
      ? written
      : state;
  }
  return state;
};

const SpeedTestContextProvider = ({ children }) => {
  const [writePhrase, dispatchWrite] = useReducer(writeReducer, "");
  const [testPhrase, setTestPhrase] = useState(
    "Esto es lo que pasa cuando se te deja solo"
  );
  return (
    <SpeedTestContext.Provider
      value={{ testPhrase, writePhrase, dispatchWrite }}
    >
      {children}
    </SpeedTestContext.Provider>
  );
};

export default SpeedTestContextProvider;
