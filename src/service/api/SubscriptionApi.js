/** @format */

import { getToken } from "../../utils/getToken";
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
};

export const deleteSubscription = async (id) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "DELETE",
		redirect: "follow",
	};
	try {
		const res = await fetch(`${URL}subscriptions/${id}`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};

export const createSubscripiton = async (data) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "POST",
		body: JSON.stringify(data),
	};

	try {
		const res = await fetch(`${URL}subscriptions`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};

export const fetchPlan = async () => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const res = await fetch(`${URL}plans`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};

export const getSingleSubscription = async (id) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
	};
	try {
		const res = await fetch(`${URL}subscriptions/${id}`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};

export const updateSubscription = async (data) => {
    const token = getToken();
    const requestOption = {
        headers : {
            Authorization : `Bearer ${token}`,
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        },
        mode: 'cors',
        method : 'PATCH',
        body : JSON.stringify(data)
    }
    try {
        const res = await fetch(`${URL}subscriptions/${data.id}`, requestOption)
        const result = await res.json();
        
        if(!res.ok) throw new Error(result.message)

        return result;
    } catch (error) {
        throw error;
    }
}

export const removePlan = async (id) => {
    const token = getToken();
    const requestOption = {
        headers : {
            Authorization : `Bearer ${token}`
        },
        mode : 'cors',
        method : 'DELETE'
    }
    try {
        const res = await fetch(`${URL}subscriptions/plan/${id}`, requestOption)
        const result = await res.json();
 
        if(!res.ok) throw new Error(result.message)
        return result;
    } catch (error) {
        throw error;
    }
};
