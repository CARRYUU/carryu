import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoEarthSharp } from "react-icons/io5";
import Dropdown from "./Dropdown";

const Nav = () => {
  return (
    <nav className="flex flex-end justify-around flex-[2_1_400px] w-32 items-center">
      <ul className="text-mainBlue font-semibold flex flex-end flex-auto w-40 justify-around text-center">
        <li className="px-0.1 w-30 ">
          <Link to="/about">關於我們|About us</Link>
        </li>
        <li className="px-0.1 w-30 ">
          <Link to="/challenge">我要挑戰|Chellnge</Link>
        </li>
      </ul>

      <Dropdown />

      <Link to="/cart">
        <AiOutlineShoppingCart size={42} className="p-2" />
      </Link>
      <Link to="/language">
        <IoEarthSharp size={42} className="p-2" />
      </Link>
    </nav>
  );
};

export default Nav;
