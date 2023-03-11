import { useMutation, useQuery } from "@tanstack/react-query"
import { createSubscripiton, deleteSubscription, fetchPlan, fetchSubscription } from "../service/api/SubscriptionApi"

export const useSubscriptions = () => {
    return useQuery(['subscriptions'], fetchSubscription);
}

export const useDeleteSubscriptions = () => {
    return useMutation(deleteSubscription);
}

export const useCreateSubscription = () => {
    return useMutation(createSubscripiton);
}

export const usePlanInSubscription = () => {
    return useQuery(['plansInSubscription'], fetchPlan);
}