import React,{Component} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import {ReactComponent as Usericon} from '../../icon/user.svg';
import { ReactComponent as Carticon } from '../../icon/cart.svg';
import { ReactComponent as  Courseicon} from '../../icon/book.svg';


const Nav = () => {
  return (
    <nav className="flex  flex-end  justify-around flex-[2_1_400px] w-32 items-center">
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
        <Carticon className=" w-10 p-2"/>
      </Link>
      <Link to="/Course">
        <Courseicon className="w-10 p-2"/>
      </Link>
    </nav>
  );
};

export default Nav;
