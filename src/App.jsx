/** @format */

import "./App.css";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import { LoginBoxContextProvider } from "./contexts/user/LoginBoxContext";
import { RegisterBoxContextProvider } from "./contexts/user/RegisterBoxContext";

function App() {
  const UserRouting = useRoutes(UserRoutes);
  const AdminRouting = useRoutes(AdminRoutes);
  const isAdmin = false;

  return (

    <LoginBoxContextProvider>
      <RegisterBoxContextProvider>
        <Routes>
          <Route path="/*" element={UserRouting} />
          <Route path="/login" element={AdminRouting} />
          <Route path="/admin/*" element={AdminRouting} />
        </Routes>
      </RegisterBoxContextProvider>
    </LoginBoxContextProvider>

  );
}

export default App;
