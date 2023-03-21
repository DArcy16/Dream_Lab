import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginBoxContext } from "../../contexts/user/LoginBoxContext";
import { TOKEN_LOCAL_STORAGE } from "../../hooks/useUserAuth";
import { getToken } from "../../utils/getToken";

const PlanCard = ({ planDetail }) => {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_LOCAL_STORAGE));
  const navigate = useNavigate();
  const {setShow} = useLoginBoxContext();
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handlePurchase = () => {
    if(token) {
      navigate("/payment-details", {
				state: { subscriptionId: planDetail?.id, planData: planDetail },
			});
    } else {
      setShow(true);
    }
  };
  return (
    <div className="w-[26rem] bg-white rounded-xl shadow-lg">
      <div className="flex flex-col p-8">
        <div className="tracking-wide text-2xl font-semibold">
          {planDetail?.name}
        </div>
        <p className="mt-6 text-sm leading-6 font-medium text-textColor4">
          {planDetail?.description}
        </p>
        <div className="mt-8 mb-4">
          <span className="line-through text-lg mr-2 text-textColor3">
            {formatPrice(planDetail?.originalPrice)} Ks
          </span>
          <span className="text-2xl font-bold text-dreamLabColor4">
            {formatPrice(planDetail?.salePrice)} Ks
          </span>
        </div>
        <button
          className="btn-2 py-2 px-3 mt-4 text-center"
          onClick={handlePurchase}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
