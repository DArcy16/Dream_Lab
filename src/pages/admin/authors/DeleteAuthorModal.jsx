import React, { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { useDeleteAuthor } from "../../../hooks/useAuthor";

const DeleteAuthorModal = ({ editAuthor, setDeleteStatus, refreshData, navLink }) => {
  const deleteAuthorMutation = useDeleteAuthor();

  const onDeleteHandler = () => {
    deleteAuthorMutation.mutate({id: editAuthor.id, url: navLink });
  };

  useEffect(() => {
    if (deleteAuthorMutation.isSuccess) {
      refreshData();
      setDeleteStatus(false);
    }
  }, [deleteAuthorMutation.isSuccess]);
  
  return (
    <div className="absolute z-50 top-0 left-0 flex justify-center items-center w-full h-full bg-grey/30">
      <div className="fixed top-[30vh] w-1/4 h-fit bg-white p-8 rounded-lg shadow-md">
        <MdDeleteForever className="w-12 h-12 mx-auto" />
        <p className="text-center my-4">
          Are you sure you want to delete this author?
        </p>
        {deleteAuthorMutation.isError && (
          <p className="text-red-600">{deleteAuthorMutation.error.message}</p>
        )}

        <div className="flex w-full items-center justify-center gap-4">
          <button
            className="btn-cancel py-2 px-4"
            onClick={() => setDeleteStatus(false)}
          >
            Cancel
          </button>
          <button className="btn-delete py-2 px-4" onClick={onDeleteHandler}>
            {deleteAuthorMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAuthorModal;
