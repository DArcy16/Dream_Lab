/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (

    <div className="relative">

      <Header>
        <span>Admin Dashboard</span>
      </Header>

      <div className="flex w-screen gap-4 flex-shrink-0">
        <Sidebar />

        
        <Outlet />
        
      </div>
    </div>
  );
};

export default AdminLayout;
