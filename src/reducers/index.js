export const initialWriteState = {
  testPhrase: "Esto es lo que pasa cuando se te deja solo", // La frase que tenemos que tratar de replicar
  writePhrase: "", // La frase que estamos escribiendo
  timeInitialized: undefined,
  timeElapsed: undefined,
};

// fetchPhrase => de forma asíncrona llamar a una base de datos

// export const writeReducer = (state = initialWriteState, action) => {
export const writeReducer = (state, action) => {
  if (action.type === "tryWrite") {
    const { written, testPhrase } = action?.payload;
    if (written === "") return { ...state, writePhrase: "" };
    if (written === state.testPhrase) {
      const now = new Date();
      return {
        ...state,
        timeElapsed: (now.getTime() - state.timeInitialized.getTime()) / 1000,
      };
    }

    return written.substr(-1) === testPhrase.at(written.length - 1)
      ? {
          ...state,
          timeInitialized:
            written.length === 1 ? new Date() : state.timeInitialized,
          writePhrase: written,
        }
      : state;
  }
  if (action.type === "reset") {
    return initialWriteState;
  }
  return state;
};
