/** @format */

import React, { useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import InputForm from "../../../components/form/InputForm";
import ReactSwitch from "react-switch";
import { useAuthorData } from "../../../hooks/useAuthor";
import MultipleSelect from "../../../components/form/MultipleSelect";
import { Editor } from "@tinymce/tinymce-react";

const CreateArticles = () => {
	const [status, setStatus] = useState({
		free: false,
		active: false,
	});
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [showAuthorsOption, setShowAuthorsOption] = useState(false);
	const editorRef = useRef(null);



	const { data: authors, isLoading: isAuthorsLoading } =
		useAuthorData("articleauthors");

	const navigate = useNavigate();

	

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

			<form className="w-full flex flex-col items-center  mt-10">
				{/* Top Section */}
				<div className="w-full h-full flex gap-6">
					{/* left input form */}
					<div className="w-1/2 h-full mt-4">
						<InputForm id="icon" type="file" accept="image/*" articlePage />
					</div>

					{/* right input form */}
					<div className="w-1/2">
						<InputForm
							type="text"
							id="name"
							label="article name"
							placeholder="Type Book Name"
						/>

						<MultipleSelect
							items={authors}
							selectedItems={selectedAuthors}
							setSelectedItems={setSelectedAuthors}
							isLoading={isAuthorsLoading}
							showOption={showAuthorsOption}
							setShowOption={setShowAuthorsOption}
							label="Author"
						/>

						{/* <MultipleSelect
							items={authors}
							selectedItems={false}
							setSelectedItems={false}
							isLoading={false}
							showOption={false}
							setShowOption={false}
							label="Category"
						/> */}

						<InputForm
							type="text"
							id="duration"
							label="Duration"
							placeholder="Type Duration"
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

				{/* Rich Text Section */}
				<div className="mt-6 w-full">
					<Editor
						onInit={(evt, editor) => (editorRef.current = editor)}
						initialValue="<p>This is the initial content of the editor.</p>"
						init={{
							height: 500,
							menubar: false,
							plugins: [
								"advlist autolink lists link image charmap print preview anchor",
								"searchreplace visualblocks code fullscreen",
								"insertdatetime media table paste code help wordcount",
							],
							toolbar:
								"undo redo | formatselect | " +
								"bold italic backcolor | alignleft aligncenter " +
								"alignright alignjustify | bullist numlist outdent indent | " +
								"removeformat | help",
							content_style:
								"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
					/>
				</div>

				<button className="w-1/4 btn-2 py-2 mx-auto mt-10"
				type="submit"
				>Create</button>
			</form>
		</div>
	);
};

export default CreateArticles;
