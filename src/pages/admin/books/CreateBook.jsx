import React from "react";
import {BiLeftArrowAlt} from "react-icons/bi";

const CreateBook = () => {
  return (
    <div className=" p-7">
      <div className="flex items-center gap-[100px]">
        <button className=" flex gap-2 items-center font-semibold text-green">
          <BiLeftArrowAlt size={20}/> Back
        </button>
        <h3 className=" font-semibold">Create Book</h3>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        <div className="border-2 border-dashed min-h-[300px]">

        </div>
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default CreateBook;
