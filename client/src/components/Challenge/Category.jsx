import React from "react";

const Roll = (props) => {
  return (
    <div className="shadow-black">
      <button
        type="button"
        class="shadow-lg shadow-gray text-white font-black bg-gradient-to-r from-purple-700 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-full text-4xl w-96 h-60 text-center mr-2 mb-2"
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Roll;
