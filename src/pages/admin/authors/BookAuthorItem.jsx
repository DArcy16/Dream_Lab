import React from "react";

const BookAuthorItem = ({item, setDeleteStatus, setEditStatus,setEditAuthor,setKey }) => {
  return (
    <div className="w-full p-4 shadow-xl rounded-lg border-x border-x-grey4/[.15] mt-4">
      <div className="flex justify-between items-center px-6">
        <div className="basis-1/4">
          <h3 className=" my-2">{item.name}</h3>
        </div>
        <div className="basis-1/4 ">
          {item.status === "a" ? (
            <div className="px-1  py-1 bg-green text-white text-sm font-semibold rounded-full text-center">
              Active
            </div>
          ) : (
            <div className="px-1  py-1 bg-orangee text-white text-sm font-semibold rounded-full text-center">
              Pending
            </div>
          )}{" "}
        </div>
        <div className="basis-1/4 flex justify-end gap-4">
          <button
            className="btn-2 w-1/3 py-2"
            onClick={() => {
              setEditStatus(true);
              setEditAuthor(item);
            }}
          >
            Edit
          </button>
          <button
            className="text-red-600 font-semibold hover:text-red-400"
            onClick={() => {
              setDeleteStatus(true);
              setKey(item.key);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAuthorItem;
