import { getToken } from "../../utils/getToken";

const URL = "http://159.223.60.208:3333/users/subscribe/subscription";

export const createSubscriberSubscripiton = async (data) => {
  const formData = new FormData();
  formData.append("paymentImage", data?.paymentImage);
  formData.append("subscriptionId", data?.subscriptionId);
  formData.append("startDate", data?.startDate);
  console.log("data from api ", data);
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "POST",
    body: formData,
  };

  try {
    const res = await fetch(`${URL}`, requestOption);
    const result = await res.json();

    if (!res.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
};
