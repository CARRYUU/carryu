import React from "react";
import { Link } from "react-router-dom";

const Roll = (props) => {
  return (
    <div className="shadow-black">

      <Link to="/confirm-challenge">
        <button
          type="button"
          class="shadow-lg shadow-gray text-white font-black bg-gradient-to-r from-orange-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-400 dark:focus:ring-pink-700 rounded-full text-4xl w-96 h-60 text-center mr-2 mb-2"
          onClick={props.onClick}
        >
          {props.buttonName}
        </button>
      </Link>
    </div>
  );
};

export default Roll;
