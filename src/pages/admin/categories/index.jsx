/** @format */

import React, { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import {RiFileCopy2Line} from 'react-icons/ri'
import { ClipLoader } from "react-spinners";
import { useCategoryData } from "../../../hooks/useCategories";
import CreateCategoryModal from "./CreateCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import SingleCategory from "./SingleCategory";

const index = () => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [editCategory, setEditCategory] = useState({ id: "", name: "", icon:"" });

  const { isLoading, isError, error, data, refetch } = useCategoryData();

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

  const status=[setDeleteStatus,setEditStatus];

  return (
    <section className="admin-outlet-container">
      {/* header */}
      <div className="w-full h-full">
        <div className="flex justify-between items-center  ">
          <h3 className="sub-heading text-slate-900 font-bold ">
            Create Category
          </h3>
          <button
            className="btn-2 flex gap-2 items-center justify-center px-4 py-2 w-44"
            onClick={() => setCreateStatus(true)}
          >
            {" "}
            <BsPlusCircleFill /> Create New{" "}
          </button>
        </div>

        {/*  Categories List */}
        <div className="w-full mt-8">
          {data.length > 0 ? (
            data.map((category, index) => (
              <SingleCategory key={index} category={category} status={status} setEditCategory={setEditCategory} setCategoryId={setCategoryId}/>
            ))
          ) : (
            <div className="w-full pt-32">
              <RiFileCopy2Line className="w-24 h-24 mx-auto text-grey2" />
              <p className="text-center mt-2 text-grey2">
                You have no categories created yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {createStatus ? (
        <CreateCategoryModal
          setCreateStatus={setCreateStatus}
          refreshData={refreshData}
        />
      ) : null}

      {editStatus ? (
        <EditCategoryModal
          setEditStatus={setEditStatus}
          refreshData={refreshData}
          editCategory={editCategory}
        />
      ) : null}

      {deleteStatus ? (
        <DeleteCategoryModal
          setDeleteStatus={setDeleteStatus}
          categoryId={categoryId}
          refreshData={refreshData}
        />
      ) : null}
    </section>
  );
};

export default index;
