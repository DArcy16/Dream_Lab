/** @format */

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { BiSearch, BiMenuAltLeft, BiUserCircle } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdLocalLibrary } from "react-icons/md";
import UserLoginModal from "./UserLoginModal";
import Logo from "../../assets/Icon.svg";
import { useLoginBoxContext } from "../../contexts/user/LoginBoxContext";
import NavDrawer from "./NavDrawer";
import {
  TOKEN_LOCAL_STORAGE,
  USER_DATA_LOCAL_STORAGE,
} from "../../hooks/useUserAuth";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");
  const { show, setShow } = useLoginBoxContext();
  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();

  const userLogout = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActive("home");
    } else if (currentPath === "/library") {
      setActive("library");
    } else if (currentPath === "/pricing") {
      setActive("pricing");
    }
  }, [location]);
  
  useEffect(() => {
    if (token) {
      setIsLogin(true);
      setUser(JSON.parse(localStorage.getItem(USER_DATA_LOCAL_STORAGE)));
    } else {
      setIsLogin(false);
      setUser({});
    }
  }, [token]);

  return (
    <div className="w-full sticky top-0 left-0 right-0 shadow-sm bg-white z-50">
      <nav className="container mx-auto flex items-center justify-between h-[70px] md:h-[80px] text-[16px]">
        <div className="nav-left flex items-center">
          {/* drawer init and show */}
          <NavDrawer />
          <img src={Logo} className="mr-10" alt="logo" />
          <ul className="hidden md:flex gap-6 ">
            <li>
              <Link
                className={`flex items-center gap-2 ${
                  active === "home" ? "text-dreamLabColor1" : ""
                }`}
                to={"/"}
                onClick={() => setActive("home")}
              >
                <AiFillHome />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-2 ${
                  active === "library" ? "text-dreamLabColor1" : ""
                }`}
                to={"/"}
                onClick={() => setActive("library")}
              >
                <MdLocalLibrary />
                <p>Library</p>
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-2 ${
                  active === "pricing" ? "text-dreamLabColor1" : ""
                }`}
                to="/pricing"
                onClick={() => setActive("pricing")}
              >
                <RiMoneyDollarCircleFill />
                <p>Pricing</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right flex gap-5 lg:gap-10 items-center">
          <div className="hidden relative w-[45px] h-[45px] bg-dreamLabColor5 rounded-full md:grid place-items-center lg:block lg:w-auto lg:h-auto">
            <BiSearch className="lg:absolute text-[20px] top-[12px] left-3 text-dreamLabColor1" />
            <input
              type="text"
              placeholder="search here"
              className="bg-dreamLabColor5 text-grey4 focus-visible:outline-none py-3 pl-10 text-sm rounded-full md:hidden lg:inline-block"
            />
          </div>
          <div>
            {/* Modal toggle */}
            {isLogin ? (
              <div className="dropdown">
                <div
                  tabIndex={0}
                  className="avatar flex gap-3 items-center m-1 cursor-pointer"
                >
                  <div className="w-[45px] rounded-full">
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                  </div>
                  <p className=" font-semibold">
                    {user?.displayName ? user?.displayName : user?.email}
                  </p>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-white menu p-2 shadow  rounded-box w-52"
                >
                  <li>
                    <a className="hover:text-dreamLabColor2">
                      {" "}
                      <BiUserCircle size={20} /> My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={userLogout}
                      className="hover:text-dreamLabColor2"
                    >
                      {" "}
                      <AiOutlineLogout /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                type="button"
                className="btn-2 flex items-center justify-center gap-2 px-4 py-2 "
                onClick={() => setShow(true)}
              >
                <AiOutlineUser className=" text-[18px] select-none" />
                <p className=" select-none">Login</p>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
