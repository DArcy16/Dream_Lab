import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

const BookNav = ({total}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full mb-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h3 className=" font-semibold">Uploaded Books</h3>
          <p>Total : {total}</p>
        </div>
        <button
          className=" btn-2 px-5 py-2 flex items-center gap-2"
          onClick={() => navigate("create")}
        >
          <AiFillPlusCircle />
          Create Book
        </button>
      </div>
      <div className=" flex items-center gap-3 xl:gap-5 mt-5 xl:mt-7">
        <select
          className="select text-sm select-bordered w-full max-w-[200px] xl:max-w-[250px] focus:outline-none rounded-md text-[#807f7f]"
          defaultValue={1}
        >
          <option className=" text-sm" value={1}>
            All
          </option>
          <option className=" text-sm">Latest</option>
          <option className=" text-sm">Recent</option>
        </select>
        <select
          className="select text-sm select-bordered w-full max-w-[200px] xl:max-w-[250px] focus:outline-none rounded-md text-[#807f7f]"
          defaultValue={1}
        >
          <option className=" text-sm" disabled value={1}>
            Category
          </option>
          <option className=" text-sm">Management</option>
        </select>
        <select
          className="select text-sm select-bordered w-full max-w-[200px] xl:max-w-[250px] focus:outline-none rounded-md text-[#807f7f]"
          defaultValue={1}
        >
          <option className=" text-sm" disabled value={1}>
            All Authors
          </option>
          <option className=" text-sm">Mr.David</option>
        </select>
        <input
          type="text"
          placeholder="Search here"
          className="input text-sm input-bordered w-full focus:outline-none rounded-md text-[#807f7f]"
        />
      </div>
    </div>
  );
};

export default BookNav;
