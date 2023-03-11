import { useQuery } from "@tanstack/react-query"
import { fetchSubscription } from "../service/api/SubscriptionApi"

export const useSubscriptions = () => {
    return useQuery(['subscriptions'],fetchSubscription);
}