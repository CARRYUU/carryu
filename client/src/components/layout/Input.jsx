import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="mb-8">
        <label className="block mb-2 text-lg font-bold text-gray-900 ">
          {props.labelName}
        </label>
        <input
          type={props.type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-700 w-7/12 p-2.5 "
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>
  );
};

export default Input;
