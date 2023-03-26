/** @format */

import React, { useEffect, useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import {FaRegTrashAlt} from "react-icons/fa";

const InputForm = ({
  type,
  id,
  placeholder,
  label = false,
  register = "",
  errors = "",
  accept="",
  setIcon,
  icon,
  isEdit,
  articlePage = false
}) => {
	const [image,setImage]= useState("");
  const inputClick = () => {
	document.getElementById(id).click();
  };

  const handleImage=(event)=>{
	if(event.target.files[0]){
		setImage(URL.createObjectURL(event.target.files[0]));
    setIcon(event.target.files[0]);
	}
  };



  useEffect(()=>{
    if(isEdit && typeof(icon) !== "object"){
      setImage(icon);
    }
  },[icon]);

  if (accept !== "") {
    return (
			<>
				{image == "" ? (
					<div
						className={`mt-3 w-full ${
							articlePage ? "h-56" : ""
						} border border-dashed flex justify-center items-center flex-col py-4 gap-2 cursor-pointer`}
						onClick={inputClick}
					>
						<RiImageAddFill size={25} />
						<p className=" text-sm text-dreamLabColor1">Upload an icon image</p>
						<input
							type={type}
							accept={accept}
							id={id}
							className="hidden"
							onChange={handleImage}
						/>
					</div>
				) : (
					<div className="mt-3 w-full relative group">
						<img
							src={image}
							alt="input-img"
							className="w-full h-64 object-contain"
						/>
						<button
							className={` absolute top-2 ${
								articlePage ? "right-2 scale-0" : "right-[-100%]"
							}  group-hover:right-2 group-hover:scale-100 transition-all duration-200 p-2 bg-white overflow-hidden`}
							onClick={() => setImage("")}
						>
							<FaRegTrashAlt className=" text-red-500" />
						</button>
					</div>
				)}
				{errors === "" ? null : errors[id] ? (
					<p className="text-red-400 text-sm normal-case">
						{errors[id].message}
					</p>
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
