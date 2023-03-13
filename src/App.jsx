/** @format */

import "./App.css";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { LoginBoxContextProvider } from "./contexts/user/LoginBoxContext";
import { RegisterBoxContextProvider } from "./contexts/user/RegisterBoxContext";
import { UserDataContextProvider } from "./contexts/UserDataContext";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import { useEffect, useState } from "react";
import { TOKEN_LOCAL_STORAGE } from "./hooks/useUserAuth";
import { URL } from "./service/api/api_endpoint";
const queryClient = new QueryClient();

function App() {
  const UserRouting = useRoutes(UserRoutes);
  const AdminRouting = useRoutes(AdminRoutes);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_LOCAL_STORAGE));
  const [isAdmin, setIsAdmin] = useState(false);

  console.log(
    "localStorage.getItem(TOKEN_LOCAL_STORAGE)",
    localStorage.getItem(TOKEN_LOCAL_STORAGE)
  );
  const checkAdmin = async () => {
    const requestOption = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      method: "GET",
    };
    const response = await fetch(`${URL}auths/isAdmin`, requestOption);

    return response.status;
  };

  useEffect(() => {
    checkAdmin().then((rep) => {
      if (rep === 200) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
  }, [token]);
  return (
    <LoginBoxContextProvider>
      <RegisterBoxContextProvider>
        <UserDataContextProvider>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/*" element={UserRouting} />
              <Route
                path="/login"
                element={
                  isAdmin ? <Navigate to="/admin" replace /> : AdminRouting
                }
              />
              <Route
                path="/admin/*"
                element={isAdmin ? AdminRouting : <Navigate to="/login" />}
              />
            </Routes>
          </QueryClientProvider>
        </UserDataContextProvider>
      </RegisterBoxContextProvider>
    </LoginBoxContextProvider>
  );
}

export default App;
