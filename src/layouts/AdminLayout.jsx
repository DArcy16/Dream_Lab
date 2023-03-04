/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <Header>
        <span>Admin Dashboard</span>
      </Header>

      <div className="flex">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
