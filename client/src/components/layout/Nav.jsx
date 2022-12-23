import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";

import Dropdown from "./Dropdown";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="flex flex-end justify-around flex-[2_1_400px] w-32 items-center px-4 mr-8">
      <ul className="text-mainBlue font-semibold flex flex-end flex-auto w-80 justify-around text-center">
        <li className="px-0.1 w-48 ">
          <Link to="/about">關於我們|About us</Link>
        </li>
        <li className="px-0.1 w-48 ">
          <Link to="/challenge">我要挑戰|Chellnge</Link>
        </li>
      </ul>

      {/* switch role button must be spexial */}
      <Link to="/course/create">
        <button
          type="button"
          className="text-white font-bold bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-0"
          onClick=""
        >
          Switch
        </button>
      </Link>

      <Dropdown />

      <Link to="/cart">
        <FaShoppingCart size={42} className="p-2" />
      </Link>
      <Link to="/language">
        <IoEarthSharp size={42} className="p-2" />
      </Link>
    </nav>
  );
};
export default Nav;
