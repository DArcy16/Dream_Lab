import React from 'react'

const ChoosePlanModal = ({setShowModal, plan}) => {
  return (
    <div className="absolute z-50 top-0 left-0 flex justify-end items-center w-screen h-full bg-grey/30">
      <div className="w-1/4 fixed top-0 right-0 h-full bg-white py-10 px-12">
        <div className="w-full flex justify-between items-center">
          <h3 className="sub-heading">Select Plan</h3>
          <h3 className="sub-heading" onClick={() => setShowModal(false)}>
            {" "}
            x{" "}
          </h3>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <input type="checkbox" id="all"/> <small htmlFor="all">Select All</small>
        </div>
        {plan.length > 0
          ? plan.map((item) => (
              <div className="flex items-center gap-4 mt-4" key={item.key}>
                <input id={plan.name} value={plan.key} name={plan.name}   type="checkbox" />{" "}
                <label htmlFor={plan.name} className="text-semibold capitalize">{item.name}</label>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ChoosePlanModal