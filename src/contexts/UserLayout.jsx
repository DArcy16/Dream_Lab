/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import UserLoginModal from "../components/user/UserLoginModal";
import UserRegisterModal from "../components/user/UserRegisterModal";
import Footer from "../components/user/Footer";

const UserLayout = () => {
  const status = false;

  return (
    <div>
      <Navbar />
      <article>
        <Outlet />
      </article>
      <Footer />
      {status ? (
        <div className="w-screen h-screen top-0">
          <UserLoginModal />
        </div>
      ) : null}
      {status ? (
        <div className="w-screen h-screen top-0">
            <UserRegisterModal />
        </div>
      ) : null}
    </div>
  );
};

export default UserLayout;
