import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { ClipLoader } from "react-spinners";
import ReactSwitch from "react-switch";
import InputForm from "../../../components/form/InputForm";
import { useAuthorData, useSingleAuthorData, useUpdateAuthor } from "../../../hooks/useAuthor";

const EditAuthorModal = ({ setEditStatus,status,setStatus,editAuthor,refreshData,navLink }) => {
  const updateAuthorMutation = useUpdateAuthor(navLink);
    const {  data } = useSingleAuthorData(navLink,id);

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    let statusCode;

    if (status) {
      statusCode = "a";
    } else {
      statusCode = "p";
    }
    updateAuthorMutation.mutate({
      ...data,
      status: statusCode,
    });
    
  };

  useEffect(() => {
    setValue("name", editAuthor.name);
    // data.status==='a'? setStatus(true):setStatus(false)
  }, [editAuthor]);
console.log(data?.status)
  useEffect(() => {
    if (updateAuthorMutation.isSuccess) {
      refreshData();
      // setEditStatus();
    }
  }, [updateAuthorMutation.isSuccess]);

  return (
    <div className="absolute z-50 top-0 right-0 flex justify-end items-center w-screen h-full bg-grey/30">
      <div className="fixed top-0 w-1/4 h-screen bg-white p-8  shadow-md">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="sub-heading text-slate-900 font-bold">Edit Author</h2>
          <button
            className=" flex gap-2 items-center justify-center px-4 py-2"
            onClick={() => !setEditStatus()}
          >
            <RxCross2 className="mx-auto" />
          </button>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            id="name"
            type="text"
            placeholder="Type Plan Name"
            label="Edit Name"
            register={register}
            errors={errors}
          />
          <div className="mt-3 flex items-center gap-6">
            <label className="font-semibold capitalize">Active Status</label>
            <ReactSwitch onChange={() => setStatus(!status)} checked={status} />
          </div>
          {updateAuthorMutation.isError && (
            <p className="text-red-600">{updateAuthorMutation.error.message}</p>
          )}

          <button className="btn-2 w-full py-2 px-3 mt-4" type="submit">
            {updateAuthorMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAuthorModal;
