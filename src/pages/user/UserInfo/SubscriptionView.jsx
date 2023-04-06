/** @format */

import React from "react";
import { ClipLoader } from "react-spinners";

import { TbCrownOff } from "react-icons/tb";
import { RiVipCrownFill } from "react-icons/ri";
import { useUserSubscription } from "../../../hooks/useUserInfo";

const SubscriptionView = () => {
	const {
		data: subscribedData,
		isLoading,
		isError,
		error,
	} = useUserSubscription();
	console.log(subscribedData);

	return (
		<div className="w-full max-w-4xl mx-auto flex flex-col items-center p-6 md:p-10">
			<RiVipCrownFill className="w-16 h-16 text-gold mb-8" />
			<h1 className="font-semibold text-2xl">Subscription Plan</h1>

			<section className="mt-6 w-full px-4 py-4 h-[57vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden">
				{isError ? (
					<div className="w-full h-60 flex items-center justify-center">
						<p className="text-lg text-red-500">{error.message}</p>
					</div>
				) : isLoading ? (
					<div className="w-full h-60 flex items-center justify-center">
						<ClipLoader color="grey" size={30} />
					</div>
				) : subscribedData.length > 0 ? (
					subscribedData.map((item) => (
						<article
							className="w-full flex items-center justify-between shadow-lg border-x border-t border-t-grey6/20 border-x-grey6/60 rounded-lg px-10 py-6 mt-4"
							key={item.id}
						>
							<div>
								<h2 className="text-xl font-semibold capitalize text-dreamLabColor1">
									{item.subscription.name}
								</h2>
								<p className="text-sm"> Expire date : {item.expiredDate}</p>
							</div>
							<div>
								{item.status === "a" ? (
									<p className=" bg-green py-1 sm:py-2 px-4 text-white rounded-lg">
										Active
									</p>
								) : item.status === "p" ? (
									<p className="bg-orangee  py-1 sm:py-2 px-4 text-white rounded-lg">
										Pending
									</p>
								) : (
									<p className=" bg-grey py-1 sm:py-2 px-4 text-white rounded-lg">
										Expired
									</p>
								)}
							</div>
						</article>
					))
				) : (
					<div className="flex flex-col items-center py-32">
						<TbCrownOff className="w-32 h-32 text-grey/60" />
						<p className="mt-6 text-lg text-grey/60">
							You haven't subscribed any subscription yet.
						</p>
					</div>
				)}
			</section>
		</div>
	);
};

export default SubscriptionView;
