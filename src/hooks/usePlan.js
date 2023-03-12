import {  useMutation, useQuery } from "@tanstack/react-query"
import { createPlan, deletePlan, fetchPlans, updatePlan } from "../service/api/PlansApi"

export const usePlanData=()=>{
    return useQuery(['plans'], fetchPlans)
}

export const useCreatePlan=()=>{
    return useMutation(createPlan)
}

export const useUpdatePlan=()=>{
    return useMutation(updatePlan)
}

export const useDeletePlan=()=>{
    return useMutation(deletePlan)
}