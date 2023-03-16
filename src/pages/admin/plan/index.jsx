/** @format */

import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import DeletePlan from "./DeletePlan";
import EditPlan from "./EditPlan";
import CreatePlan from "./CreatePlan";
import { usePlanData } from "../../../hooks/usePlan";
import {RiFileCopy2Line} from 'react-icons/ri'
import { ClipLoader } from "react-spinners";
import PlanItem from "./PlanItem";

const index = () => {
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [createStatus, setCreateStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [code, setCode] = useState("");
  const [editPlan, setEditPlan] = useState({ code: "", name: "" });

  const { isLoading, isError, error, data, refetch } = usePlanData();

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
        <div className="flex justify-between items-center  ">
          <h3 className="sub-heading text-slate-900 font-bold ">
            Created Plans
          </h3>
          <button
            className="btn-2 flex gap-2 items-center justify-center px-4 py-2 w-44"
            onClick={() => setCreateStatus(true)}
          >
            {" "}
            <BsPlusCircleFill /> Create New{" "}
          </button>
        </div>

        {/*  Plan List */}
        <div className="w-full mt-8">
          {data.length > 0 ? (
            data.map((plan, index) => (
              <PlanItem
                plan={plan}
                setDeleteStatus={setDeleteStatus}
                setEditStatus={setEditStatus}
                setCode={setCode}
                setEditPlan={setEditPlan}
                key={index}
              />
            ))
          ) : (
            <div className="w-full pt-32">
              <RiFileCopy2Line className="w-24 h-24 mx-auto text-grey2" />
              <p className="text-center mt-2 text-grey2">
                You have no plans created yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {createStatus ? (
        <CreatePlan
          setCreateStatus={setCreateStatus}
          refreshData={refreshData}
        />
      ) : null}

      {editStatus ? (
        <EditPlan
          setEditStatus={setEditStatus}
          refreshData={refreshData}
          editPlan={editPlan}
        />
      ) : null}

      {deleteStatus ? (
        <DeletePlan
          setDeleteStatus={setDeleteStatus}
          code={code}
          refreshData={refreshData}
        />
      ) : null}
    </section>
  );
};

export default index;
