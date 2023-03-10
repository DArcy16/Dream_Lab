/** @format */

import React from "react";

const InputForm = ({
	type,
	id,
	placeholder,
	label = false,
	register = "",
	errors = "",
}) => {
	return (
		<div className="mt-3 w-full">
			{label ? (
				<label htmlFor={id} className="font-semibold capitalize">
					{label}
				</label>
			) : null}
			{register === "" ? (
				<input
					type={type}
					id={id}
					name={id}
					className="w-full bg-white py-2 px-4 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2"
					placeholder={placeholder}
				></input>
			) : (
				<input
					type={type}
					id={id}
					name={id}
					className="w-full bg-white py-2 px-4 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2"
					placeholder={placeholder}
					{...register(id)}
				></input>
			)}
			{errors === "" ? null : errors[id] ? (
				<p className="text-red-400 text-sm normal-case">{errors[id].message}</p>
			) : null}
		</div>
	);
};

export default InputForm;
