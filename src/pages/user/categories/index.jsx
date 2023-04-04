/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useCategoryData } from "../../../hooks/useCategories";
import CategoryCardsList from "../../../components/user/CategoryCardsList";

const index = () => {
	const { data: categories, isLoading } = useCategoryData();
	

	return (
		<div className="w-full p-10">
			<h2 className="text-xl font-bold text-center">Category</h2>
			<CategoryCardsList categories={categories} isLoading={isLoading}/>
		</div>
	);
};

export default index;
