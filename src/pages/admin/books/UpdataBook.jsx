import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Chapter from "./Chapter";
import { useSingleBookData } from "../../../hooks/useBooks";
import EditBookData from "./EditBookData";

const UpdataBook = () => {
  const { slug } = useParams();
  //159.223.60.208:3333/books/{{bookSlug}}
  
  const { isError, isLoading, error, data, refetch } = useSingleBookData(slug);

  const handleRefresh = () => {
    refetch();
  };
  return (
    <div className="px-5 py-10">
      <EditBookData />
      <hr className="mb-10" />
      <Chapter
        bookChapters={data?.bookChapters}
        handleRefresh={handleRefresh}
      />
    </div>
  );
};

export default UpdataBook;
