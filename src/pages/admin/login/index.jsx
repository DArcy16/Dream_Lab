import React from "react";
import AdminLoginLogo from "../../../assets/adminlogin.png";
import Logo2 from "../../../assets/Logo2.svg";
const index = () => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="bg-[#E6FBFF] flex self-stretch items-center p-10">
        <img src={AdminLoginLogo} />
      </div>
      <div className="mt-32 flex-grow">
        <div className="flex justify-center">
          <img src={Logo2} style={{ width: "140px", height: "140px" }} />
        </div>

        <h2 className="font-semibold text-3xl mt-6 mb-7 px-14">
          Welcome to Dreamlab Admin
        </h2>

        <form className="flex flex-col gap-8 px-14">
          <div className="flex flex-col">
            <label for="email" className="font-2xl font-semibold mb-4">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-stoke rounded-md p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label for="password" className="font-2xl font-semibold mb-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-stoke rounded-md p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="self-start bg-dreamLabColor1 text-white rounded-xl py-2 text-lg font-semibold w-1/4"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
