/** @format */

import { getToken } from "../../utils/getToken";
import { URL } from "./api_endpoint";

const token = getToken();

export const getArticle = async (url) => {
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
			url === "" ? `${URL}articles/admin/?sorting=l` : `${url}&sorting=l`,
			requestOption
		);
		const data = await res.json();

		if (!res.ok) throw new Error();

		return data;
	} catch (error) {
		throw error;
	}
};

export const getUserArticle = async (url, cid) => {
	const requestOption = {
		headers: {
			// Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const res = await fetch(
			url === "" && cid === "" ? `${URL}articles/?sorting=l` 
			: url === "" && cid ? `${URL}articles/?sorting=l&categoryIds=[${cid}]` 
			: url && cid === "" ? `${url}&sorting=l` 
			:`${url}&sorting=l&categoryIds=[${cid}]`,
			requestOption
		);
		const data = await res.json();

		if (!res.ok) throw new Error();

		return data;
	} catch (error) {
		throw error;
	}
};

export const createArticle = async (data) => {
	const formData = new FormData();
	formData.append("title", data.title);
	formData.append("readingTime", data.readingTime);
	formData.append("shortDesc", data.shortDesc);
	formData.append("content", data.content);
	formData.append("isFree", data.isFree);
	formData.append("status", data.status);
	formData.append("articleAuthors", JSON.stringify(data.articleAuthors));
	formData.append("categories", JSON.stringify(data.categories));
	formData.append("mainImage", data.icon, data.icon.name);

	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "POST",
		body: formData,
	};

	try {
		const res = await fetch(`${URL}articles`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};

export const getSingleArticle = async (slug) => {
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const res = await fetch(`${URL}articles/admin/${slug}`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};

export const getUserSingleArticle = async (slug) => {
	const requestOption = {
		mode: "cors",
		method: "GET",
	};

	try {
		const res = await fetch(`${URL}articles/${slug}`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};

export const getArticleContent = async (slug) => {
	const requestOption = {
		headers : {
			Authorization : `Bearer ${token}`
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const res = await fetch(`${URL}articles/content/${slug}`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};

export const updateArticle = async (data) => {
	const formData = new FormData();
	formData.append("title", data.title);
	formData.append("readingTime", data.readingTime);
	formData.append("shortDesc", data.shortDesc);
	formData.append("content", data.content);
	formData.append("isFree", data.isFree);
	formData.append("status", data.status);
	formData.append("articleAuthors", JSON.stringify(data.articleAuthors));
	formData.append("categories", JSON.stringify(data.categories));
	formData.append("mainImage", data.icon);

	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
			
		},
		mode: "cors",
		method: "PATCH",
		body: formData
	};

	try {
		const res = await fetch(`${URL}articles/${data.id}`, requestOption);
		const result = await res.json();

		if(!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};
