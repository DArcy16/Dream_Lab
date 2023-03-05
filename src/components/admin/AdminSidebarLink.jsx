import React from "react";
import { Link } from "react-router-dom";

const AdminSidebarLink = ({ to, icon, title }) => {
  return (
    <li>
      <Link
        to={`${to}`}
        className="flex items-center text-white text-opacity-50 text-lg"
      >
        <span className="mr-4">{icon}</span>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default AdminSidebarLink;
