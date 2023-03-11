/** @format */

import React from "react";

const TextareaForm = ({
	id,
	label,
	placeholder,
	register = "",
	errors = "",
}) => {
	return (
		<div className="mt-3 w-full">
			<label htmlFor={id} className="font-semibold capitalize">
				{label}
			</label>

			{register === "" ? (
				<textarea
					id={id}
					name={id}
					placeholder={placeholder}
					className="w-full bg-white py-2 px-4 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2 capitalize"
					rows="6"
				></textarea>
			) : (
				<textarea
					id={id}
					name={id}
					placeholder={placeholder}
					className="w-full bg-white py-2 px-4 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2 capitalize"
					rows="6"
					{...register(id)}
				></textarea>
			)}
			{errors === "" ? null : errors[id] ? (
				<p className="text-red-400 text-sm normal-case">{errors[id].message}</p>
			) : null}
		</div>
	);
};

export default TextareaForm;
