/** @format */

import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import InputForm from "../../../components/form/InputForm";

const CreateSubscription = () => {
  return (
    <section className="admin-outlet-container bg-red-300">
      {/* header */}
      <div className="flex items-center gap-[18vw]">
        <button className="flex items-center justify-center gap-2 btn-prev py-2 px-4 border-none">
          <IoArrowBackOutline />
          Back
        </button>
        <h3 className="sub-heading text-center">Create Subscription</h3>
      </div>

      <form className=" px-24 py-8">
        <InputForm id="name" placeholder="Type name" label="Plan Name"/>
      </form>
    </section>
  );
};

export default CreateSubscription;
