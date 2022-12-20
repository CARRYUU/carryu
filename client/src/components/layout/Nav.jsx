import React from "react";
import { Link } from "react-router-dom";
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
        <img src={require("../../icon/iconCart.png")} className="p-2"></img>
      </Link>
      <Link to="/language">
        <img
          src={require("../../icon/iconGlobe.png")}
          className="p-2 mr-4"
        ></img>
      </Link>
    </nav>
  );
};

export default Nav;
