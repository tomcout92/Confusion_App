import React, { createContext, useState} from 'react';
import pacientModel from '../Datas/Pacientinfo';

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


