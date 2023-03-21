/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import { RiVipCrownLine } from "react-icons/ri";
import PremiumIcon from "../../../assets/premiumIcon";
import kPay from "../../../assets/KBZPay.png";
import wavePay from "../../../assets/wavePay.png";
import kbzPay from "../../../assets/kbzBank.png";
import ayaPay from "../../../assets/ayaPay.png";
import aya1 from "../../../assets/aya1.png";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useSubscriberScription } from "../../../hooks/useSubscription";
import { ClipLoader } from "react-spinners";
import dayjs from "dayjs";
const PaymentDetails = () => {
	const navigate = useNavigate();
	const [previewUrl, setPreviewUrl] = useState(null);
	const [imageFile, setImageFile] = useState(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const location = useLocation();

	const createSubscriberscriptionMutation = useSubscriberScription();

	const formatPrice = (price) => {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const handleDrop = (acceptedFiles) => {
		console.log("acceptedFiles", acceptedFiles);
		const file = acceptedFiles[0];
		const previewUrl = URL.createObjectURL(file);
		setPreviewUrl(previewUrl);
		setImageFile(file);
	};

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		multiple: false,
		onDrop: handleDrop,
	});

	const onHandleSubmit = (e) => {
		e.preventDefault();

		createSubscriberscriptionMutation.mutate({
			startDate: dayjs().format("YYYY-MM-DD"),
			subscriptionId: location?.state?.subscriptionId.toString(),
			paymentImage: imageFile,
		});
	};

	if (createSubscriberscriptionMutation.isSuccess) {
		navigate("/pricing");
	}
	return (
		<div className="flex w-full h-auto">
			<div className="flex-1 bg-dreamLabColor4 text-white pl-14 pr-10 pt-8">
				<Link to="/pricing" className="flex items-center gap-3 text-lg">
					<span>
						<BsArrowLeft />
					</span>
					<span>Back To Dream Lab Pricing Page</span>
				</Link>
				<div className="flex items-center my-12 text-4xl font-semibold gap-4">
					<h1>Complete Purchase </h1>
					<span>
						<PremiumIcon />
					</span>
				</div>
				<div
					className="bg-gradient-to-r from-opacity-15 via-transparent to-opacity-10 py-5 px-6 w-[470px] rounded-sm"
					style={{
						backgroundImage:
							"linear-gradient(104.32deg, rgba(255, 255, 255, 0.1435) 7.34%, rgba(255, 255, 255, 0.105) 93.45%)",
					}}
				>
					<p className="text-sm mb-4 flex justify-between items-center">
						<span>Select Plan</span>
						<span>Total Price</span>
					</p>
					<p className="text-[22px] font-semibold flex items-center justify-between">
						<span>*{location?.state?.planData?.name}</span>

						<span
							className="text-[28px] font-semibold"
							style={{
								background:
									"linear-gradient(90.15deg, rgba(253, 207, 56, 0.96) 3.64%, #FCC426 36.83%, #C58F09 74.12%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
							}}
						>
							{formatPrice(location?.state?.planData?.salePrice)} Ks
						</span>
					</p>
				</div>
				<div>
					<h2 className="text-2xl font-semibold my-12">Bank Information</h2>
					<div className="flex flex-wrap gap-4">
						<div
							className="flex-grow flex items-center justify-center gap-6 bg-gradient-to-r from-opacity-15 via-transparent to-opacity-10 py-4 px-3 rounded-sm"
							style={{
								backgroundImage:
									"linear-gradient(104.32deg, rgba(255, 255, 255, 0.1435) 7.34%, rgba(255, 255, 255, 0.105) 93.45%)",
							}}
						>
							<img src={kPay} style={{ width: "85px", height: "30px" }} />
							<div>
								<p className="mb-4 text-lg">Dreamlab</p>
								<span>0912345678912345</span>
							</div>
						</div>
						<div
							className="flex-grow flex gap-6 items-center bg-gradient-to-r from-opacity-15 via-transparent to-opacity-10 py-4 justify-center px-3 rounded-sm"
							style={{
								backgroundImage:
									"linear-gradient(104.32deg, rgba(255, 255, 255, 0.1435) 7.34%, rgba(255, 255, 255, 0.105) 93.45%)",
							}}
						>
							<img src={wavePay} style={{ width: "85px", height: "30px" }} />
							<div>
								<p className="mb-4 text-xl">Dreamlab</p>
								<span>0912345678912345</span>
							</div>
						</div>
						<div
							className="flex-grow flex gap-6 items-center bg-gradient-to-r from-opacity-15 via-transparent to-opacity-10 py-4 justify-center px-3 rounded-sm"
							style={{
								backgroundImage:
									"linear-gradient(104.32deg, rgba(255, 255, 255, 0.1435) 7.34%, rgba(255, 255, 255, 0.105) 93.45%)",
							}}
						>
							<img src={ayaPay} style={{ width: "85px", height: "30px" }} />
							<div>
								<p className="mb-4 text-xl">Dreamlab</p>
								<span>0912345678912345</span>
							</div>
						</div>
						<div
							className="flex-grow flex gap-6 items-center bg-gradient-to-r from-opacity-15 via-transparent to-opacity-10 py-4 justify-center px-3 rounded-sm"
							style={{
								backgroundImage:
									"linear-gradient(104.32deg, rgba(255, 255, 255, 0.1435) 7.34%, rgba(255, 255, 255, 0.105) 93.45%)",
							}}
						>
							<img src={kbzPay} style={{ width: "85px", height: "30px" }} />
							<div>
								<p className="mb-4 text-xl">Dreamlab</p>
								<span>0912345678912345</span>
							</div>
						</div>
						<div
							className="flex-grow-0 w-[49%] flex gap-6 items-center bg-gradient-to-r from-opacity-15 via-transparent to-opacity-10 py-4 justify-center px-3 rounded-sm"
							style={{
								backgroundImage:
									"linear-gradient(104.32deg, rgba(255, 255, 255, 0.1435) 7.34%, rgba(255, 255, 255, 0.105) 93.45%)",
							}}
						>
							<img src={aya1} style={{ width: "85px", height: "30px" }} />
							<div>
								<p className="mb-4 text-xl">Dreamlab</p>
								<span>0912345678912345</span>
							</div>
						</div>
					</div>
				</div>
				<p className="mt-12 mb-8 leading-10 w-[500px] text-lg">
					ငွေလွှဲပြီးသွားပြီဆိုရင်တော့{" "}
					<strong>
						“ငွေလွှဲပြေစာ မှတဆင့် ငွေလွှဲထားတဲ့ Screen Shoot လေးကို”
					</strong>{" "}
					ထည့်သွင်း၍ ပေးပို့အတည်ပြုနိုင်ပါတယ်။ အကူညီလိုအပ်ပါက 09794461888 သို့
					ဆက်သွယ်နိုင်ပါသည်။ (Office Hour: 9:00 AM to 8:00 PM)
				</p>
			</div>

			<div className="flex-1 bg-white">
				<div className="flex flex-col px-14 pt-8 mt-5">
					<h1 className="text-2xl mb-10 font-semibold text-black">
						Enter Payment Details
					</h1>
					<form className="w-full mb-4">
						<div className="mb-8">
							<label
								className="block font-2xl font-semibold mb-4"
								htmlFor="name"
							>
								Name
							</label>
							<input
								className="w-[100%] border border-stoke rounded-md p-2"
								id="name"
								type="text"
								placeholder="Enter Your Name"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<span className="text-red-500">This field is required</span>
							)}
						</div>
						<div className="mb-8">
							<label
								className="block font-2xl font-semibold mb-4"
								htmlFor="email"
							>
								Email (If You Have)
							</label>
							<input
								className="w-[100%] border border-stoke rounded-md p-2"
								id="email"
								type="email"
								placeholder="Enter Your Email"
								{...register("email")}
							/>
						</div>
						<div className="mb-8">
							<label
								className="block font-2xl font-semibold mb-4"
								htmlFor="phone"
							>
								Phone
							</label>
							<input
								className="w-[100%] border border-stoke rounded-md p-2"
								id="phone"
								type="tel"
								placeholder="Enter Your Phone Number"
								{...register("phone", { required: true })}
							/>
							{errors.phone && (
								<span className="text-red-500">This field is required</span>
							)}
						</div>
						<div className="font-2xl font-semibold mb-4">ငွေလွှဲပြေစာ</div>

						<div
							{...getRootProps()}
							className="flex flex-col rounded-sm h-40 border border-dashed items-center gap-5 cursor-pointer"
						>
							<input {...getInputProps()} />
							{/* <input
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
              /> */}

							{previewUrl ? (
								<div>
									<img
										src={previewUrl}
										alt="Preview"
										className="w-[120px] h-[120px] mt-5 "
									/>
								</div>
							) : (
								<div className="text-xl text-grey2 flex flex-col items-center">
									<HiOutlinePhotograph className="mt-10 text-4xl text-grey2" />
									Upload Your Bank Slip Here
								</div>
							)}
						</div>
						{createSubscriberscriptionMutation.isError ? (
							<p className="text-base font-semibold mt-2 text-center text-red-400 normal-case">
								{createSubscriberscriptionMutation.error.message}
							</p>
						) : null}

						<button
							onClick={onHandleSubmit}
							type="submit"
							className="btn-2 py-2 px-3 mt-16 flex items-center justify-center w-[100%]"
						>
							{createSubscriberscriptionMutation.isLoading && (
								<ClipLoader color="white" size={20} className="mr-3" />
							)}
							Buy Now
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PaymentDetails;
