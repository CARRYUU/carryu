import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="flex flex-end justify-around flex-[2_1_400px] w-32 items-center px-4">
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
        <AiOutlineShoppingCart className="p-2 " size={40}/>
      </Link>
      <Link to="/mycourse-page">
        <BsBook size={40} className="p-2"/>
      </Link>
    </nav>
  );
};

export default Nav;
