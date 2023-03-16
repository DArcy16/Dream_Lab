import { useMutation, useQuery } from "@tanstack/react-query"
import { createSubscripiton, deleteSubscription, fetchPlan, fetchSubscription, getSingleSubscription, removePlan, updateSubscription } from "../service/api/SubscriptionApi"

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

export const useSubscription = (id) => {
    return useQuery(['subscription', id], () => getSingleSubscription(id))
}

export const useUpdateSubscription = () => {
    return useMutation(updateSubscription);
}

export const useRemovePlan = () => {
    return useMutation(removePlan)
}