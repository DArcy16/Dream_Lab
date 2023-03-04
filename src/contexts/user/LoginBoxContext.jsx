import { createContext, useContext, useState } from "react";

const LoginBoxContext = createContext();

export const LoginBoxContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const dataValues= {
    show,
    setShow,
  }
  return (
    <LoginBoxContext.Provider value={dataValues}>
      {children}
    </LoginBoxContext.Provider>
  );
};

export const useLoginBoxContext = () => {
  return useContext(LoginBoxContext);
};
