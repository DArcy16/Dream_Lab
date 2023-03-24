import { useQuery } from "@tanstack/react-query"
import { getArticle } from "../service/api/ArticlesApi"

export const useArticle = () => {
    return useQuery(['articles'], getArticle)
}