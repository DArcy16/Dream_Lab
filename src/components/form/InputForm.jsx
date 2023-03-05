import React from 'react'

const InputForm = ({id, placeholder, label}) => {
  return (
    <div className='mt-3'>
      <label htmlFor="name" className="font-semibold capitalize">
        {label}:
      </label>
      <input
        type="text"
        id={id}
        name={id}
        className="w-full bg-white py-2 px-4 rounded-md outline outline-1 outline-grey/30 focus:outline-2 mt-2"
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default InputForm