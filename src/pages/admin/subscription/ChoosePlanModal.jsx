/** @format */

import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { RxCross2 } from "react-icons/rx";
import { usePlanInSubscription } from "../../../hooks/useSubscription";

const ChoosePlanModal = ({
	setShowModal,
	selectedPlans,
	setSelectedPlans,
	handleRemovePlan,
}) => {
	const [sampleSelect, setSampleSelect] = useState(selectedPlans);
	const { isLoading, isError, data, error } = usePlanInSubscription();


	const handleChange = (e) => {
		if (e.currentTarget.checked) {
			const indexOfCurrentPlan = selectedPlans?.findIndex(
				(item) => item.planCode === e.target.value
			);

			if (indexOfCurrentPlan === -1 || indexOfCurrentPlan === undefined) {
				setSampleSelect([
					...sampleSelect,
					{
						planCode: e.target.value,
						plan: { planCode: e.target.value, name: e.target.name },
					},
				]);

			} else {
        setSampleSelect([
					...sampleSelect,
					{
            id : selectedPlans.length > 0 ? selectedPlans[indexOfCurrentPlan]?.id : null,
						planCode: e.target.value,
						plan: { planCode: e.target.value, name: e.target.name },
					},
				]);
      }
		} else {
			setSampleSelect(
				sampleSelect.filter((plan) => plan.planCode !== e.target.value)
			);
			handleRemovePlan(
				sampleSelect?.filter((plan) => plan.planCode === e.target.value)[0]
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

				{isLoading ? (
					<div className="flex items-center justify-center">
						<ClipLoader color="gray" size={50} />
					</div>
				) : isError ? (
					<div className="w-1/4 fixed right-0 flex top-10 justify-center">
						<p className="text-red-400 text-lg normal-case font-bold">
							{error.message}
						</p>
					</div>
				) : data.length > 0 ? (
					data.map((item) => (
						<div className="flex items-center gap-4 mt-4" key={item.code}>
							<input
								value={item.code}
								name={item.name}
								type="checkbox"
								onChange={handleChange}
								checked={sampleSelect?.find(
									(plan) => plan.planCode === item.code
								)}
							/>
							<label htmlFor={item.name} className="font-semibold capitalize">
								{item.name}
							</label>
						</div>
					))
				) : null}

				<button className="btn-2 w-full py-2 mt-6" onClick={handleDone}>
					Done
				</button>
			</div>
		</div>
	);
};

export default ChoosePlanModal;
