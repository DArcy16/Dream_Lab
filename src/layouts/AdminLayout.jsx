/** @format */

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  const url = useLocation();
  const headerName = url.pathname.split('/').slice(2,3).join('');
  

  return (
		<div className="relative h-screen overflow-hidden">
			<Header>{headerName === "" ? "Admin Dashboard" : `${headerName}`}</Header>

			<div className="flex gap-4 flex-shrink-0 h-full">
				<Sidebar />

				<div className="w-full h-screen overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden pb-20">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
