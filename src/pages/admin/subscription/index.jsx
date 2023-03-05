/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import {RiFileCopy2Line} from "react-icons/ri"
import SingleSubscriptionPlan from "./SingleSubscriptionPlan";
import DeleteModal from "./DeleteModal";

const list = [1,2,3,4];

const index = () => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <section className=" admin-outlet-container">
      {/* header */}
      <div className="flex justify-between items-center">
        <h3 className="sub-heading">Subscription Plan Lists</h3>
        <button
          className="btn-2 flex gap-2 items-center justify-center px-4 py-2"
          onClick={() => navigate("create")}
        >
          {" "}
          <BsPlusCircleFill /> Create Subscription{" "}
        </button>
      </div>

      {/* Subscription Plan List */}
      <div className="w-full mt-8">
        {list.length > 0 ? (
          list.map((item, index) => (
            <SingleSubscriptionPlan
              setShowDeleteModal={setShowDeleteModal}
              key={index}
            />
          ))
        ) : (
          <div className="w-full pt-32">
            <RiFileCopy2Line className="w-24 h-24 mx-auto text-grey2"/>
            <p className="text-center mt-2 text-grey2">You have no plans created yet.</p>
          </div>
        )}
      </div>

      {showDeleteModal ? (
        <DeleteModal setShowDeleteModal={setShowDeleteModal} />
      ) : null}
    </section>
  );
};

export default index;
