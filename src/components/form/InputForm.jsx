import React from 'react'

const InputForm = ({type, id, placeholder, label = false}) => {
  return (
    <div className="mt-3 w-full">
      {label ? <label htmlFor="name" className="font-semibold capitalize">
        {label}
      </label> : null}
      <input
        type={type}
        id={id}
        name={id}
        className="w-full bg-white py-2 px-4 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2"
        placeholder={placeholder}
        required
      ></input>
    </div>
  );
}

export default InputForm