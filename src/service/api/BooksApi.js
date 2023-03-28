import { getToken } from "../../utils/getToken";
import { URL } from "./api_endpoint";

export const fetchBooks = async () => {
  const token = getToken();
  const requestOption = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    method: "GET",
  };
  try {
    const response = await fetch(`${URL}books/admin`, requestOption);
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
      "Content-Type": "application/json",
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
