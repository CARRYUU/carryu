import React from "react";

const Roll = (props) => {
  return (
    <div className="shadow-black">
      <button
        type="button"
        class="shadow-lg shadow-gray text-white font-black bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-400 dark:focus:ring-pink-700 rounded-full text-4xl w-96 h-60 text-center mr-2 mb-2"
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Roll;
