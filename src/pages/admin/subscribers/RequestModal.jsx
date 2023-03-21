/** @format */

import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import profileImg from "../../../assets/profile.png";
import { useAcceptSubscriber } from "../../../hooks/useSubscribers";
import { ClipLoader } from "react-spinners";

const RequestModal = ({
	setShowRequestModal,
	subscriber,
	refetch,
	showRequestModal,
	setCount,
	count,
}) => {
	const acceptSubscriberMutation = useAcceptSubscriber();

	const handleAccept = (subscriber) => {
		const status = showRequestModal === "active" ? "e" : "a";
		acceptSubscriberMutation.mutate({
			id: subscriber.id,
			body: { status },
		});
			setCount(
				count.activeCount === "--" && count.requestCount === "--"
					? count
					: showRequestModal === "active"
					? { ...count, activeCount: count.activeCount - 1 }
					: {
							...count,
							activeCount: count.activeCount + 1,
							requestCount: count.requestCount - 1,
					  }
			);
		
	};

	const handleReject = () => {
		const status = showRequestModal === "active" ? "c" : "r";
		acceptSubscriberMutation.mutate({
			id: subscriber.id,
			body: { status },
		});
			setCount(
				count.activeCount === "--" && count.requestCount === "--"
					? count
					: showRequestModal === "active"
					? { ...count, activeCount: count.activeCount - 1 }
					: {
							...count,
							requestCount: count.requestCount - 1,
					  }
			);
		
	};

	console.log(count)

	useEffect(() => {
		if (acceptSubscriberMutation.isSuccess) {
			setShowRequestModal("");
			refetch();
		}
	}, [acceptSubscriberMutation.isSuccess]);

	const BtnRejectTheme =
		showRequestModal === "request"
			? "border border-red-700 text-red-700 hover:text-red-700/80 hover:border-red-700/80"
			: "border border-orangee text-orangee hover:text-orangee/80 hover:border-orangee/80";

	const BtnAcceptTheme =
		showRequestModal === "request"
			? "btn-2"
			: "border border-red-700 text-red-700 hover:text-red-700/80 hover:border-red-700/80";

	return (
		<div className="z-50 absolute w-full h-full top-0 left-0 bg-grey4/40">
			<div className="fixed top-0 right-0 w-1/4 h-full px-8 py-4 bg-white overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden">
				<div className="flex justify-between items-center">
					<h2 className="text-lg font-bold capitalize">
						{showRequestModal} Subscriber
					</h2>
					<RxCross2
						onClick={() => setShowRequestModal("")}
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
					{acceptSubscriberMutation.isLoading ? (
						<ClipLoader size={20} />
					) : showRequestModal === "active" ||
					  showRequestModal === "request" ? (
						<>
							<button
								className={`${BtnRejectTheme} font-semibold px-8 py-1 rounded-md flex items-center justify-center gap-2`}
								onClick={handleReject}
							>
								{" "}
								{showRequestModal === "active" ? "Cancel" : "Reject"}
							</button>
							<button
								className={`${BtnAcceptTheme} px-8 py-1 font-semibold rounded-md flex items-center justify-center gap-2`}
								onClick={() => handleAccept(subscriber)}
							>
								{showRequestModal === "active" ? "Expire" : "Accept"}
							</button>
						</>
					) : showRequestModal === "expired" ? (
						<div className="w-full text-white capitalize bg-red-700 p-2 text-center font-semibold rounded-md">
							{showRequestModal}
						</div>
					) : (
						<div className="w-full text-white capitalize bg-orangee p-2 text-center font-semibold rounded-md">
							{showRequestModal}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default RequestModal;
