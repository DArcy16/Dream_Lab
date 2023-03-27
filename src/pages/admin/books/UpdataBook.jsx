import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Chapter from "./Chapter";
import { useSingleBookData } from "../../../hooks/useBooks";
const UpdataBook = () => {
  const { id } = useParams();
  //159.223.60.208:3333/books/{{bookSlug}}

  const location = useLocation();
  const { isError, isLoading, error, data, refetch } = useSingleBookData(
    location?.state?.slug
  );
  console.log("data from update book", data);

  http: return (
    <>
      <div>UpdataBook {id}</div>
      <hr className="my-4" />
      <Chapter />
    </>
  );
};

export default UpdataBook;
