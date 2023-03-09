import { createContext, useContext } from "react";

const UserDataContext = createContext();

export const useUserDataContext = () => {
    return useContext(UserDataContext);
}

export const UserDataContextProvider = ({children}) => {
    return <UserDataContext.Provider value={{}}>
        {children}
    </UserDataContext.Provider>
}