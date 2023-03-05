/** @format */

import React, { useState } from "react";
import ReactSwitch from "react-switch";
import InputForm from "../../../components/form/InputForm";
import TextareaForm from "../../../components/form/TextareaForm";
import ChoosePlanModal from "./ChoosePlanModal";
import { IoArrowBackOutline } from "react-icons/io5";
import {AiOutlineDoubleRight} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

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

const CreateSubscription = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/admin/subscription');
  }

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
        <h3 className="sub-heading text-center">Create Subscription</h3>
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
            label="subscription length"
          />
          <div className="mt-3 w-full">
            <label
              htmlFor="subscription-length"
              className="font-semibold capitalize"
            >
              Subscription Length Type
            </label>
            <select
              id="subscription-length"
              name="subscription-length"
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
          placeholder="type description"
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
          <label className="font-semibold capitalize">Choose Plan</label>
          <AiOutlineDoubleRight />
        </div>

        <p className="mt-1 text-sm">{selectedPlans.length} selected</p>

        <button type="submit" className="btn-2 w-full py-2 mt-6">
          Create
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

export default CreateSubscription;
