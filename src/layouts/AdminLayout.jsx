/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Header>
        <h3>Admin Dashboard</h3>
      </Header>
      <div className="flex w-screen h-screen flex-shrink-0">
        <Sidebar />

        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
