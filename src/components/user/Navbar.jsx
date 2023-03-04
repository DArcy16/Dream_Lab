import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BiSearch, BiMenuAltLeft } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdLocalLibrary } from "react-icons/md";
import UserLoginModal from "./UserLoginModal";
import { useLoginBoxContext } from "../../contexts/user/LoginBoxContext";
import NavDrawer from "./NavDrawer";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const { show, setShow } = useLoginBoxContext();
  return (
    <div className="w-full sticky top-0 left-0 right-0 shadow-sm bg-white">
      <nav className="container mx-auto flex items-center justify-between h-[70px] md:h-[80px] text-[16px]">
        <div className="nav-left flex items-center">
          {/* drawer init and show */}
          {
            <NavDrawer/>
          }
          <div className="logo mr-10">
            <p>DREAM LAB</p>
          </div>
          <ul className="hidden md:flex gap-6 ">
            <li>
              <Link
                className={`flex items-center gap-2 ${
                  active == "home" ? "text-dreamLabColor1" : null
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
                  active == "library" ? "text-dreamLabColor1" : null
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
                  active == "pricing" ? "text-dreamLabColor1" : null
                }`}
                to={"/"}
                onClick={() => setActive("pricing")}
              >
                <RiMoneyDollarCircleFill />
                <p>Pricing</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right flex gap-5 lg:gap-10 items-center">
          <div className=" hidden relative w-[45px] h-[45px] bg-dreamLabColor5 rounded-full md:grid place-items-center lg:block lg:w-auto lg:h-auto">
            <BiSearch className=" lg:absolute text-[20px] top-[12px] left-3 text-dreamLabColor1" />
            <input
              type="text"
              placeholder="search here"
              className="bg-dreamLabColor5 text-grey4 focus-visible:outline-none py-3 pl-10 text-sm rounded-full md:hidden lg:inline-block"
            />
          </div>
          <div>
            {/* Modal toggle */}
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              type="button"
              className=" bg-dreamLabColor2 px-3 py-2 flex text-[16px] rounded-[8px] gap-2 items-center cursor-pointer transition-all duration-75 active:scale-95"
              onClick={() => setShow(true)}
            >
              <AiOutlineUser className=" text-[18px] select-none" />
              <p className=" select-none">Login</p>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
