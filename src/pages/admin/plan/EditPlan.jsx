import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { ClipLoader } from "react-spinners";
import InputForm from "../../../components/form/InputForm";
import { useUpdatePlan } from "../../../hooks/usePlan";

const EditPlan = ({ editPlan, setEditStatus, refreshData }) => {
  const updatePlanMutation = useUpdatePlan();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    updatePlanMutation.mutate(data);
  };

  useEffect(() => {
    setValue("code", editPlan.code);
    setValue("name", editPlan.name);
  }, [editPlan]);

  useEffect(() => {
    if (updatePlanMutation.isSuccess) {
      refreshData();
      setEditStatus(false);
    }
  }, [updatePlanMutation.isSuccess]);

  return (
    <div className="absolute z-50 top-0 right-0 flex justify-end items-center w-screen h-full bg-grey/30">
      <div className="fixed top-0 w-1/4 h-screen bg-white p-8  shadow-md">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="sub-heading text-slate-900 font-bold">Edit Plan</h2>
          <button
            className=" flex gap-2 items-center justify-center px-4 py-2"
            onClick={() => !setEditStatus()}
          >
            <RxCross2 className="mx-auto" />
          </button>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            id="code"
            type="text"
            placeholder="Type Plan Code"
            label="plan code"
            register={register}
            errors={errors}
          />

          <InputForm
            id="name"
            type="text"
            placeholder="Type Plan Name"
            label="Plan Name"
            register={register}
            errors={errors}
          />

          {updatePlanMutation.isError && (
            <p className="text-red-600">{updatePlanMutation.error.message}</p>
          )}

          <button className="btn-2 w-full py-2 px-3 mt-4" type="submit">
            {updatePlanMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPlan;
