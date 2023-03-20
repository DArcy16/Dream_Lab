/** @format */

import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import { RxCross2 } from "react-icons/rx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputForm from "../../../components/form/InputForm";
import { useCreateAuthor } from "../../../hooks/useAuthor";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";

const AuthorSchema = yup.object({
  name: yup.string().required(),
});

const CreateAuthor = ({
	setCreateStatus,
	refreshData,
	navLink,
}) => {
  const [status, setStatus] = useState(false);
	const createAuthorMutation = useCreateAuthor();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(AuthorSchema),
	});

	const onSubmit = (data) => {
    let statusCode;
    if(status) {
      statusCode = "a"
    } else {
      statusCode = "p"
    }

		createAuthorMutation.mutate({body : {...data, status : statusCode}, url : navLink});
	};

	useEffect(() => {
		if (createAuthorMutation.isSuccess) {
			reset({ code: "", name: "" });
			refreshData();
			setCreateStatus(false);
		}
	}, [createAuthorMutation.isSuccess]);

	return (
		<div className="absolute z-50 top-0 right-0 flex justify-end items-center w-screen h-full bg-grey/30 ">
			<div className="fixed top-0 w-1/4 h-screen bg-white p-8  shadow-md">
				<div className="flex justify-between items-center mb-4 ">
					<h2 className="sub-heading text-slate-900 font-bold">
						Create Author
					</h2>
					<button
						className=" flex gap-2 items-center justify-center px-4 py-2"
						onClick={() => !setCreateStatus()}
					>
						{" "}
						<RxCross2 className="mx-auto" />
					</button>
				</div>
				<form className="" onSubmit={handleSubmit(onSubmit)}>
					<InputForm
						id="name"
						type="text"
						placeholder="Type Author Name"
						label="plan name"
						register={register}
						errors={errors}
					/>
					<div className="mt-3 flex items-center gap-6">
						<label className="font-semibold capitalize">Active Status</label>
						<ReactSwitch onChange={() => setStatus(!status)} checked={status} />
					</div>
					{createAuthorMutation.isError && (
						<p className="text-red-600">{createAuthorMutation.error.message}</p>
					)}

					<button className="btn-2 w-full py-2 px-3 mt-4" type="submit">
						{createAuthorMutation.isLoading && (
							<ClipLoader color="white" size={20} />
						)}
						Create
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateAuthor;
