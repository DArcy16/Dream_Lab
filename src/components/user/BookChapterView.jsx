/** @format */

import React from "react";
import { useState } from "react";

import { IoArrowBackOutline } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";
import BookContentDrawer from "./BookContentDrawer";
import { useLocation, useNavigate } from "react-router-dom";
import { useChaptersOfBook } from "../../hooks/useBooks";

const BookChapterView = ({ name }) => {
	const [showDrawer, setShowDrawer] = useState(false);
	const [page, setPage] = useState(0);
	const navigate = useNavigate();
	const bookTitle = name.split("-").join(" ");
	const location = useLocation();

	const prevPath = new URLSearchParams(location.search).get("prevPath");
	const id = new URLSearchParams(location.search).get("id");
	const cid = new URLSearchParams(location.search).get("cid");

	const { data } = useChaptersOfBook(id);


	const handlePrevious = () => {
		setPage(page - 1);
	};

	const handleNext = () => {
		setPage(page + 1);
	};

	return (
		<div className="relative snap-start w-screen max-w-5xl mx-auto h-full md:h-screen md:overflow-hidden flex md:gap-6 p-10">
			<aside className="hidden h-full border-r border-grey2 basis-1/5 md:block">
				<h2 className="text-lg font-medium">Content</h2>
				<ul className="space-y-4 mt-4">
					{data?.bookChapters.map((chapter, index) => (
						<li
							className={`${
								index === page ? "text-dreamLabColor2" : "hover:text-grey4"
							} cursor-pointer `}
							key={chapter?.id}
							onClick={() => setPage(index)}
						>
							<p>{chapter?.title}</p>
						</li>
					))}
				</ul>
			</aside>

			{showDrawer ? (
				<BookContentDrawer
					setShowDrawer={setShowDrawer}
					setPage={setPage}
					page={page}
					data={data}
				/>
			) : null}

			<div className="relative w-screen md:basis-4/5 md:mx-auto h-full md:h-full md:px-10 md:overflow-hidden md:overflow-y-auto [&::-webkit-scrollbar]:hidden">
				<div className="flex justify-between items-center">
					<button
						className="flex items-center justify-center gap-2 btn-prev py-2 border-none"
						onClick={() =>
							navigate(`/book/${name}?prevPath=${encodeURIComponent(prevPath)}&cid=${encodeURIComponent(cid)}`)
						}
					>
						<IoArrowBackOutline />
						Back
					</button>
					<button
						className="flex md:hidden items-center justify-center gap-2 font-medium text-grey4 py-2 border-none"
						onClick={() => setShowDrawer(true)}
					>
						Book Content
						<GoThreeBars />
					</button>
				</div>
				<h1 className="text-xl font-bold mt-8 capitalize">{bookTitle}</h1>
				<h2 className="font-semibold my-4">
					{data?.bookChapters.length > 0 ? data?.bookChapters[page]?.title : "NO CONTENT YET"}
				</h2>
				<p className="overflow-hidden overflow-y-auto">
					{data?.bookChapters.length > 0 ? data?.bookChapters[page]?.content : "NO CONTENT YET"}
				</p>

				<div className="sticky flex bottom-0 left-0 right-0 items-center justify-between sm:justify-center gap-4 bg-white mt-4 py-4 border-t border-grey4/50">
					<button
						className="btn-prev px-4 py-1"
						onClick={handlePrevious}
						disabled={page === 0}
					>
						Previous
					</button>
					<p>
						Page {page + 1} of {data?.bookChapters?.length}
					</p>
					<button
						className="btn-1 px-4 py-1"
						onClick={handleNext}
						disabled={page === data?.bookChapters?.length - 1}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookChapterView;
