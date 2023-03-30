import { createContext, useContext, useState } from "react";

const LoginBoxContext = createContext();

export const LoginBoxContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showAddChapterModal, setShowAddChapterModal] = useState(false);
  const [showEditChapterModal, setShowEditChapterModal] = useState(false);
  const dataValues = {
    show,
    setShow,
    showAddChapterModal,
    setShowAddChapterModal,
    showEditChapterModal,
    setShowEditChapterModal,
  };
  return (
    <LoginBoxContext.Provider value={dataValues}>
      {children}
    </LoginBoxContext.Provider>
  );
};

export const useLoginBoxContext = () => {
  return useContext(LoginBoxContext);
};
