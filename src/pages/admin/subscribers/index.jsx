/** @format */

import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import SubscriberList from "./SubscriberList";
import RequestModal from "./RequestModal";
import SearchSection from "./SearchSection";
import Navbar from "./Navbar";
import { useSubscribers } from "../../../hooks/useSubscribers";
import Paginaiton from "./Paginaiton";
import CountSection from "./CountSection";

const index = () => {
	const [navLink, setNavLink] = useState("all");
	const [showRequestModal, setShowRequestModal] = useState(false);
	const [subscribers, setSubscribers] = useState([]);
	const [subscriber, setSubscriber] = useState([]);
	const [filter, setFilter] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [url, setUrl] = useState("");
	const { data, isLoading, isError, error, refetch } = useSubscribers(
		url,
		navLink
	);

	const filterArr = isLoading
		? null
		: data.items.reduce((arr, subscriber) => {
				if (index === 0) {
					arr.push({
						value: subscriber.subscription.id,
						name: subscriber.subscription.name,
					});
				} else {
					if (arr.some((item) => item.value === subscriber.subscription.id)) {
					} else {
						arr.push({
							value: subscriber.subscription.id,
							name: subscriber.subscription.name,
						});
					}
				}

				return arr;
		  }, []);


	useEffect(() => {
		if (!isLoading) {
			setSubscribers(
				data.items
					?.filter((item) =>
						filter === "all"
							? true
							: item?.subscription?.id === parseInt(filter)
					)
					?.filter((item) =>
						searchQuery === ""
							? true
							: item?.user?.displayName
									?.toLowerCase()
									?.includes(searchQuery?.toLowerCase())
					)
			);
		}
	}, [filter, searchQuery, data]);

	return (
		<div className="p-10 basis-4/5">
			<h2 className="text-lg font-bold">Subscribers</h2>

			<CountSection />

			<Navbar navLink={navLink} setNavLink={setNavLink} setUrl={setUrl} setFilter={setFilter}/>

			<SearchSection setSearchQuery={setSearchQuery} setFilter={setFilter} filterArr={filterArr}/>

			{isError ? (
				<div className="w-full h-60 flex items-center justify-center">
					<p className="text-lg text-red-500">{error.message}</p>
				</div>
			) : isLoading ? (
				<div className="w-full h-60 flex items-center justify-center">
					<ClipLoader color="grey" size={30} />
				</div>
			) : (
				<>
					<SubscriberList
						subscribers={subscribers}
						setSubscriber={setSubscriber}
						setShowRequestModal={setShowRequestModal}
					/>

					<Paginaiton data={data} setUrl={setUrl} />
				</>
			)}

			{showRequestModal ? (
				<RequestModal
					setShowRequestModal={setShowRequestModal}
					subscriber={subscriber}
					refetch={refetch}
				/>
			) : null}
		</div>
	);
};

export default index;
