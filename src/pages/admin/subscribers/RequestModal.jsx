/** @format */

import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import profileImg from "../../../assets/profile.png";
import { useAcceptSubscriber } from "../../../hooks/useSubscribers";
import { ClipLoader } from "react-spinners";

const RequestModal = ({ setShowRequestModal, subscriber, refetch }) => {
	const acceptSubscriberMutation = useAcceptSubscriber();

	const handleAccept = (subscriber) => {
		acceptSubscriberMutation.mutate({
			id: subscriber.id,
			body: { status: "a" }
		});
	};

	const handleReject = () => {
		acceptSubscriberMutation.mutate({
			id: subscriber.id,
			body : {status : "r"}
		})
	}

	useEffect(() => {
		if(acceptSubscriberMutation.isSuccess) {
			setShowRequestModal(false);
			refetch();
		}
	},[acceptSubscriberMutation.isSuccess])

	return (
		<div className="z-50 absolute w-full h-full top-0 left-0 bg-grey4/40">
			<div className="fixed top-0 right-0 w-1/4 h-full px-8 py-4 bg-white overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden">
				<div className="flex justify-between items-center">
					<h2 className="text-lg font-bold">Request Subscriber</h2>
					<RxCross2
						onClick={() => setShowRequestModal(false)}
						className="cursor-pointer"
					/>
				</div>

				<div className="flex justify-center">
					<img src={profileImg} alt="img" className="w-20 h-20 mt-4" />
				</div>
				<div className="flex w-full text-sm justify-around items-center mt-6">
					<div className="space-y-2">
						<p>Customer Name</p>
						<p>Purchase ID</p>
						<p>Purchase Date</p>
						<p>Subscription Plan</p>
						<p>Amount</p>
					</div>
					<div className="space-y-2 font-semibold">
						<p>
							{subscriber?.user?.displayName
								? subscriber?.user?.displayName
								: subscriber?.user?.email.split("").slice(0, 9).join("")}
						</p>
						<p>{subscriber?.paymentId ? subscriber?.paymentId : "00000000"}</p>
						<p>{subscriber?.startDate}</p>
						<p>{subscriber?.subscription?.name}</p>
						<p>{subscriber?.subscription?.salePrice} Ks</p>
					</div>
				</div>

				<p className="font-bold mt-4">Backslip Image</p>
				<div className="w-5/6 mx-auto mt-2">
					<img
						src={subscriber?.paymentImage}
						alt="payment image"
						className="w-full object-fit"
					/>
				</div>

				{acceptSubscriberMutation.isError ? (
					<p className="text-xs text-center text-red-400 normal-case mt-2 break-words">
						{acceptSubscriberMutation.error.message}
					</p>
				) : null}
				<div className="flex items-center justify-center gap-4 mt-6">
					<button
						className="border border-red-700 text-red-700 hover:text-red-700/80 hover:border-red-700/80 font-semibold px-8 py-1 rounded-md"
						onClick={handleReject}
					>
						{acceptSubscriberMutation.isLoading ? (
							<ClipLoader color="white" size={20} />
						) : null}{" "}
						Reject
					</button>
					<button
						className="btn-2 px-8 py-1 flex items-center justify-center gap-2"
						onClick={() => handleAccept(subscriber)}
					>
						{acceptSubscriberMutation.isLoading ? (
							<ClipLoader color="white" size={20} />
						) : null}{" "}
						Accept
					</button>
				</div>
			</div>
		</div>
	);
};

export default RequestModal;
