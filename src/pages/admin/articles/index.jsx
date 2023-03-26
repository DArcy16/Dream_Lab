/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import { useArticle } from "../../../hooks/useArticles";
import { ClipLoader } from "react-spinners";
import SingleArticle from "./SingleArticle";
import Paginaiton from "../subscribers/Paginaiton";
import { useState } from "react";

const index = () => {
	const navigate = useNavigate();
	const [url, setUrl] = useState("");

	const { data, isLoading, isError, error } = useArticle(url);



	return (
		// <div className="w-full h-full flex items-center justify-center gap-4">
		// 	{/* <button onClick={() => navigate("create")} className="btn-2 px-4 py-2">
		// 		Create
		// 	</button>
		// 	<button onClick={() => navigate("edit/1")} className="btn-2 px-4 py-2">
		// 		Edit 1
		// 	</button>
		// 	<button onClick={() => navigate("edit/2")} className="btn-2 px-4 py-2">
		// 		Edit 2
		// 	</button> */}
		// </div>
		<>
			<div className="p-8">
				<header className="flex justify-between items-center">
					<h2 className="text-lg font-semibold ">
						Uploaded Articles{" "}
						<span className="ml-6 font-semibold text-sm">
							total : {isLoading ? null : data.meta.totalItems}
						</span>
					</h2>
					<button
						className="btn-2 flex gap-2 items-center justify-center px-4 py-2"
						onClick={() => navigate("create")}
					>
						{" "}
						<BsPlusCircleFill /> Create Articles{" "}
					</button>
				</header>

				<section className=" my-6">
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
						data.items.map((article, index) => (
							<SingleArticle key={article.id} article={article} index={index} />
						))
					)}
				</section>
			</div>
			{!isLoading && <Paginaiton data={data} setUrl={setUrl} />}
		</>
	);
};

export default index;
