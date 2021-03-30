import React, { createContext, useState, useContext } from 'react';
import pacientModel from '../Pages/Pacientinfo';

const PacientContext = createContext({});

export const PacientProvider = ({ children }) => {
  const [pacient, setPacient] = useState(pacientModel);
  return (
    <PacientContext.Provider value={{pacient, setPacient}}>
      {children}
    </PacientContext.Provider>
  );
}

export default PacientContext;
//export function usePacient() {
// const context = useContext(PacientContext);
//
// if (!context) {
//   throw new Error("usePacient must be used with a pacient provider");
// }
//
// return context;
//
//


