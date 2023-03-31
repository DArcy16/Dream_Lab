/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import LibraryNav from "./LibraryNav";
import { useUserBook } from "../../../hooks/useBooks";
import { useState } from "react";
import { useUserArticle } from "../../../hooks/useArticles";
import { ClipLoader } from "react-spinners";
import ContentCardList from "../../../components/user/ContentCardList";
import Paginaiton from "../../admin/subscribers/Paginaiton";

const index = () => {
	const { pathname: path } = useLocation();

	const [url, setUrl] = useState("");

	const pathSplit = path.split("/");
	const type = pathSplit[2];

	const { data, isLoading, isError, error } =
		type === "book" ? useUserBook(url) : useUserArticle(url);


	return (
		<div className="p-8">
			<h1 className="text-center font-bold text-xl">Library</h1>

			<LibraryNav type={type} setUrl={setUrl}/>

			{isError ? (
				<p className="text-center mx-auto flex items-center w-full h-64  text-red-400">
					{error.message}
				</p>
			) : isLoading ? (
				<div className="w-full h-64 flex items-center justify-center">
					<ClipLoader size={30} />
				</div>
			) :  (
				<ContentCardList data={data?.items} type={type}/>
			)}

			{!isLoading ? <Paginaiton data={data} setUrl={setUrl} isUser/> : null}
		</div>
	);
};

export default index;
