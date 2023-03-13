import React from "react";

const PlanItem = ({
  plan,
  setCode,
  setEditPlan,
  setDeleteStatus,
  setEditStatus,
}) => {
  return (
    <div className="w-full p-4 shadow-xl rounded-lg border-x border-x-grey4/[.15] mt-4">
      <div className="flex justify-between items-center px-6">
        <div className="basis-3/4">
          <h3 className=" my-2">{plan.name}</h3>
        </div>
        <div className="basis-1/4 flex justify-end gap-4">
          <button
            className="btn-2 w-1/3 py-2"
            onClick={() => {
              setEditStatus(true);
              setEditPlan(plan);
            }}
          >
            Edit
          </button>
          <button
            className="text-red-600 font-semibold hover:text-red-400"
            onClick={() => {
              setDeleteStatus(true);
              setCode(plan.code);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanItem;
