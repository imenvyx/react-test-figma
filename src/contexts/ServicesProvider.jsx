import { React, createContext, useContext, useState } from "react";

const ServicesContext = createContext([]);

export function useServices() {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error();
  }
  return context;
}

export  default function ServicesProvider({ children }) {
  const [servicies, setServicies] = useState([]);
  const value = [servicies, setServicies];
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
}


