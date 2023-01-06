import React from "react";
import { Link } from "react-router-dom";

const Roll = (props) => {
  return (
    <div className="min-w-full h-full">
      <Link to="/confirm-challenge">
        <button
          type="button"
          class="min-w-full h-full shadow-lg shadow-gray text-white font-black bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-400 dark:focus:ring-pink-700 rounded-full text-4xl text-center"
          onClick={props.onClick}
        >
          {props.buttonName}
        </button>
      </Link>
    </div>
  );
};

export default Roll;
