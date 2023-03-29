/** @format */

import React from "react";
import { useState } from "react";
import { RiFileCopy2Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { useBooksData } from "../../../hooks/useBooks";
import Paginaiton from "../subscribers/Paginaiton";
import BookItem from "./BookItem";
import BookNav from "./BookNav";

const index = () => {
	const [url, setUrl] = useState("");
	const { isError, isLoading, error, data } = useBooksData(url);


	if (isLoading) {
		return (
			<section className="flex items-center justify-center h-screen w-full">
				<ClipLoader />
			</section>
		);
	}

	if (isError) {
		return <h1>{error.message}</h1>;
	}

	return (
		<div className=" flex flex-col items-center overflow-hidden w-full">
			<div className=" w-full p-7">
				<BookNav total={data?.meta.totalItems} />
				{data?.items?.length > 0 ? (
					data?.items?.map((item, index) => (
						<BookItem key={index} book={item} bookNo={index + 1} />
					))
				) : (
					<div className="w-full pt-32">
						<RiFileCopy2Line className="w-24 h-24 mx-auto text-grey2" />
						<p className="text-center mt-2 text-grey2">
							You have no books created yet.
						</p>
					</div>
				)}
			</div>
			{!isLoading ? <Paginaiton data={data} setUrl={setUrl} /> : null}
		</div>
	);
};

export default index;
