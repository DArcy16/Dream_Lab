import { useMutation, useQuery } from "@tanstack/react-query"
import { acceptSubscriber, getSubscribers, getSubscribersCount } from "../service/api/SubscribersApi"

export const useSubscribers = (url, navLink) => {
    return useQuery(['subscribers', url, navLink], () => getSubscribers(url, navLink)) 
}

export const useSubscribersCount = () => {
    return useQuery(['subscribersCount'], getSubscribersCount);
}

export const useAcceptSubscriber = () => {
    return useMutation(acceptSubscriber);
}