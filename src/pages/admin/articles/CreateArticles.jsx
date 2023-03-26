/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactSwitch from "react-switch";
import { ClipLoader } from "react-spinners";

import { useAuthorData } from "../../../hooks/useAuthor";
import { useCreateArticle } from "../../../hooks/useArticles";
import { useCategoryData } from "../../../hooks/useCategories";

import InputForm from "../../../components/form/InputForm";
import MultipleSelect from "../../../components/form/MultipleSelect";
import TextareaForm from "../../../components/form/TextareaForm";

import { IoArrowBackOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const createArticleSchema = yup.object({
	title: yup.string().required(),
	readingTime: yup.string().required(),
	shortDesc: yup.string().required(),
	content: yup.string().required(),
});

const CreateArticles = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState({
		free: false,
		active: false,
	});
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [icon, setIcon] = useState();
	const [showAuthorsOption, setShowAuthorsOption] = useState(false);
	const [showCategoriesOption, setShowCategoriesOption] = useState(false);

	const createArticleMutation = useCreateArticle();

	useEffect(() => {
		if (createArticleMutation.isSuccess) {
			navigate("/admin/articles");
		}
	}, [createArticleMutation.isSuccess]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(createArticleSchema),
	});

	const { data: categories, isLoading: isCategoriesLoading } =
		useCategoryData();

	const { data: authors, isLoading: isAuthorsLoading } =
		useAuthorData("articleauthors");

	const onSubmit = (data) => {
		const categories = selectedCategories.map((category) => category.id);
		const articleAuthors = selectedAuthors.map((author) => author.id);
		let isFree, tempStatus;

		if (status.free) {
			isFree = 1;
		} else {
			isFree = 0;
		}

		if (status.active) {
			tempStatus = "a";
		} else {
			tempStatus = "p";
		}

		createArticleMutation.mutate({
			...data,
			icon,
			isFree,
			status: tempStatus,
			articleAuthors,
			categories,
		});
	};

	return (
		<div className="w-full p-10">
			<div className="flex items-center gap-[18vw]">
				<button
					className="flex items-center justify-center gap-2 btn-prev py-2 px-4 border-none"
					onClick={() => navigate("/admin/articles")}
				>
					<IoArrowBackOutline />
					Back
				</button>
				<h3 className="sub-heading text-center">Create Subscription</h3>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full flex flex-col items-center  mt-10"
			>
				{/* Top Section */}
				<div className="w-full h-full flex gap-6">
					{/* left input form */}
					<div className="w-1/2 h-full mt-4">
						<InputForm
							id="icon"
							type="file"
							accept="image/*"
							icon={icon}
							setIcon={setIcon}
							articlePage
						/>
					</div>

					{/* right input form */}
					<div className="w-1/2">
						<InputForm
							type="text"
							id="title"
							label="article name"
							placeholder="Type Article Name"
							register={register}
							errors={errors}
						/>

						<MultipleSelect
							id="authors"
							items={authors}
							selectedItems={selectedAuthors}
							setSelectedItems={setSelectedAuthors}
							isLoading={isAuthorsLoading}
							showOption={showAuthorsOption}
							setShowOption={setShowAuthorsOption}
							label="Author"
						/>

						<MultipleSelect
							id="categories"
							items={categories}
							selectedItems={selectedCategories}
							setSelectedItems={setSelectedCategories}
							isLoading={isCategoriesLoading}
							showOption={showCategoriesOption}
							setShowOption={setShowCategoriesOption}
							label="Category"
						/>

						<InputForm
							type="text"
							id="readingTime"
							label="Duration"
							placeholder="eg : 10 min"
							register={register}
							errors={errors}
						/>

						<div className="flex w-1/3 items-center justify-between mt-4">
							<label className="font-semibold">Free</label>
							<ReactSwitch
								onChange={() => setStatus({ ...status, free: !status.free })}
								checked={status.free}
							/>
						</div>

						<div className="flex w-1/3 items-center justify-between mt-4">
							<label className="font-semibold">Active</label>
							<ReactSwitch
								onChange={() =>
									setStatus({ ...status, active: !status.active })
								}
								checked={status.active}
							/>
						</div>
					</div>
				</div>

				<TextareaForm
					id="shortDesc"
					placeholder="type description"
					label="description"
					register={register}
					errors={errors}
				/>

				<TextareaForm
					id="content"
					placeholder="type content"
					label="content"
					register={register}
					errors={errors}
				/>
				{createArticleMutation.isError ? (
					<p className="text-red-400 text-center normal-case mt-2">
						{createArticleMutation.error.message}
					</p>
				) : null}

				<button
					className="w-1/4 btn-2 flex items-center justify-center gap-1 py-2 mx-auto mt-8"
					type="submit"
				>
					{createArticleMutation.isLoading ? (
						<ClipLoader color="white" size={20} />
					) : null}
					Create
				</button>
			</form>
		</div>
	);
};

export default CreateArticles;
