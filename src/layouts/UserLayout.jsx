/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import UserLoginModal from "../components/user/UserLoginModal";
import UserRegisterModal from "../components/user/UserRegisterModal";
import Footer from "../components/user/Footer";
import {
  useLoginBoxContext,
} from "../contexts/user/LoginBoxContext";
import { useRegisterBoxContext } from "../contexts/user/RegisterBoxContext";

const UserLayout = () => {
  const { show } = useLoginBoxContext();
  const {showRegister} = useRegisterBoxContext();

  return (
    <div>
      <Navbar />
      <article>
        <Outlet />
      </article>
      <Footer />
      {show ? (
        <div className="">
          <UserLoginModal />
        </div>
      ) : null}
      {showRegister ? (
        <div className="">
          <UserRegisterModal />
        </div>
      ) : null}
    </div>
  );
};

export default UserLayout;
