import { createContext, useContext, useState } from "react";

const RegisterBoxContext = createContext();

export const RegisterBoxContextProvider = ({ children }) => {
  const [showRegister, setShowRegister] = useState(false);
  const dataValues= {
    showRegister,
    setShowRegister,
  }
  return (
    <RegisterBoxContext.Provider value={dataValues}>
      {children}
    </RegisterBoxContext.Provider>
  );
};

export const useRegisterBoxContext = () => {
  return useContext(RegisterBoxContext);
};
