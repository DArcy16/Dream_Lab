/** @format */

import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";

const InputForm = ({
  type,
  id,
  placeholder,
  label = false,
  register = "",
  errors = "",
  accept="",
}) => {
	const [image,setImage]= useState("");
  const inputClick = () => {
	document.getElementById(id).click();
  };

  const handleImage=(event)=>{
	if(event.target.files[0]){
		setImage(URL.createObjectURL(event.target.files[0]));
	}
  };

  if (accept !== "") {
    return (
      <>
        {
			image=="" ? (
				<div
          className="mt-3 w-full border border-dashed flex justify-center items-center flex-col py-4 gap-2 cursor-pointer"
          onClick={inputClick}
        >
          <RiImageAddFill size={25} />
          <p className=" text-sm text-dreamLabColor1">Upload an icon image</p>
          <input
            type={type}
            accept={accept}
            id={id}
            className=" hidden"
            {...register(id)}
			      onChange={handleImage}
          />
        </div>
			) : (
				<div className="mt-3 w-full">
					<img src={image} alt="input-img" className="w-full"/>
				</div>
			)
		}
		{errors === "" ? null : errors[id] ? (
        <p className="text-red-400 text-sm normal-case">{errors[id].message}</p>
      ) : null}
      </>
    );
  }

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
