import { useMutation, useQuery } from "@tanstack/react-query";
import { createAuthor, deleteAuthor, fetchAuthors, fetchSingleAuthors, updateAuthor } from "../service/api/AuthorsApi.js";

export const useAuthorData = (navLink) => {
  return useQuery(["bookauthors", navLink],()=> fetchAuthors(navLink));
};

export const useCreateAuthor = (navLink) => {
  return useMutation(()=> createAuthor(navLink));
};

export const useUpdateAuthor = (navLink) => {
  return useMutation(()=>updateAuthor(navLink));
};

export const useDeleteAuthor = (navLink) => {
  return useMutation(()=>deleteAuthor(navLink));
};

export const useSingleAuthorData=(navLink)=>{
  return useQuery(["singleauthots", navLink], () =>
    fetchSingleAuthors(navLink)
  );
}
