/** @format */

import React, { useEffect, useState } from "react";

import { useLoginBoxContext } from "../../contexts/user/LoginBoxContext";
import { useRegisterBoxContext } from "../../contexts/user/RegisterBoxContext";
import InputForm from "../form/InputForm";
import * as yup from "yup";
import { useUserLogin } from "../../hooks/useUserAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const userLoginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().min(8).required(),
});

const UserLoginModal = () => {
  const { setShow } = useLoginBoxContext();
  const { setShowRegister } = useRegisterBoxContext();

  const userLoginMutation = useUserLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  const onSubmit = (data) => {
    userLoginMutation.mutate(data);
  };

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

              <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                  type="email"
                  id="email"
                  placeholder="Email"
                  register={register}
                />
                {errors.email && (
                  <p className=" text-red-400">{errors.email.message}</p>
                )}

                <InputForm
                  type="password"
                  id="password"
                  placeholder="Password"

                  register={register}

                />
                {errors.password && (
                  <p className=" text-red-400">{errors.password.message}</p>
                )}
                {userLoginMutation.isError && (
                  <p className=" text-red-400">
                    {userLoginMutation.error.message}
                  </p>
                )}

                <div className="flex justify-between mt-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        defaultValue
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
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
                  disabled={userLoginMutation.isLoading}
                >
                  {userLoginMutation.isLoading && (
                    <div role="status" className=" inline-block">
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
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
