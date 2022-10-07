import React, { createContext, useState, useReducer } from "react";
import { writeReducer, initialWriteState } from "../reducers";

export const SpeedTestContext = createContext();

// const contadorReducer = (estadoActual, accionObjetivo) => {
//     if (accionObjetivo === "incrementar") return estadoActual + 1
//     if (accionObjetivo === "decrementar") return estadoActual - 1
//     if (accionObjetivo === "resetear") return 0
//     return estadoActual
// }

// const writeState = ""

const SpeedTestContextProvider = ({ children }) => {
  // const [writePhrase, dispatchWrite] = useReducer(writeReducer, writeReducer());
  const [writeState, dispatchWrite] = useReducer(
    writeReducer,
    initialWriteState
  );

  // const [testPhrase, setTestPhrase] = useState(
  //   "Esto es lo que pasa cuando se te deja solo"
  // );
  // Toda la lógica dentro del componente
  return (
    <SpeedTestContext.Provider
      value={{
        testPhrase: writeState.testPhrase,
        writePhrase: writeState.writePhrase,
        timeElapsed: writeState.timeElapsed,
        dispatchWrite,
      }}
    >
      {children}
    </SpeedTestContext.Provider>
  );
};

export default SpeedTestContextProvider;
