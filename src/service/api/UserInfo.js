import { getToken } from "../../utils/getToken";
import { URL } from "./api_endpoint";
import dayjs from "dayjs";

export const fetchUserInfo = async () => {
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };
  try {
    const response = await fetch(`${URL}users`, requestOption);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserInfo = async (data) => {
  const formData = new FormData();
  formData.append("displayName", data.name)
  formData.append("dob", dayjs(data.dob).format("YYYY-MM-DD"))
  formData.append("email", data.email)
  formData.append("profileImage", data.profileImage)
  formData.append("phoneNumber", data.phoneNumber)
  
  const token = getToken();
  const requestOption = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "PATCH",
    body: formData,
  };
  try {
    const response = await fetch(`${URL}users/${data.id}`, requestOption);
    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};

export const getSingleUserData = async (id) => {
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };
  try {
    const response = await fetch(`${URL}users/${id}`, requestOption);
    const result = await response.json();

    if (!response.ok) throw new Error(result.message);
    return result;
  } catch (error) {
    throw error;
  }
};
