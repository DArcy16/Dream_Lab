/** @format */

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BookSampleView from "../../../components/user/BookSampleView";
import ArticleSampleView from "../../../components/user/ArticleSampleView";

const SampleView = () => {
	const { type, name } = useParams();

	return (
		<>
			{type === "book" ? (
				<BookSampleView type={type} name={name} />
			) : (
				<ArticleSampleView type={type} name={name} />
			)}
		</>
	);
};

export default SampleView;
