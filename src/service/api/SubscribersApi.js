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
				? `${URL}users/subscription/request?page=1&sort=o`
				: url === "" && navLink
				? `${URL}users/subscription/request?page=1&status=${navLink}&sort=o`
				: url && navLink === "all"
				? `${url}&sort=l`
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
};
