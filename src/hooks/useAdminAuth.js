/** @format */

import { USER_DATA_LOCAL_STORAGE, TOKEN_LOCAL_STORAGE } from "./useUserAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../service/api/UserAuth";

export const useAdminLogin = () => {
  const navigate = useNavigate();
  return useMutation(userLogin, {
    onSuccess: (data) => {
      console.log("data from admin auth", data);
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data.access_token);
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(data));
      navigate(0);
      navigate("/admin");
    },
  });
};
