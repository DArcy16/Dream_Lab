/** @format */

import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactSwitch from "react-switch";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineDoubleRight } from "react-icons/ai";
import InputForm from "../../../components/form/InputForm";
import TextareaForm from "../../../components/form/TextareaForm";
import ChoosePlanModal from "./ChoosePlanModal";
import { useCreateSubscription } from "../../../hooks/useSubscription";
import { ClipLoader } from "react-spinners";

const CreateSubscriptionSchema = yup.object({
	name: yup.string().required(),
	originalPrice: yup.number().required(),
	salePrice: yup.number().required(),
	description: yup.string().required(),
	subscribeLength: yup.number().required(),
	subscribeType: yup.string().required(),
	stackTitle: yup.string().required(),
});

const CreateSubscription = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [selectedPlans, setSelectedPlans] = useState([]);
	const createSubscriptionMutation = useCreateSubscription();

  useEffect(() => {
    if(createSubscriptionMutation.isSuccess){
      navigate('/admin/subscription')
    }
  }, [createSubscriptionMutation.isSuccess])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(CreateSubscriptionSchema),
	});

	const onSubmit = (data) => {
		let statusCode;
		if (status) {
			statusCode = "a";
		} else {
			statusCode = "p";
		}
		createSubscriptionMutation.mutate({
			...data,
			plans: selectedPlans,
			status: statusCode,
		});
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
				<h3 className="sub-heading text-center">Create Subscription</h3>
			</div>

			<form className="px-24 py-8">
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
					placeholder="Type Stack Title"
					label="Stack Title"
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
						label="subscription length"
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
							defaultValue="d"
							className="w-full bg-white py-2 px-6 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2"
							{...register("subscribeType")}
						>
							<option value="d">Day</option>
							<option value="m">Month</option>
							<option value="y">Year</option>
						</select>
						{errors.subscribeType && (
							<p className="text-red-400">{errors.subscribeType.message}</p>
						)}
					</div>
				</div>

				<TextareaForm
					id="description"
					placeholder="type description"
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
					<label className="font-semibold capitalize">Choose Plan</label>
					<AiOutlineDoubleRight />
				</div>

				<p className="mt-1 text-sm">{selectedPlans.length} selected</p>

				<button
					type="submit"
					onClick={handleSubmit(onSubmit)}
					className="btn-2 w-full py-2 mt-6"
				>
					{createSubscriptionMutation.isLoading && (
						<ClipLoader color="white" size={20} />
					)}
					Create
				</button>
			</form>

			{showModal ? (
				<ChoosePlanModal
					setShowModal={setShowModal}
					setSelectedPlans={setSelectedPlans}
					selectedPlans={selectedPlans}
				/>
			) : null}
		</section>
	);
};

export default CreateSubscription;
