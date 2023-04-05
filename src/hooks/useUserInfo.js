import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUserInfo, getSingleUserData, updateUserInfo } from "../service/api/UserInfo";



export const useSingleUserData = (id) => {
  return useQuery(["users",id],()=>getSingleUserData(id));
};


export const useUpdateUserInfo = () => {
  return useMutation(updateUserInfo);
};
