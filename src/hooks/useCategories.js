import { useMutation, useQuery } from "@tanstack/react-query"
import { createCategory, deleteCategory, fetchCategories, updateCategory } from "../service/api/CategoriesApi"

export const useCategoryData= ()=>{
    return useQuery(['categories'],fetchCategories);
};

export const useCreateCategory=()=>{
    return useMutation(createCategory);
};

export const useUpdateCategory=()=>{
    return useMutation(updateCategory);
};

export const useDeleteCategory=()=>{
    return useMutation(deleteCategory);
};