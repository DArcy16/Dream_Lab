import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Chapter from "./Chapter";
import { useSingleBookData } from "../../../hooks/useBooks";

const UpdataBook = () => {
  const { id } = useParams();
  //159.223.60.208:3333/books/{{bookSlug}}
  const location = useLocation();
  const slug = location?.state?.slug;
  const { isError, isLoading, error, data, refetch } = useSingleBookData(slug);

  const handleRefresh = () => {
    refetch();
  };
  return (
    <>
      <div>UpdataBook {id}</div>
      <hr className="my-4" />
      <Chapter
        bookChapters={data?.bookChapters}
        handleRefresh={handleRefresh}
      />
    </>
  );
};

export default UpdataBook;
