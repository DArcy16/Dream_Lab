/** @format */

import React from "react";
import { ClipLoader } from "react-spinners";

import { IoArrowBackOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useArticleContent } from "../../hooks/useArticles";

const ArticleContentView = ({ name }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const prevPath = new URLSearchParams(location.search).get("prevPath");
	const cid = new URLSearchParams(location.search).get("cid");
	const { data, isLoading, isError, error } = useArticleContent(name);

	return (
		<>
			<div className="w-full max-w-3xl mx-auto px-5 py-5 md:px-10 md:py-10 space-y-6 bg-white">
				<button
					className="flex items-center justify-center gap-2 btn-prev border-none"
					onClick={() =>
						navigate(
							`/article/${name}?prevPath=${encodeURIComponent(
								prevPath
							)}&cid=${encodeURIComponent(cid)}`
						)
					}
				>
					<IoArrowBackOutline />
					Back
				</button>
				{isError ? (
					<div className="w-full h-40 flex items-center justify-center">
						<p className="text-center text-semibold text-lg normal-case">
							{error.message}
						</p>
					</div>
				) : isLoading ? (
					<div className="w-full h-40 flex items-center justify-center">
						<ClipLoader size={30} />
					</div>
				) : (
					<>
						<h2 className="font-bold text-xl text-center">{data?.title}</h2>
						<p className="text-left">{data?.content}</p>
					</>
				)}
			</div>
		</>
	);
};

export default ArticleContentView;
