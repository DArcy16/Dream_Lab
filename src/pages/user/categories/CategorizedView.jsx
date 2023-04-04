/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useUserBook } from "../../../hooks/useBooks";
import { useState } from "react";
import { useUserArticle } from "../../../hooks/useArticles";
import { ClipLoader } from "react-spinners";
import ContentCardList from "../../../components/user/ContentCardList";
import Paginaiton from "../../admin/subscribers/Paginaiton";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const CategorizedView = () => {
	const location = useLocation();
	const pathSplit = location.pathname.split("/");
	const categorySlug = pathSplit[2];
	const type = pathSplit[3];
	const cid = new URLSearchParams(location.search).get("cid");
	const [url, setUrl] = useState("");

	const { data, isLoading, isError, error } =
		type === "book" ? useUserBook(url, cid) : useUserArticle(url, cid);

	return (
		<div className="p-10">
			<ul className="flex items-center gap-1 font-medium">
				<li>
					<Link to="/category" className="capitalize">
						category
					</Link>
				</li>
				<li className="flex items-center gap-1 capitalize">
					<MdKeyboardDoubleArrowRight />
					{categorySlug.split("-").join(" ")}
				</li>
			</ul>
			<ul className="flex items-center justify-center gap-4 py-4">
				<li>
					<Link
						to={`/category/${categorySlug}/book?cid=${encodeURIComponent(cid)}`}
						className={`${type === "book" ? "text-dreamLabColor2" : null} `}
					>
						Book
					</Link>
				</li>
				<li>
					<Link
						to={`/category/${categorySlug}/article?cid=${encodeURIComponent(
							cid
						)}`}
						className={`${type === "article" ? "text-dreamLabColor2" : null} `}
					>
						Article
					</Link>
				</li>
			</ul>

			{isError ? (
				<p className="text-center mx-auto flex items-center w-full h-64  text-red-400">
					{error.message}
				</p>
			) : isLoading ? (
				<div className="w-full h-64 flex items-center justify-center">
					<ClipLoader size={30} />
				</div>
			) : (
				<ContentCardList data={data?.items} type={type} isCategory />
			)}

			{!isLoading ? <Paginaiton data={data} setUrl={setUrl} isUser /> : null}
		</div>
	);
};

export default CategorizedView;
