/** @format */

import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { RiFileCopy2Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { useAuthorData } from "../../../hooks/useAuthor";
import ArticleAuthorItem from "./ArticleAuthorItem";
import BookAuthorItem from "./BookAuthorItem";
import CreateAuthor from "./CreateAuthor";
import DeleteAuthorModal from "./DeleteAuthorModal";
import EditAuthorModal from "./EditAuthorModal";

const index = () => {
  const [navLink, setNavLink] = useState("bookauthors");
  const [status, setStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [key, setKey] = useState([]);
  const [editAuthor, setEditAuthor] = useState({ name: "" });

  const { isLoading, isError, error, data, refetch } = useAuthorData(navLink);

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
    <section className="admin-outlet-container">
      {/* header */}
      <div className="w-full h-full">
        <div className="flex justify-between items-center   ">
          <div className="flex justify-between items-center   gap-3">
            <h3
              className={` font-semibold ${
                navLink === "bookauthors"
                  ? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
                  : null
              } cursor-pointer`}
              onClick={() => setNavLink("bookauthors")}
            >
              Book Author
            </h3>

            <h3
              className={`font-semibold ${
                navLink === "articleauthors"
                  ? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
                  : null
              } cursor-pointer`}
              onClick={() => setNavLink("articleauthors")}
            >
              Artical Author
            </h3>
          </div>

          <button
            className="btn-2 flex gap-2 items-center justify-center px-4 py-2 w-44"
            onClick={() => setCreateStatus(true)}
          >
            {" "}
            <BsPlusCircleFill /> Create Author{" "}
          </button>
        </div>

        <div className="w-full mt-8">
          {navLink === "bookauthors"
            ? data.map((item, index) => (
                <BookAuthorItem
                  item={item}
                  setDeleteStatus={setDeleteStatus}
                  setEditStatus={setEditStatus}
                  setEditAuthor={setEditAuthor}
                  key={index}
                  setKey={setKey}
                />
              ))
            : data.map((item, index) => (
                <ArticleAuthorItem
                  item={item}
                  setDeleteStatus={setDeleteStatus}
                  setEditStatus={setEditStatus}
                  setEditAuthor={setEditAuthor}
                  key={index}
                  setKey={setKey}
                />
              ))}
        </div>
      </div>

      {createStatus ? (
        <CreateAuthor
          setCreateStatus={setCreateStatus}
          status={status}
          setStatus={setStatus}
          refreshData={refreshData}
        />
      ) : null}

      {editStatus ? (
        <EditAuthorModal
          setEditStatus={setEditStatus}
          status={status}
          setStatus={setStatus}
          refreshData={refreshData}
          editAuthor={editAuthor}
          navLink={navLink}
        />
      ) : null}

      {deleteStatus ? (
        <DeleteAuthorModal
          setDeleteStatus={setDeleteStatus}
          refreshData={refreshData}
          key={key}
        />
      ) : null}
    </section>
  );
};

export default index;
