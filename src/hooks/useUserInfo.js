import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUserInfo, getSingleUserData, updateUserInfo } from "../service/api/UserInfo";

export const useUserDatas = () => {
  return useQuery(["users"],fetchUserInfo);
};

export const useUserData = (user) => {
  return useQuery(["users",user],()=>getSingleUserData(user));
};


export const useUpdateUserInfo = () => {
  return useMutation(updateUserInfo);
};
