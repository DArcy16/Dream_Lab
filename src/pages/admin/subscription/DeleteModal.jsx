import React from 'react'
import { MdDeleteForever } from "react-icons/md";


const DeleteModal = ({setShowDeleteModal}) => {
  return (
    <div className="absolute z-50 top-0 left-0 flex justify-center items-center w-screen h-full bg-grey/30">
      <div className="fixed top-[30vh] w-1/4 h-fit bg-white p-8 rounded-lg shadow-md">
        <MdDeleteForever className="w-12 h-12 mx-auto" />
        <p className="text-center my-4">
          Are you sure you want to delete this subscription plan.
        </p>
        <div className="flex w-full items-center justify-center gap-4">
          <button
            className="btn-cancel py-2 px-4"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </button>
          <button className="btn-delete py-2 px-4">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal