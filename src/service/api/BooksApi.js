/** @format */

import { getToken } from "../../utils/getToken";
import { URL } from "./api_endpoint";

export const fetchBooks = async (url) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
	};
	try {
		const response = await fetch(
			url === "" ? `${URL}books/admin?sorting=l` : `${url}&sorting=l`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchUserBooks = async (url, cid) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "GET",
	};

	try {
		const response = await fetch(
			url === "" && cid === ""
				? `${URL}books?sorting=l`
				: url === "" && cid
				? `${URL}books?sorting=l&categoryIds=[${cid}]`
				: url && cid === "" ? `${url}&sorting=l`
        :`${url}&sorting=l&categoryIds=[${cid}]`,
			requestOption
		);
		const data = await response.json();
		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchSingleBook = async (slug) => {
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
		const response = await fetch(`${URL}books/admin/${slug}`, requestOption);
		const data = await response.json();

		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchUserSingleBook = async (slug) => {
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
		const response = await fetch(`${URL}books/${slug}`, requestOption);
		const data = await response.json();

		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const createBook = async (data) => {
	const token = getToken();

	const formData = new FormData();
	formData.append("title", data.title);
	formData.append("page", data.page);
	formData.append("readingTime", data.readingTime);
	formData.append("shortDesc", data.shortDesc);
	formData.append("isFree", data.isFree);
	formData.append("status", data.status);
	formData.append("bookAuthors", JSON.stringify(data.bookAuthors));
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
		const res = await fetch(`${URL}books`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};

export const updateBook = async (data) => {
	const token = getToken();
	const formData = new FormData();
	formData.append("title", data.title);
	formData.append("page", data.page);
	formData.append("readingTime", data.readingTime);
	formData.append("shortDesc", data.shortDesc);
	formData.append("isFree", data.isFree);
	formData.append("status", data.status);
	formData.append("bookAuthors", JSON.stringify(data.bookAuthors));
	formData.append("categories", JSON.stringify(data.categories));
	formData.append("mainImage", data.icon);

	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "PATCH",
		body: formData,
	};

	try {
		const res = await fetch(`${URL}books/${data.id}`, requestOption);
		const result = await res.json();

		if (!res.ok) throw new Error(result.message);

		return result;
	} catch (error) {
		throw error;
	}
};

export const fetchChaptersOfBook = async (id) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		mode: "cors",
		method: "GET",
	};
	try {
		const response = await fetch(`${URL}books/chapters/${id}`, requestOption);
		const data = await response.json();

		if (!response.ok) throw new Error(data.message);
		return data;
	} catch (error) {
		throw error;
	}
};

export const createChapter = async (data) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "POST",
		body: JSON.stringify(data),
	};
	try {
		const response = await fetch(`${URL}books/chapter`, requestOption);
		const result = await response.json();
		if (!response.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};

export const updateChapter = async (data) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "PATCH",
		body: JSON.stringify(data?.body),
	};
	try {
		const response = await fetch(
			`${URL}books/chapter/${data?.chapterId}`,
			requestOption
		);
		const result = await response.json();
		if (!response.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};

export const deleteChapter = async (chapterId) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "DELETE",
	};
	try {
		const response = await fetch(
			`${URL}books/chapter/${chapterId}`,
			requestOption
		);
		const result = await response.json();
		if (!response.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};

export const createCategory = async (data) => {
	const token = getToken();
	const formData = new FormData();
	formData.append("name", data.name);
	formData.append("icon", data.icon, data.icon.name);
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "POST",
		body: formData,
	};
	try {
		const response = await fetch(`${URL}categories`, requestOption);
		const result = await response.json();
		if (!response.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};

export const updateCategory = async (data) => {
	const token = getToken();
	const formData = new FormData();
	formData.append("name", data.name);
	formData.append("icon", data.icon);
	const requestOption = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "PATCH",
		body: formData,
	};
	try {
		const response = await fetch(`${URL}categories/${data.id}`, requestOption);
		const result = await response.json();
		if (!response.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};

export const deleteCategory = async (id) => {
	const token = getToken();
	const requestOption = {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		mode: "cors",
		method: "DELETE",
	};
	try {
		const response = await fetch(`${URL}categories/${id}`, requestOption);
		const result = await response.json();
		if (!response.ok) throw new Error(result.message);
		return result;
	} catch (error) {
		throw error;
	}
};
