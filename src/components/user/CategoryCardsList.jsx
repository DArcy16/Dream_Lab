import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from "react-spinners";


const CategoryCardsList = ({ categories, isLoading }) => {
    const location = useLocation();
    const navigate = useNavigate();

	const handleCategorySelect = (category) => {
        console.log(category)
	};

	return (
		<div className="flex w-full px-10 flex-wrap gap-4 items-center">
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
							className="w-10 h-10 rounded-lg object-fit"
						/>
						<p className="text-lg font-semibold">{category.name}</p>
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

export default CategoryCardsList