import React from "react";

const Roll = (props) => {
  return (
    <div className="h-full w-full">
      <button
        type="button"
        className="min-w-full h-full shadow-lg shadow-gray text-white font-black bg-gradient-to-r from-purple-700 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-full text-4xl text-center"
        onClick={props.onClick}
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Roll;
