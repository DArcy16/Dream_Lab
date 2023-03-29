/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactSwitch from "react-switch";
import { ClipLoader } from "react-spinners";

import { useAuthorData } from "../../../hooks/useAuthor";
import { useCategoryData } from "../../../hooks/useCategories";

import InputForm from "../../../components/form/InputForm";
import MultipleSelect from "../../../components/form/MultipleSelect";
import TextareaForm from "../../../components/form/TextareaForm";

import { IoArrowBackOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useSingleBookData, useUpdateBook } from "../../../hooks/useBooks";

const editBookSchema = yup.object({
	title: yup.string().required(),
	readingTime: yup.string().required(),
	shortDesc: yup.string().required(),
	page: yup.string().required(),
});

const EditBookData = () => {
	const { slug } = useParams();
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
	const [prevTitle, setPrevTitle] = useState("");
	const [checkTitleUpdate, setCheckTitleUpdate] = useState(false);

	const updateBookMutation = useUpdateBook();

	const { data: book, isSuccess: isBookSuccess } = useSingleBookData(slug);
	const { data: categories, isLoading: isCategoriesLoading } =
		useCategoryData();

	const { data: authors, isLoading: isAuthorsLoading } =
		useAuthorData("bookauthors");

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(editBookSchema),
	});

	

	useEffect(() => {
		if (isBookSuccess) {
			setValue("title", book.title);
			setValue("readingTime", book.readingTime);
			setValue("shortDesc", book.shortDesc);
			setValue("page", book.page);
			setSelectedCategories(book.categories);
			setSelectedAuthors(book.bookAuthors);
			setIcon(book.mainImage);
			if (book.status) {
				setStatus({ free: book.isFree, active: true });
			} else {
				setStatus({ free: book.isFree, active: false });
			}
			setPrevTitle(book.title);
		}
	}, [isBookSuccess]);

	const onSubmit = (data) => {
		const categories = selectedCategories.map((category) => category.id);
		const bookAuthors = selectedAuthors.map((author) => author.id);
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

		if (prevTitle === data.title) {
			setCheckTitleUpdate(true);
		} else {
			updateBookMutation.mutate({
				...data,
				id: book.id,
				icon,
				isFree,
				status: tempStatus,
				bookAuthors,
				categories,
			});
		}
	};

	return (
		<div className="w-full p-10">
			<div className="flex items-center gap-[18vw]">
				<button
					className="flex items-center justify-center gap-2 btn-prev py-2 border-none"
					onClick={() => navigate("/admin/books")}
				>
					<IoArrowBackOutline />
					Back
				</button>
				<h3 className="sub-heading text-center">Edit Book</h3>
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
							isEdit
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

						<InputForm
							type="text"
							id="page"
							label="Book Chapter"
							placeholder="Type number of chapter"
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
				{updateBookMutation.isError ? (
					<p className="text-red-400 text-center normal-case mt-2">
						{updateBookMutation.error.message}
					</p>
				) : checkTitleUpdate ? (
					<p className="text-red-400 text-center normal-case mt-2">
						You need to update title
					</p>
				) : updateBookMutation.isSuccess ? (
					<p className=" text-dreamLabColor2 text-center normal-case mt-2 ">
						Success
					</p>
				) : null}
				<button
					className="w-1/4 btn-2 flex items-center justify-center gap-1 py-2 mx-auto mt-8"
					type="submit"
				>
					{updateBookMutation.isLoading ? (
						<ClipLoader color="white" size={20} />
					) : null}
					Save
				</button>
			</form>
			{showAuthorsOption || showCategoriesOption ? (
				<div
					className="absolute top-0 left-0 w-full h-screen transparent z-10"
					onClick={() => {
						setShowAuthorsOption(false);
						setShowCategoriesOption(false);
					}}
				></div>
			) : null}
		</div>
	);
};

export default EditBookData;
