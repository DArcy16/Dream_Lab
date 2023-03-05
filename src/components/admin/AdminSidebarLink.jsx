import React from "react";
import { Link } from "react-router-dom";

const AdminSidebarLink = ({ to, icon, title }) => {
  return (
    <li className="flex items-center text-white text-opacity-50 text-lg">
      <Link to={`/admin${to}`} />
      <span className="mr-4">{icon}</span>
      <p>{title}</p>
    </li>
  );
};

export default AdminSidebarLink;
