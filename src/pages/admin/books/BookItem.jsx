import React from "react";
import { MdDiamond } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BookItem = ({ book, bookNo }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-2">
      <div className=" flex items-center py-3 relative">
        <div className=" w-10 text-sm">{bookNo}.</div>
        <div className=" min-w-[150px] pr-5">
          <img src={book.mainImage} alt="" className=" w-[100px]" />
        </div>
        <div className=" w-1/6 text-sm font-medium pr-5">{book.title}</div>
        <div className=" w-1/6">
          <p className=" text-sm">author</p>
        </div>
        <div className=" w-auto flex gap-3">
          {book?.isFree ? (
            <button className=" bg-dreamLabColor4 text-white text-[13px] rounded-md px-5">
              free
            </button>
          ) : (
            <button className=" bg-green text-white text-[13px] rounded-md px-5">
              <MdDiamond />
            </button>
          )}
          {book.status === "p" ? (
            <button className=" bg-yellow-600 text-white text-[13px] rounded-md px-5">
              Pending
            </button>
          ) : (
            <button className=" bg-green text-white text-[13px] rounded-md px-5">
              active
            </button>
          )}
        </div>
        <div className=" w-auto px-5 flex gap-3">
          <span className=" h-fit p-2 border rounded-full text-[13px]">
            Management
          </span>
          <span className=" h-fit p-2 border rounded-full text-[13px]">
            Management and leadership
          </span>
        </div>
        <div className=" w-[60px] absolute right-0 top-0 bottom-0 bg-white flex justify-end items-center">
          <button
            className="btn-2 px-3 py-2 text-[15px]"
            onClick={() =>
              navigate(`edit/${book.slug}`, {
                state: { id: book?.id },
              })
            }
          >
            Edit
          </button>
        </div>
      </div>
      <div className=" w-full h-[1px] bg-greyNav"></div>
    </div>
  );
};

export default BookItem;
