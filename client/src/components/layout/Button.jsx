import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-900 hover:bg-blue-700 focus:ring-blue-700 focus:outline-none focus:ring-4 font-bold rounded-full text-l min-w-40 max-w-fit h-12 text-center mx-2 my-2"
        onClick={props.onClick}
      >
        <div className="px-4">{props.buttonName}</div>
      </button>
    </div>
  );
};

export default Button;
