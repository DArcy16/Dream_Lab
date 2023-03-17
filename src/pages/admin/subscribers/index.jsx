/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";

import {
	BsPersonCheckFill,
	BsPersonFillAdd,
	BsPlusCircleFill,
} from "react-icons/bs";

import SubscriberList from "./SubscriberList";
import RequestModal from "./RequestModal";
import SearchSection from "./SearchSection";

const data = [
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "p",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "a",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "p",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "a",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "p",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "a",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "p",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "a",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "p",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "a",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "e",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "e",
		data: "15 Jan 2022",
	},
	{
		name: "Xapher",
		img: "../../../assets/profile.png",
		plan: "12 Months Plan",
		status: "e",
		data: "15 Jan 2022",
	},
];



const index = () => {
	const [navLink, setNavLink] = useState("all");
	const [showRequestModal, setShowRequestModal] = useState(false);
	const [subscribers, setSubscribers] = useState(data);

	useEffect(() => {
		if(navLink === "all") {
			setSubscribers(data)
		} else if(navLink === "request") {
			setSubscribers(data.filter(user => user.status === 'p'))
		} else if(navLink === "active") {
			setSubscribers(data.filter(user => user.status === 'a'))
		} else {
			setSubscribers(data.filter(user => user.status === 'e'))
		}

	}, [navLink])

	return (
		<div className="p-10 basis-4/5">
			<h2 className="text-lg font-bold">Subscribers</h2>

			{/* Show Number of Subscribers Section */}

			<section className="w-full flex justify-center space-x-6 mt-8">
				<div className="flex w-1/4 bg-grey6/30 rounded-md items-center justify-center space-x-4 px-3 py-6">
					<div className="p-2 bg-dreamLabColor1/25 rounded-md">
						<FaCrown className="text-dreamLabColor1 w-6 h-6" />
					</div>
					<div className="space-y-2">
						<p>Total Subscribers</p>
						<p className="text-2xl font-extrabold text-dreamLabColor1">
							23,500
						</p>
					</div>
				</div>

				<div className="flex w-1/4 bg-grey6/30 rounded-md items-center justify-center space-x-4 px-3 py-6">
					<div className="p-2 bg-green/25 rounded-md">
						<BsPersonCheckFill className="text-green w-6 h-6" />
					</div>
					<div className="space-y-2">
						<p>Active Subscribers</p>
						<p className="text-2xl font-extrabold text-green">23,500</p>
					</div>
				</div>

				<div className="flex w-1/4 bg-grey6/30 rounded-md items-center justify-center space-x-4 px-3 py-6">
					<div className="p-2 bg-gold/25 rounded-md">
						<BsPersonFillAdd className="text-gold w-6 h-6" />
					</div>
					<div className="space-y-2">
						<p>Request Subscribers</p>
						<p className="text-2xl font-extrabold text-gold">23,500</p>
					</div>
				</div>
			</section>

			{/* Navbar*/}
			<section className="mt-8">
				<div className="w-full flex items-center justify-between py-2">
					<nav className="flex item-center gap-6">
						<h3
							className={`font-semibold ${
								navLink === "all"
									? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
									: null
							} cursor-pointer`}
							onClick={() => setNavLink("all")}
						>
							All Subscribers
						</h3>
						<h3
							className={`font-semibold ${
								navLink === "request"
									? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
									: null
							} cursor-pointer`}
							onClick={() => setNavLink("request")}
						>
							Request
						</h3>
						<h3
							className={`font-semibold ${
								navLink === "active"
									? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
									: null
							} cursor-pointer`}
							onClick={() => setNavLink("active")}
						>
							Active
						</h3>
						<h3
							className={`font-semibold ${
								navLink === "expired"
									? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
									: null
							} cursor-pointer`}
							onClick={() => setNavLink("expired")}
						>
							Expired
						</h3>
					</nav>
					<button className="btn-2 flex gap-2 items-center justify-center px-4 py-2">
						{" "}
						<BsPlusCircleFill /> Add Subscription{" "}
					</button>
				</div>
			</section>
			<div className="w-full h-[0.05rem] bg-grey6 mt-2"></div>

			{/* Search Section*/}
			<SearchSection setSubscribers={setSubscribers}/>

			{/* Subscribers List Section*/}
			<SubscriberList subscribers={subscribers} setShowRequestModal={setShowRequestModal}/>

			{showRequestModal ? <RequestModal setShowRequestModal={setShowRequestModal}/> : null}
		</div>
	);
};

export default index;
