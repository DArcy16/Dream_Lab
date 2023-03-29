/** @format */

import { getToken } from "../../utils/getToken";
import { URL } from "./api_endpoint";

export const getSubscribers = async (url, navLink) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const res = await fetch(
			url === "" && navLink === "all"
				? `${URL}users/subscription/request?page=1`
				: url === "" && navLink
				? `${URL}users/subscription/request?page=1&status=${navLink}` 
				: url && navLink === "all"
				? `${url}`
				: `${url}&status=${navLink}&sort=o`,
			requestOption
		);
		const data = await res.json();
		if (!res.ok) throw new Error(data.message);

		return data;
	} catch (error) {
		throw error;
	}
};

export const getSubscribersCount = async () => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const res = await fetch(
			`${URL}users/subscription/totalCount`,
			requestOption
		);
		const data = await res.json();
		if (!res.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const acceptSubscriber = async (data) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		mode: "cors",
		method: "POST",
		 body: JSON.stringify(data.body),
	};

	try {
		const res = await fetch(

			`${URL}users/subscribe/subscription/${data.id}`,
			requestOption
		);
		const result = await res.json();
		if (!res.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
}

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
    const res = await fetch(
			`${URL}users/subscribe/subscription`,
			requestOption
		);
    const result = await res.json();

    if (!res.ok) throw new Error(result.message);

    return result;
  } catch (error) {
    throw error;
  }
}
