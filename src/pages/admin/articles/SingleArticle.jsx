/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const SingleArticle = ({ article, index }) => {
	const navigate = useNavigate();

	return (
		<article className="w-full flex items-center justify-between px-8 py-3 shadow rounded-lg border-x border-x-grey4/[.15] mt-4">
			<div className="flex items-center space-x-2">
				<p>{index + 1}.</p>

				<img
					src={article.mainImage}
					alt={article.title}
					className=" w-28 h-28 object-fit"
				/>
			</div>

			<h2 className=" w-1/6 text-center font-semibold text-lg capitalize">
				{article.title ? (
					article.title
				) : (
					<span className="w-1/6 text-grey font-normal normal-case">
						{" "}
						{"<-- title -->"}{" "}
					</span>
				)}
			</h2>

			<div className="w-1/6 flex flex-wrap gap-1 text-center">
				{article.articleAuthors.length > 0 ? (
					article.articleAuthors.map((author) => (
						<p className="text-center font-medium capitalize" key={author.id}>
							{author.name},{" "}
						</p>
					))
				) : (
					<p className="text-grey"> {"<-- author -->"} </p>
				)}
			</div>

			<div className="w-1/6 flex items-center justify-center gap-2">
				<div
					className={`${
						article.isFree === false
							? "bg-red-400 text-white line-through"
							: " bg-subtleGrey"
					} rounded-full py-1 px-4 font-medium `}
				>
					Free
				</div>
				<div
					className={`${
						article.status !== "a"
							? "bg-red-400 text-white line-through"
							: "bg-green text-white"
					} rounded-full py-1 px-4 font-medium`}
				>
					Active
				</div>
			</div>

			<div className="w-1/6 flex flex-wrap gap-1 items-center justify-center text-center text-sm ">
				{article.categories.length > 0 ? (
					article.categories.map((category) => (
						<p
							key={category.id}
							className="border border-grey4 py-1 px-4 rounded-full font-medium text-grey4 w-fit mx-auto"
						>
							{category.name}
						</p>
					))
				) : (
					<p className="text-grey text-center"> {"<-- category -->"} </p>
				)}
			</div>

			<button
				className="btn-2 py-2 px-5"
				onClick={() => navigate(`edit/${article.slug}`)}
			>
				Edit
			</button>
		</article>
	);
};

export default SingleArticle;
