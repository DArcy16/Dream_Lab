import React, { useEffect } from "react";
import { RiFileCopy2Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { useBooksData } from "../../../hooks/useBooks";
import BookItem from "./BookItem";
import BookNav from "./BookNav";
import BookPagination from "./BookPagination";

const index = () => {
  const { isError, isLoading, error, data, refetch } = useBooksData();
  console.log(data);

  const refreshData = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <section className="flex items-center justify-center h-screen w-full">
        <ClipLoader />
      </section>
    );
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className=" flex flex-col items-center overflow-hidden w-full">
      <div className=" w-full p-7">
        <BookNav total={data?.meta.totalItems} />
        {data?.items?.length > 0 ? (
          data?.items?.map((item, index) => (
            <BookItem key={index} book={item} bookNo={index + 1} />
          ))
        ) : (
          <div className="w-full pt-32">
            <RiFileCopy2Line className="w-24 h-24 mx-auto text-grey2" />
            <p className="text-center mt-2 text-grey2">
              You have no books created yet.
            </p>
          </div>
        )}
      </div>
      <BookPagination/>
    </div>
  );
};

export default index;
