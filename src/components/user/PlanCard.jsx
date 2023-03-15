import React from "react";

const PlanCard = ({ planDetail }) => {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg">
      <div className="flex flex-col p-8">
        <div className="tracking-wide text-2xl font-semibold">
          {planDetail?.title}
        </div>
        <p className="mt-6 text-sm leading-6 font-medium text-textColor4">
          {planDetail?.body}
        </p>
        <div class="mt-8 mb-4">
          <span class="line-through text-lg mr-2 text-textColor3">
            {formatPrice(planDetail?.originalPrice)} ks
          </span>
          <span class="text-2xl font-bold text-dreamLabColor4">
            {formatPrice(planDetail?.discountPrice)} ks
          </span>
        </div>

        <button className="btn-2 py-2 px-3 mt-4">Purchase Now</button>
      </div>
    </div>
  );
};

export default PlanCard;
