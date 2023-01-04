import React from "react";
import { Link } from "react-router-dom";

import Errorimg from "../../assets/icons/404.svg";

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black align-middle flex justify-center items-center h-screen flex-col w-screen p-16">
      <img src={Errorimg} className="m-4 flex max-w-fit h-2/3" alt="404" />
      <Link to="/">
        <button
          type="button"
          className="text-white bg-blue-900 hover:bg-blue-700 focus:ring-blue-700 focus:outline-none focus:ring-4 font-bold rounded-full text-l max-w-fit h-16  sm:h-24  text-center mt-6 my-2"
        >
          <div className=" px-8 text-xl sm:text-2xl md:text-5xl">
            Back To Home
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
