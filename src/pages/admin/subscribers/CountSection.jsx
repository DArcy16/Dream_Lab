import React from 'react'
import { FaCrown } from "react-icons/fa";

import {
	BsPersonCheckFill,
	BsPersonFillAdd,
} from "react-icons/bs";

const CountSection = ({count}) => {
    

  return (
		<section className="w-full flex justify-center space-x-6 mt-8">
			<div className="flex w-1/4 bg-grey6/30 rounded-md items-center justify-center space-x-4 px-3 py-6">
				<div className="p-2 bg-dreamLabColor1/25 rounded-md">
					<FaCrown className="text-dreamLabColor1 w-6 h-6" />
				</div>
				<div className="space-y-2">
					<p>Total Subscribers</p>
					<p className="text-2xl font-extrabold text-dreamLabColor1">
						{" "}
						{count.totalCount} <span className="text-xs">in this page</span>
					</p>
				</div>
			</div>

			<div className="flex w-1/4 bg-grey6/30 rounded-md items-center justify-center space-x-4 px-3 py-6">
				<div className="p-2 bg-green/25 rounded-md">
					<BsPersonCheckFill className="text-green w-6 h-6" />
				</div>
				<div className="space-y-2">
					<p>Active Subscribers</p>
					<p className="text-2xl font-extrabold text-green">
						{count.activeCount} <span className="text-xs">in this page</span>
					</p>
				</div>
			</div>

			<div className="flex w-1/4 bg-grey6/30 rounded-md items-center justify-center space-x-4 px-3 py-6">
				<div className="p-2 bg-gold/25 rounded-md">
					<BsPersonFillAdd className="text-gold w-6 h-6" />
				</div>
				<div className="space-y-2">
					<p>Request Subscribers</p>
					<p className="text-2xl font-extrabold text-gold">
						{count.requestCount} <span className="text-xs">in this page</span>
					</p>
				</div>
			</div>
		</section>
	);
}

export default CountSection