/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useUserSingleBookData } from "../../hooks/useBooks";

import { IoArrowBackOutline, IoBookSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import {
	BsFillBookmarkPlusFill,
	BsFacebook,
	BsTwitter,
	BsLinkedin,
} from "react-icons/bs";
import CategoryCardsList from "./CategoryCardsList";
import ContentCardList from "./ContentCardList";

const BookSampleView = ({ name }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const { data, isLoading, isError, error } = useUserSingleBookData(name);

	console.log(data);

	const prevPath = new URLSearchParams(location.search).get("prevPath");

	return (
		<div className="w-full p-8 md:px-20 md:py-10">
			<button
				className="flex items-center justify-center gap-2 btn-prev py-2 px-4 border-none"
				onClick={() => {
					navigate(prevPath);
				}}
			>
				<IoArrowBackOutline />
				Back
			</button>

			<div className="flex flex-col items-start justify-between lg:flex-row">
				{/* Book View Left */}
				<div className="w-full lg:basis-3/5">
					{/* Book Cover */}
					<div className="flex flex-col w-full h-max items-center justify-between sm:flex-row">
						<img
							src={data?.mainImage}
							alt={data?.title}
							className=" w-3/5 mx-auto sm:mx-0 sm:w-1/5 object-contain rounded-md"
						/>

						<div className="space-y-6 flex flex-col sm:justify-between w-full sm:h-full sm:w-2/3 mt-6">
							<h2 className="text-xl font-bold text-start">{data?.title}</h2>
							<p>
								by{" "}
								{data?.bookAuthors?.map((author) => (
									<span key={author?.id}> {author?.name}, </span>
								))}
							</p>

							<div className="flex justify-between items-center">
								<div className="flex items-center justify-center gap-1">
									<IoBookSharp />
									<p className="text-sm">{data?.page} pages</p>
								</div>

								<div className="flex items-center justify-center gap-1">
									<IoIosTimer />
									<p className="text-sm">{data?.readingTime}</p>
								</div>
							</div>

							<button className="btn-2 w-full py-2">Subscribe Now</button>

							<div className="flex flex-col sm:flex-row items-center justify-between space-y-3">
								<div className="flex items-center justify-center gap-1 text-dreamLabColor2">
									<BsFillBookmarkPlusFill className="w-4 h-4" />
									<p className="text-sm font-medium">Add To Saved</p>
								</div>

								<div className="flex items-center justify-center gap-4">
									<p className="text-sm font-medium">Share to: </p>
									<BsFacebook />
									<BsTwitter />
									<BsLinkedin />
								</div>
							</div>
						</div>
					</div>

					<hr className="text-grey my-5" />
					{/* Preview */}
					<div>
						<h3 className="text-lg font-medium">What is it about?</h3>
						<CategoryCardsList
							categories={data?.categories}
							isLoading={false}
						/>
					</div>

					<div className="mt-6">
						<h3 className="text-lg font-medium">Overview</h3>
						<p className="mt-2">{data?.shortDesc}</p>
					</div>
				</div>

				{/* Releated Books */}
				<div className="md:basis-1/5 lg:basis-2/5">
					<h2 className="text-lg font-medium my-4 text-left lg:text-center">Related</h2>
					<ContentCardList data={data?.related} type="book" />
				</div>
			</div>
		</div>
	);
};

export default BookSampleView;
