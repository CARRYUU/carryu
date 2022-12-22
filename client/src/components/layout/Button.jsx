import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-900 hover:bg-blue-700 focus:ring-blue-700 focus:outline-none focus:ring-4 font-bold rounded-full text-xl w-40 h-16 text-center mx-2 mb-2"
        onClick={props.onClick}
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Button;
