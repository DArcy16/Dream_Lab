/** @format */

import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useLoginBoxContext } from "../../contexts/user/LoginBoxContext";
import { useRegisterBoxContext } from "../../contexts/user/RegisterBoxContext";
import InputForm from "../form/InputForm";

const UserLoginModal = () => {
  const { setShow } = useLoginBoxContext();
  const { setShowRegister } = useRegisterBoxContext();
  const handleChangeBox = () => {
    setShow(false);
    setShowRegister(true);
  };
  return (
    <div>
      {/* Main modal */}
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed grid place-items-center text-[#222222] bg-[#1c1c1ca3] top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
      >
        <div className=" w-full max-w-md h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-grey bg-transparent text-sm p-1.5 ml-auto inline-flex items-center hover:text-grey4"
              data-modal-hide="authentication-modal"
              onClick={() => setShow(false)}
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
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="my-4 text-center text-xl font-bold text-grey4">
                Login
              </h3>
              <form action="#">
                <InputForm type="email" id="email" placeholder="Email" />

                <InputForm
                  type="password"
                  id="password"
                  placeholder="Password"
                />
                <div className="flex justify-between mt-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-grey2 hover:underline dark:text-blue-500"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full btn-2 py-2 mt-4 transition-all duration-200 active:scale-95"
                >
                  Login
                </button>
                <div className="text-sm mt-2 font-medium text-grey2 text-center">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-grey hover:underline dark:text-blue-500 ml-2"
                    onClick={() => handleChangeBox()}
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginModal;
