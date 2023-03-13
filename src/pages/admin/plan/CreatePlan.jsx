/** @format */

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import InputForm from "../../../components/form/InputForm";
import { useCreatePlan } from "../../../hooks/usePlan";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ClipLoader } from "react-spinners";

const PlanSchema = yup.object({
  code: yup.string().required(),
  name: yup.string().required(),
});

const CreatePlan = ({createStatus, setCreateStatus, refreshData }) => {
  const createPlanMutation = useCreatePlan();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(PlanSchema),
  });

  const onSubmit = (data) => {
    createPlanMutation.mutate(data);
  };

  useEffect(() => {
    if (createPlanMutation.isSuccess) {
      reset({ code: "", name: "" });
      refreshData();
      setCreateStatus(false);
    }
  }, [createPlanMutation.isSuccess]);

  return (
    <div
      className="absolute z-50 top-0 right-0 flex justify-end items-center w-screen h-full bg-grey/30 "
    >
      <div className="fixed top-0 w-1/4 h-screen bg-white p-8  shadow-md">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="sub-heading text-slate-900 font-bold">
            Create new Plan
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

          {createPlanMutation.isError && (
            <p className="text-red-600">{createPlanMutation.error.message}</p>
          )}

          <button className="btn-2 w-full py-2 px-3 mt-4" type="submit">
            {createPlanMutation.isLoading && (
              <ClipLoader color="white" size={20} />
            )}
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePlan;
