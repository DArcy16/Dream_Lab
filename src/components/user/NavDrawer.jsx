import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdLocalLibrary } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavDrawer = () => {
  const [navShow, setNavShow] = useState(true);
  const [active, setActive] = useState("home");
  return (
    <div>
      <button
        className="md:hidden mr-5"
        type="button"
        data-drawer-target="drawer-backdrop"
        data-drawer-show="drawer-backdrop"
        aria-controls="drawer-backdrop"
        onClick={() => setNavShow(false)}
      >
        <BiMenuAltLeft size={25} />
      </button>
      {/* drawer component */}
      <div
        id="drawer-backdrop"
        className={`fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform ${
          navShow ? "-translate-x-full" : null
        } bg-[#1111118f] w-full dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-backdrop-label"
      >
        <div className="h-screen w-80 px-5 py-10 bg-white relative">
        <h5
          id="drawer-backdrop-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          DREAM LAB
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-backdrop"
          aria-controls="drawer-backdrop"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-8 right-5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setNavShow(true)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="flex flex-col gap-5 mt-3">
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
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
