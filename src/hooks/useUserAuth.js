/** @format */

import { useMutation } from "@tanstack/react-query";
import { useLoginBoxContext } from "../contexts/user/LoginBoxContext";
import { useRegisterBoxContext } from "../contexts/user/RegisterBoxContext";
import { userLogin, userRegister } from "../service/api/UserAuth";

export const USER_DATA_LOCAL_STORAGE = "dreamlab-user";
export const TOKEN_LOCAL_STORAGE = "dreamlab-token";

export const useUserRegister = () => {
  const { setShow } = useLoginBoxContext();
  const { setShowRegister} = useRegisterBoxContext();
  return useMutation(userRegister, {
    onSuccess: (data) => {
      setTimeout(() => {
        setShowRegister(false);
        setShow(true);
      }, 2000);
    },
  });
};

export const useUserLogin = () => {
  const { setShow } = useLoginBoxContext();
  return useMutation(userLogin, {
    onSuccess: (data) => {
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data.access_token);
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(data));
      setShow(false);
      location.reload();
    },
  });
};
