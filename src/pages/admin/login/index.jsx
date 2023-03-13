import React from "react";
import AdminLoginLogo from "../../../assets/adminlogin.png";
import Logo2 from "../../../assets/Logo2.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ClipLoader } from "react-spinners";
import { useAdminLogin } from "../../../hooks/useAdminAuth";

const index = () => {
  const adminLoginMutation = useAdminLogin();

  const UserLoginSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().min(8).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
  });

  const onSubmit = (data) => {
    adminLoginMutation.mutate(data);
  };

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

        <form
          className="flex flex-col gap-8 px-14"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="font-2xl font-semibold mb-4">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-stoke rounded-md p-2"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-2xl font-semibold mb-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-stoke rounded-md p-2"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-400">{errors.password.message}</p>
            )}
          </div>
          {adminLoginMutation.isError && (
            <p className="text-red-400">{adminLoginMutation.error.message}</p>
          )}
          <button
            type="submit"
            className="self-start bg-dreamLabColor1 text-white rounded-xl py-2 text-lg font-semibold w-1/4 flex items-center justify-center gap-2"
          >
            {adminLoginMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;
