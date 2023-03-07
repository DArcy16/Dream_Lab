/** @format */

import React, { useState } from "react";
import ReactSwitch from "react-switch";
import InputForm from "../../../components/form/InputForm";
import TextareaForm from "../../../components/form/TextareaForm";
import ChoosePlanModal from "./ChoosePlanModal";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const plan = [
  {
    key: "b",
    name: "books",
  },
  {
    key: "v",
    name: "videos",
  },
  {
    key: "p",
    name: "podcast",
  },
  {
    key: "m",
    name: "music",
  },
];

const EditSubscription = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState([
    {
      key: "b",
      name: "books",
    },
    {
      key: "v",
      name: "videos",
    },
  ]);

   const handleSubmit = (e) => {
     e.preventDefault();
     navigate("/admin/subscription");
   };


  return (
    <section className="admin-outlet-container">
      {/* header */}
      <div className="flex items-center gap-[18vw]">
        <button
          className="flex items-center justify-center gap-2 btn-prev py-2 px-4 border-none"
          onClick={() => navigate("/admin/subscription")}
        >
          <IoArrowBackOutline />
          Back
        </button>
        <h3 className="sub-heading text-center">Edit Subscription</h3>
      </div>

      <form onSubmit={handleSubmit} className="px-24 py-8">
        <InputForm
          type="text"
          id="name"
          placeholder="Type name"
          label="Subscription Name"
        />
        <InputForm
          type="text"
          id="title"
          placeholder="Type Stock Title"
          label="Stock Title"
        />
        <InputForm
          type="number"
          id="original-price"
          placeholder="0 Ks"
          label="Original Price"
        />
        <InputForm
          type="number"
          id="sale-price"
          placeholder="0 Ks"
          label="Sale Price"
        />

        <div className="flex w-full gap-4">
          <InputForm
            type="number"
            id="subscription-length"
            placeholder="1"
            label="Subscription Length"
          />
          <div className="mt-3 w-full">
            <label
              htmlFor="subscription-length-type"
              className="font-semibold capitalize"
            >
              Subscription Length Type
            </label>
            <select
              id="subscription-length-type"
              name="subscription-length-type"
              className="w-full bg-white py-2 px-6 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2"
            >
              <option value="day">Day</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>

        <TextareaForm
          id="description"
          placeholder="Type Description"
          label="description"
        />

        <div className="mt-3 flex items-center gap-6">
          <label className="font-semibold capitalize">Active Status</label>
          <ReactSwitch onChange={() => setStatus(!status)} checked={status} />
        </div>

        <div
          className="mt-3 w-full flex justify-between items-center bg-white py-2 px-6 rounded-md outline outline-1 outline-grey/30 focus:outline-2"
          onClick={() => setShowModal(true)}
        >
          <label className="font-semibold capitalize">Edit Plan</label>
          <AiOutlineDoubleRight />
        </div>

        <div className="flex items-center mt-2 gap-2">
          {selectedPlans.length > 0 ? (
            selectedPlans.map((plan) => (
              <div className="flex w-fit items-center gap-2 py-1 px-3 border border-1 border-solid border-grey/30 rounded-lg" key={plan.key}>
                <h2 className="text-semibold capitalize">{plan.name}</h2>
                <RxCross2
                  className="w-3 h-3"
                  onClick={() =>
                    setSelectedPlans(
                      selectedPlans.filter((item) => item.key !== plan.key)
                    )
                  }
                />
              </div>
            ))
          ) : (
            <p className="text-sm mt-1">0 plan selected</p>
          )}
        </div>

        <button type="submit" className="btn-2 w-full py-2 mt-6">
          Save
        </button>
      </form>

      {showModal ? (
        <ChoosePlanModal
          plan={plan}
          setShowModal={setShowModal}
          setSelectedPlans={setSelectedPlans}
          selectedPlans={selectedPlans}
        />
      ) : null}
    </section>
  );
};

export default EditSubscription;
