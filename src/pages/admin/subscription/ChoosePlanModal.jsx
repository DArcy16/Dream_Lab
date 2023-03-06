/** @format */

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ChoosePlanModal = ({ setShowModal, plan, selectedPlans, setSelectedPlans }) => {
  const [sampleSelect, setSampleSelect] = useState(selectedPlans);

  const handleChange = (e) => {
    if (e.currentTarget.checked) {
      setSampleSelect([
        ...sampleSelect,
        { key: e.target.value, name: e.target.name },
      ]);
    } else {
      setSampleSelect(
        sampleSelect.filter((plan) => plan.key !== e.target.value)
      );
    }
  };

  const handleDone = () => {
    setSelectedPlans(sampleSelect);
    setShowModal(false);
  };

  return (
    <div className="absolute z-50 top-0 left-0 flex justify-end items-center w-full h-full bg-grey/30">
      <div className="w-1/4 fixed top-0 right-0 h-full bg-white py-10 px-12">
        <div className="flex justify-between items-center">
          <h3 className="sub-heading">Select Plan</h3>

          <RxCross2 onClick={() => setShowModal(false)} />
        </div>

        {/* <div className="flex items-center gap-4 mt-4">
          <input type="checkbox" id="all"/> <label htmlFor="all" className="text-sm">Select All</label>
        </div> */}

        {plan.length > 0
          ? plan.map((item) => (
              <div className="flex items-center gap-4 mt-4" key={item.key}>
                <input
                  id={item.name}
                  value={item.key}
                  name={item.name}
                  type="checkbox"
                  onClick={handleChange}
                  checked = {sampleSelect?.find(plan => plan.key === item.key)}
                />
                <label htmlFor={item.name} className="font-semibold capitalize">
                  {item.name}
                </label>
              </div>
            ))
          : null}

        <button className="btn-2 w-full py-2 mt-6" onClick={handleDone}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ChoosePlanModal;
