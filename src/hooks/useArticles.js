import { useMutation, useQuery } from "@tanstack/react-query"
import { createArticle, getArticle, getSingleArticle, updateArticle } from "../service/api/ArticlesApi"

export const useArticle = (url) => {
    return useQuery(['articles', url],() =>  getArticle(url))
}

export const useCreateArticle = () => {
    return useMutation(createArticle);
}

export const useSingleArticle = (slug) => {
    return useQuery(['article', slug], () => getSingleArticle(slug))
}

export const useUpdateArticle = () => {
    return useMutation(updateArticle);
}