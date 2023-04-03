/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import BookChapterView from "../../../components/user/BookChapterView";
import ArticleContentView from "../../../components/user/ArticleContentView";

const DetailsView = () => {
	const { pathname } = useLocation();
	const type = pathname.split("/")[1];
	const name = pathname.split("/")[2];
	return (
		<>
			{type === "book" ? (
				<BookChapterView name={name} />
			) : (
				<ArticleContentView name={name} />
			)}
		</>
	);
};

export default DetailsView;
