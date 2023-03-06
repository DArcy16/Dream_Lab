/** @format */

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  const url = useLocation();
  const headerName = url.pathname.split('/').slice(2,3).join('');
  

  return (

    <div className="relative">

      <Header>
        { headerName === '' ? "Admin Dashboard" : `${headerName}s`}
      </Header>

      <div className="flex gap-4 flex-shrink-0">
        <Sidebar />

        
        <Outlet />
        
      </div>
    </div>
  );
};

export default AdminLayout;
