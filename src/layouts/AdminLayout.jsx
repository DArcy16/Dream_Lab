/** @format */

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  const url = useLocation();
  const lastPath = url.pathname.split('/').slice(-1).join('');
  

  return (

    <div className="relative">

      <Header>
        { lastPath === "admin" ? "Admin Dashboard" : lastPath}
      </Header>

      <div className="flex w-screen gap-4 flex-shrink-0">
        <Sidebar />

        
        <Outlet />
        
      </div>
    </div>
  );
};

export default AdminLayout;
