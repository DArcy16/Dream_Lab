import { useMutation, useQuery } from "@tanstack/react-query";
import { useLoginBoxContext } from "../contexts/user/LoginBoxContext";
import {
  fetchBooks,
  fetchSingleBook,
  updateChapter,
  createChapter,
  deleteChapter,
} from "../service/api/BooksApi";
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
