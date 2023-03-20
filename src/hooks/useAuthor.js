import { useMutation, useQuery } from "@tanstack/react-query";
import { createAuthor, deleteAuthor, fetchAuthors, updateAuthor } from "../service/api/AuthorsApi.js";

export const useAuthorData = (navLink) => {
  return useQuery(["bookauthors", navLink],()=> fetchAuthors(navLink));
};

export const useCreateAuthor = () => {
  return useMutation(createAuthor);
};

export const useUpdateAuthor = () => {
  return useMutation(updateAuthor);
};

export const useDeleteAuthor = () => {
  return useMutation(deleteAuthor);
};


