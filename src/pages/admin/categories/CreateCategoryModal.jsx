/** @format */

import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import InputForm from "../../../components/form/InputForm";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateCategory } from "../../../hooks/useCategories";

const CategorySchema = yup.object({
  name: yup.string().required(),
});

const CreateCategoryModal = ({ setCreateStatus, refreshData }) => {

  const[icon,setIcon]= useState(null);

  const createCategoryMutation= useCreateCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CategorySchema),
  });

  const onSubmit=(data)=>{
    createCategoryMutation.mutate({name:data.name,icon});
  }

  useEffect(() => {
    if (createCategoryMutation.isSuccess) {
      reset({ name: ""});
      setIcon(null);
      refreshData();
      setCreateStatus(false);
    }
  }, [createCategoryMutation.isSuccess]);

  return (
    <div
      className="absolute z-50 top-0 right-0 flex justify-end items-center w-screen h-full bg-grey/30 "
    >
      <div className="fixed top-0 w-1/4 h-screen bg-white p-8  shadow-md">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="sub-heading text-slate-900 font-bold">
            Create new Category
          </h2>
          <button
            className=" flex gap-2 items-center justify-center px-4 py-2"
            onClick={() => !setCreateStatus()}
          >
            {" "}
            <RxCross2 className="mx-auto" />
          </button>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            id="icon"
            type="file"
            accept="image/*"
            register={register}
            errors={errors}
            setIcon={setIcon}
            icon= {icon}
          />

          <InputForm
            id="name"
            type="text"
            placeholder="Type Category Name"
            label="Category Name"
            register={register}
            errors={errors}
          />

          <button className="btn-2 w-full py-2 px-3 mt-4 flex justify-center items-center gap-3" type="submit">
            {
              createCategoryMutation.isLoading && <ClipLoader color="white" size={20}/>
            }
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryModal;
