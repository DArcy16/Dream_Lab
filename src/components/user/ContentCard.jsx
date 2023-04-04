/** @format */

import React from "react";
import { IoIosTimer } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const ContentCard = ({
	item,
	type,
	isHome = false,
	isView = false,
}) => {
	const location = useLocation();
	const navigate = useNavigate();
	const prevPath = isView
		? new URLSearchParams(location.search).get("prevPath")
		: null;
	const cid = new URLSearchParams(location.search).get("cid") ;

	const handleCardClick = () => {
		isView
			? navigate(
					`/${type}/${item.slug}?prevPath=${encodeURIComponent(prevPath)}&cid=${encodeURIComponent(cid)}`
			  )
			: navigate(
					`/${type}/${item.slug}?prevPath=${encodeURIComponent(
						location.pathname
					)}&cid=${encodeURIComponent(cid)}`
			  );
	};

	return (
		<article
			className={`px-6 py-4 ${
				isHome ? "w-10/12" : "w-full"
			} snap-center sm:w-48 md:w-52 flex flex-col justify-center border-x  border-x-grey6/30 shadow-md flex-none mt-4 space-y-3 cursor-pointer transition-all duration-500 hover:scale-105`}
			onClick={handleCardClick}
		>
			<img
				src={item.mainImage}
				alt="item.title"
				className=" w-20 h-20 mx-auto object-contain overflow-hidden"
			/>
			<h2 className="text-center font-medium">{item.title}</h2>
			<p className="text-sm">
				By{" "}
				{type === "book"
					? item.bookAuthors.map((author) => (
							<span key={author.id}>{author.name}, </span>
					  ))
					: item.articleAuthors.map((author) => (
							<span key={author.id}>{author.name}, </span>
					  ))}
			</p>
			<div className="flex items-center justify-between">
				<div className="flex items-center text-sm gap-1">
					<IoIosTimer /> {item.readingTime}
				</div>
				<MdKeyboardDoubleArrowRight />
			</div>
		</article>
	);
};

export default ContentCard;
