import React from "react";

const Input = (props) => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <label
          className="block mb-2 text-lg font-bold text-gray-900 "
          name={props.name}
        >
          {props.labelName}
        </label>
        {props.type === "number" ? (
          <input
            type={props.type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-700 w-5/6 p-2.5 "
            placeholder={props.placeholder}
            name={props.name}
            id={props.id}
            onChange={props.onChange}
            value={props.value}
            min={props.min}
            max={props.max}
            step={props.step}
          ></input>
        ) : (
          <input
            type={props.type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-700 w-5/6 p-2.5 "
            placeholder={props.placeholder}
            name={props.name}
            id={props.id}
            onChange={props.onChange}
            value={props.value}
          ></input>
        )}
      </div>
    </div>
  );
};

export default Input;
