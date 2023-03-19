import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { ClipLoader } from "react-spinners";
import InputForm from "../../../components/form/InputForm";
import { useUpdateCategory } from "../../../hooks/useCategories";

const EditCategoryModal = ({ editCategory, setEditStatus, refreshData }) => {
  const updateCategoryMutation = useUpdateCategory();
  const [icon,setIcon]= useState(editCategory.icon);
  const isEdit= true;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    updateCategoryMutation.mutate({id:editCategory.id,name:data.name,icon});
  };

  useEffect(() => {
    setValue("name", editCategory.name);
  }, [editCategory]);

  useEffect(() => {
    if (updateCategoryMutation.isSuccess) {
      refreshData();
      setEditStatus(false);
    }
  }, [updateCategoryMutation.isSuccess]);

  return (
    <div className="absolute z-50 top-0 right-0 flex justify-end items-center w-screen h-full bg-grey/30">
      <div className="fixed top-0 w-1/4 h-screen bg-white p-8  shadow-md">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="sub-heading text-slate-900 font-bold">Edit Category</h2>
          <button
            className=" flex gap-2 items-center justify-center px-4 py-2"
            onClick={() => !setEditStatus()}
          >
            <RxCross2 className="mx-auto" />
          </button>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            id="icon"
            type="file"
            accept="image/*"
            setIcon={setIcon}
            icon={icon}
            isEdit={isEdit}
          />

          <InputForm
            id="name"
            type="text"
            placeholder="Type Category Name"
            label="Category Name"
            register={register}
            errors={errors}
          />

          {updateCategoryMutation.isError && (
            <p className="text-red-600">{updateCategoryMutation.error.message}</p>
          )}

          <button className="btn-2 w-full py-2 px-3 mt-4 flex justify-center items-center gap-3" type="submit">
            {updateCategoryMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;
