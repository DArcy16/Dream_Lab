import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchBooks } from "../service/api/BooksApi";
import { createCategory, deleteCategory, fetchCategories, updateCategory } from "../service/api/CategoriesApi"

export const useBooksData= ()=>{
    return useQuery(['books'],fetchBooks);
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