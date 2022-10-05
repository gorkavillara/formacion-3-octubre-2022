import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [vRoute, setVRoute] = useState("home");
  return (
    <AppContext.Provider value={{ vRoute, setVRoute }}>
      {/* Lo que tengamos aquí dentro puede acceder a esos valores */}
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
