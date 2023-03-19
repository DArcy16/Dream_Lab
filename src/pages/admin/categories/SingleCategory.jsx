import React from "react";

const SingleCategory = ({category,status,setCategoryId,setEditCategory}) => {
    const [setDeleteStatus,setEditStatus]=status;
  return (
    <div className="w-full p-4 shadow-xl rounded-lg border-x border-x-grey4/[.15] mt-4">
      <div className="flex justify-between items-center px-6">
        <div className="basis-3/4 flex items-center gap-4">
          <img src={category.icon} alt={category.name} className="w-[40px]"/>
          <h3 className=" my-2">{category.name}</h3>
        </div>
        <div className="basis-1/4 flex justify-end gap-5">
          <button
            className="btn-2 w-1/3 py-2"
            onClick={() => {
              setEditStatus(true);
              setEditCategory(category);
            }}
          >
            Edit
          </button>
          <button
            className="text-red-600 font-semibold hover:text-red-400"
            onClick={() => {
              setDeleteStatus(true);
              setCategoryId(category.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
