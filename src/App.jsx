/** @format */

import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

function App() {
  const UserRouting = useRoutes(UserRoutes);
  const AdminRouting = useRoutes(AdminRoutes);

  return (
    <Routes>
      <Route path="/*" element={UserRouting} />
      <Route path="/admin/*" element={AdminRouting} />
      <Route path="/login" element={AdminRouting} />
    </Routes>
  );
}

export default App;
