import React from 'react'

const TextareaForm = ({id, label, placeholder}) => {
  return (
    <div className="mt-3 w-full">
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full bg-white py-2 px-4 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2 capitalize"
        rows="6"
      ></textarea>
    </div>
  );
}

export default TextareaForm