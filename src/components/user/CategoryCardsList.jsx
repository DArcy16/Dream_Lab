/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const CategoryCardsList = ({ categories, isLoading, isViewPage = false }) => {
	const navigate = useNavigate();

	const handleCategorySelect = (category) => {
		if (!isViewPage) {
			navigate(
				`${category.name
					.toLowerCase()
					.split(" ")
					.join("-")}/book?cid=${encodeURIComponent(category.id)}`
			);
		}
	};

	return (
		<div className="flex w-full px-2 md:px-10 flex-wrap gap-4 items-center">
			{!isLoading ? (
				categories?.map((category) => (
					<div
						className="flex items-center justify-center gap-6 border border-grey2/30 hover:border-grey2/60 rounded-lg px-6 py-2 mt-6 cursor-pointer"
						onClick={() => handleCategorySelect(category)}
						key={category.id}
					>
						<img
							src={category.icon}
							alt={category.name}
							className="w-6 h-6 md:w-10 md:h-10 rounded-lg object-fit"
						/>
						<p className="font-medium md:text-lg md:font-semibold">
							{category.name}
						</p>
					</div>
				))
			) : (
				<div className="w-full h-64 flex items-center justify-center">
					<ClipLoader size={30} />
				</div>
			)}
		</div>
	);
};

export default CategoryCardsList;
