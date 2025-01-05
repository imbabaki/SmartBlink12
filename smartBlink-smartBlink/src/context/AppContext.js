import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [globalIP, setGlobalIP] = useState(""); // State to manage the global IP

  return (
    <AppContext.Provider value={{ globalIP, setGlobalIP }}>
      {children}
    </AppContext.Provider>
  );
};
