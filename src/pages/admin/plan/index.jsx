/** @format */

import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import SinglePlan from "./SinglePlan";
import DeletePlan from "./DeletePlan";
import EditPlan from "./EditPlan";
import CreatePlan from "./CreatePlan";

const list = [1, 2, 3, 4];

const index = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateNewPlan, setShowCreateNewPlan] = useState(false);
  const [showEditPlan, setShowEditPlan] = useState(false);
  

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
            onClick={() => setShowCreateNewPlan(true)}
          >
            {" "}
            <BsPlusCircleFill /> Create New{" "}
          </button>
        </div>

        {/*  Plan List */}
        <div className="w-full mt-8">
          {list.length > 0 ? (
            list.map((item, index) => (
              <SinglePlan
                setShowDeleteModal={setShowDeleteModal}
                setShowEditPlan={setShowEditPlan}
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

      {showDeleteModal ? (
        <DeletePlan setShowDeleteModal={setShowDeleteModal} />
      ) : null}
      {showCreateNewPlan ? (
        <CreatePlan setShowCreateNewPlan={setShowCreateNewPlan} />
      ) : null}
      {showEditPlan ? <EditPlan setShowEditPlan={setShowEditPlan} /> : null}
    </section>
  );
};

export default index;
