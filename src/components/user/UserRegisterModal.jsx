import React from 'react'
import { useLoginBoxContext } from '../../contexts/user/LoginBoxContext';
import { useRegisterBoxContext } from '../../contexts/user/RegisterBoxContext';
import {FiChevronsLeft} from "react-icons/fi";
import InputForm from '../form/InputForm';

const UserRegisterModal = () => {
  const {setShow}= useLoginBoxContext();
  const {setShowRegister}= useRegisterBoxContext();
  const handleChangeBox=()=>{
    setShowRegister(false);
    setShow(true);
  }
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
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 pb-5">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-grey bg-transparent text-sm p-1.5 ml-auto inline-flex items-center hover:text-grey4"
              data-modal-hide="authentication-modal"
              onClick={() => setShowRegister(false)}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
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
              <h3
                className="mb-4 flex items-center text-sm cursor-pointer gap-3 font-medium text-grey4"
                onClick={() => handleChangeBox()}
              >
                <FiChevronsLeft />
                Back to Login
              </h3>
              <h3 className=" text-center text-lg font-semibold">Register</h3>
              <p className=" text-center text-sm mb-5">
                Login to find new experiences
              </p>
              <form action="#">
                <InputForm type="email" id="email" placeholder="Email" />
                
                <InputForm type="password" id="password" placeholder="Password" />
                
                <InputForm type="password" id="re-password" placeholder="Re-enter Password" />
                <button
                  type="submit"
                  className="w-full btn-2 py-2 mt-4 transition-all duration-200 active:scale-95"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegisterModal