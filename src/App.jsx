/** @format */

import "./App.css";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

function App() {
  const UserRouting = useRoutes(UserRoutes);
  const AdminRouting = useRoutes(AdminRoutes);
  const isAdmin = true;

  return (
    <Routes>
      <Route path="/*" element={UserRouting} />
      <Route path="/admin/*" element={isAdmin ? AdminRouting : <Navigate to='/login' /> } />
      <Route path="/login" element={isAdmin ? <Navigate to='/admin' replace /> : AdminRouting} />
    </Routes>
  );
}

export default App;
