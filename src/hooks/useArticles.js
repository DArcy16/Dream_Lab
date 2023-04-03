import { useMutation, useQuery } from "@tanstack/react-query"
import { createArticle, getArticle, getArticleContent, getSingleArticle, getUserArticle, getUserSingleArticle, updateArticle } from "../service/api/ArticlesApi"

export const useArticle = (url) => {
    return useQuery(['articles', url],() =>  getArticle(url))
}

export const useUserArticle = (url) => {
	return useQuery(["userArticles", url], () => getUserArticle(url));
};

export const useCreateArticle = () => {
    return useMutation(createArticle);
}

export const useSingleArticle = (slug) => {
    return useQuery(['article', slug], () => getSingleArticle(slug))
}

export const useArticleContent = (slug) => {
	return useQuery(["articleContent", slug], () => getArticleContent(slug));
};

export const useUserSingleArticle = (slug) => {
	return useQuery(["article", slug], () => getUserSingleArticle(slug));
};

export const useUpdateArticle = () => {
    return useMutation(updateArticle);
}