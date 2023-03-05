import React from "react";
import { RxCross2 } from "react-icons/rx";

const CreatePlan = ({setShowCreateNewPlan}) => {
  return (
    <div className="absolute z-50 top-0 right-0 flex justify-end items-center w-screen h-full bg-grey/30">
      <div className="fixed top-0 w-1/4 h-screen bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="sub-heading text-slate-900 font-bold">
            Create new Plan
          </h2>
          <button
            className=" flex gap-2 items-center justify-center px-4 py-2"
            onClick={() => !setShowCreateNewPlan()}
          >
            {" "}
            <RxCross2 className="mx-auto" />
          </button>
        </div>
        <form className="">
          <InputForm
            id="plan_code"
            type="text"
            placeholder="type plan code"
            label="plan code"
          />

          <InputForm
            id="plan_name"
            type="text"
            placeholder="type plan name"
            label="Plan Name"
          />

          <button
            className="btn-2 w-full py-2 px-3"
            type="button"
            onClick={() => !setShowCreateNewPlan()}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePlan;
