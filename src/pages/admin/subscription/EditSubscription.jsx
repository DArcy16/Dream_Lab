/** @format */

import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ClipLoader } from "react-spinners";
import ReactSwitch from "react-switch";
import InputForm from "../../../components/form/InputForm";
import TextareaForm from "../../../components/form/TextareaForm";
import ChoosePlanModal from "./ChoosePlanModal";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import {
	useRemovePlan,
	useSubscription,
	useSubscriptions,
	useUpdateSubscription,
} from "../../../hooks/useSubscription";

const EditSubscriptionSchema = yup.object({
	name: yup.string().required(),
	originalPrice: yup.number().required(),
	salePrice: yup.number().required(),
	description: yup.string().required(),
	subscribeLength: yup.number().required(),
	subscribeType: yup.string().required(),
	stackTitle: yup.string().required(),
});

const EditSubscription = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [status, setStatus] = useState(false);
	const [showModal, setShowModal] = useState(false);
  const [removePlanCode, setRemovePlanCode] = useState('');
	const [selectedPlans, setSelectedPlans] = useState([]);

	const updateSubscriptionMutation = useUpdateSubscription();

	const removePlanMutation = useRemovePlan();


	const { data: subscriptionData, isSuccess: isSubscriptionSuccess, refetch } =
		useSubscription(id);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(EditSubscriptionSchema),
	});

	useEffect(() => {
		if (isSubscriptionSuccess) {
			setValue("name", subscriptionData.name);
			setValue("stackTitle", subscriptionData.stackTitle);
			setValue("originalPrice", subscriptionData.originalPrice);
			setValue("salePrice", subscriptionData.salePrice);
			setValue("description", subscriptionData.description);
			setValue("subscribeLength", subscriptionData.subscribeLength);
			setValue("subscribeType", subscriptionData.subscribeType);
			subscriptionData.status === "a" ? setStatus(true) : setStatus(false);
			setSelectedPlans(subscriptionData.subscriptionPlans);
		}
	}, [isSubscriptionSuccess]);

	useEffect(() => {
		if (updateSubscriptionMutation.isSuccess) {
			navigate("/admin/subscription");
			setSelectedPlans([]);
      refetch();
		}
	}, [updateSubscriptionMutation.isSuccess]);

  useEffect(() => {
    if (removePlanMutation.isSuccess) {
			setSelectedPlans(
				selectedPlans.filter((item) => item.planCode !== removePlanCode)
			);
		}
  }, [removePlanMutation.isSuccess])

	const onSubmit = (data) => {
		let statusCode;

		let planCode = selectedPlans
			.map((plan) => {
				return { planCode: plan.planCode, applyAll: false };
			})
			.filter((plan) =>
				subscriptionData?.subscriptionPlans.every(
					(item) => item.planCode !== plan.planCode
				)
			);
		if (status) {
			statusCode = "a";
		} else {
			statusCode = "p";
		}
		updateSubscriptionMutation.mutate({
			...data,
			id: subscriptionData.id,
			plans: planCode,
			status: statusCode,
		});
	};

	const handleRemovePlan =  (plan) => {
		if (plan.id) {
      removePlanMutation.mutate(plan.id);
    } else {
       setSelectedPlans(
				selectedPlans.filter((item) => item.planCode !== plan.planCode)
			);
    }
		setRemovePlanCode(plan.planCode)
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

			<form onSubmit={handleSubmit(onSubmit)} className="px-24 py-8">
				<InputForm
					type="text"
					id="name"
					placeholder="Type name"
					label="Subscription Name"
					register={register}
					errors={errors}
				/>
				<InputForm
					type="text"
					id="stackTitle"
					placeholder="Type Stock Title"
					label="Stock Title"
					register={register}
					errors={errors}
				/>
				<InputForm
					type="number"
					id="originalPrice"
					placeholder="0 Ks"
					label="Original Price"
					register={register}
					errors={errors}
				/>
				<InputForm
					type="number"
					id="salePrice"
					placeholder="0 Ks"
					label="Sale Price"
					register={register}
					errors={errors}
				/>

				<div className="flex w-full gap-4">
					<InputForm
						type="number"
						id="subscribeLength"
						placeholder="1"
						label="Subscription Length"
						register={register}
						errors={errors}
					/>
					<div className="mt-3 w-full">
						<label htmlFor="subscribeType" className="font-semibold capitalize">
							Subscription Length Type
						</label>
						<select
							id="subscribeType"
							name="subscribeType"
							className="w-full bg-white py-2 px-6 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2"
							{...register("subscribeType")}
						>
							<option value="d">Day</option>
							<option value="m">Month</option>
							<option value="y">Year</option>
						</select>
					</div>
				</div>

				<TextareaForm
					id="description"
					placeholder="Type Description"
					label="description"
					register={register}
					errors={errors}
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
							<div
								className="flex w-fit items-center gap-2 py-1 px-3 border border-1 border-solid border-grey/30 rounded-lg"
								key={plan.planCode}
							>
								<h2 className="text-semibold capitalize">{plan.plan.name}</h2>
								{removePlanMutation.isLoading ? (
									<ClipLoader color="gray" size={12} />
								) : (
									<RxCross2
										className="w-3 h-3"
										onClick={() => handleRemovePlan(plan)}
									/>
								)}
							</div>
						))
					) : (
						<p className="text-sm mt-1">0 plan selected</p>
					)}
				</div>
					{removePlanMutation.isError ? <p className="text-center normal-case text-red-400 text-sm mt-2">{removePlanMutation.error.message}</p> : null}

				<button type="submit" className="btn-2 w-full py-2 mt-4">
					{updateSubscriptionMutation.isLoading ? (
						<ClipLoader color="white" size={20} />
					) : null}
					Save
				</button>
			</form>

			{showModal ? (
				<ChoosePlanModal
					setShowModal={setShowModal}
					setSelectedPlans={setSelectedPlans}
					selectedPlans={selectedPlans}
					handleRemovePlan={handleRemovePlan}
				/>
			) : null}
		</section>
	);
};

export default EditSubscription;
