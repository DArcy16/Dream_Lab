import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchBooks, fetchSingleBook } from "../service/api/BooksApi";
import {
  createCategory,
  deleteCategory,
  fetchCategories,
  updateCategory,
} from "../service/api/CategoriesApi";

export const useBooksData = () => {
  return useQuery(["books"], fetchBooks);
};

export const useSingleBookData = (slug) => {
  return useQuery(["books", slug], () => fetchSingleBook(slug));
};
export const useCreateCategory = () => {
  return useMutation(createCategory);
};

export const useUpdateCategory = () => {
  return useMutation(updateCategory);
};

export const useDeleteCategory = () => {
  return useMutation(deleteCategory);
};
