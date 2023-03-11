import { getToken } from "../../utils/getToken"
import { URL } from "./api_endpoint";

export const fetchSubscription = async () => {
    const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const res = await fetch(`${URL}subscriptions`, requestOption);
		const result = await res.json();


		if (!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
}
