/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../../../assets/profile.png";

const SingleSubscriber = ({ subscriber, setShowRequestModal, setSubscriber }) => {
	const navigate = useNavigate();

	const handleShowModal = (subscriber) => {
		subscriber.status === "p"
			? setShowRequestModal(true)
			: subscriber.status === "a"
			? navigate("active-user-details")
			: navigate("expired-user-details");
			setSubscriber(subscriber)
	};

	return (
		<>
			<div className="w-full flex items-center justify-between text-center  mt-3">
				<div className="flex w-1/5 items-center gap-2 pl-2">
					<img src={profileImg} alt="img" className="w-8 h-8 object-fit" />

					<p className="normal-case">
						{subscriber?.user?.displayName
							? subscriber?.user?.displayName
							: subscriber?.user?.email.split("").slice(0, 9).join("")}
					</p>
				</div>
				<div className="w-1/5 flex justify-center">
					{subscriber.status === "p" ? (
						<div className="px-3 w-20 py-1 bg-orangee text-white text-sm font-semibold rounded-full text-center">
							Request
						</div>
					) : subscriber.status === "a" ? (
						<div className="px-3 py-1 bg-green text-white text-sm font-semibold rounded-full w-20 text-center">
							Active
						</div>
					) : subscriber.status === "e" ? (
						<div className="px-3 py-1 bg-red-800 text-white text-sm font-semibold rounded-full w-20 text-center">
							Expired
						</div>
					) : subscriber.status === "r" ? (
						<div className="px-3 py-1 border border-red-800 text-red-800 bg-transparent text-sm font-semibold rounded-full min-w-20 w-fit text-center">
							Rejected
						</div>
					) : (
						<div className="px-3 py-1 border border-orangee text-orangee bg-transparent text-sm font-semibold rounded-full w-20 text-center">
							Cancel
						</div>
					)}
				</div>
				<p className="w-1/5">{subscriber.subscription.name}</p>
				<p className="w-1/5">{subscriber.startDate}</p>
				<button
					className=" text-dreamLabColor1 hover:underline cursor-pointer w-1/5"
					onClick={() => handleShowModal(subscriber)}
				>
					view details
				</button>
			</div>

			<div className="w-full h-[0.05rem] bg-grey6 mt-3"></div>
		</>
	);
};

export default SingleSubscriber;
