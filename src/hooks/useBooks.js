import { useMutation, useQuery } from "@tanstack/react-query";
import { useLoginBoxContext } from "../contexts/user/LoginBoxContext";
import {
  fetchBooks,
  fetchSingleBook,
  updateChapter,
  createChapter,
  deleteChapter,
  createBook,
  updateBook,
  fetchChaptersOfBook,
  fetchUserBooks,
  fetchUserSingleBook,
} from "../service/api/BooksApi";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "../service/api/CategoriesApi";

export const useBooksData = (url) => {
  return useQuery(["books", url], () => fetchBooks(url));
};

export const useChaptersOfBook = (slug) => {
	return useQuery(["chapters", slug], () => fetchChaptersOfBook(slug));
};

export const useSingleBookData = (slug) => {
  return useQuery(["books", slug], () => fetchSingleBook(slug));
};

export const useCreateChapter = (handleRefresh) => {
  const { setShowAddChapterModal } = useLoginBoxContext();
  return useMutation(createChapter, {
    onSuccess: () => {
      setShowAddChapterModal(false);
      handleRefresh();
    },
  });
};

export const useUpdateChapter = (handleRefresh) => {
  const { setShowEditChapterModal } = useLoginBoxContext();
  return useMutation(updateChapter, {
    onSuccess: () => {
      setShowEditChapterModal(false);
      handleRefresh();
    },
  });
};

export const useUpdateBook = () => {
	return useMutation(updateBook);
};

export const useDeleteChapter = (handleRefresh) => {
  return useMutation(deleteChapter, {
    onSuccess: () => {
      handleRefresh();
    },
  });
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

export const useCreateBook = () => {
	return useMutation(createBook);
};

export const useUserBook = (url) => {
  return useQuery(["userBooks", url], () => fetchUserBooks(url))
}

export const useUserSingleBookData = (slug) => {
	return useQuery(["books", slug], () => fetchUserSingleBook(slug));
};
