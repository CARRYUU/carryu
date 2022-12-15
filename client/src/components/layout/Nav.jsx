import React from "react";

const Nav = () => {
  return (
    <nav className="flex  flex-end  justify-around flex-[2_1_400px] w-32 items-center">
      <ul className="text-mainBlue font-semibold flex flex-end flex-auto w-40 justify-around text-center">
        <li className="px-0.1 w-30 ">
          <a href="/about">關於我們|About us</a>
        </li>
        <li className="px-0.1 w-30 ">
          <a href="/challenge">我要挑戰|Chellnge</a>
        </li>
      </ul>

      <a href="/member">
        <img src={require("../../icon/iconMember.png")} className="p-2"></img>
      </a>
      <a href="/cart">
        <img src={require("../../icon/iconCart.png")} className="p-2"></img>
      </a>
      <a href="/language">
        <img
          src={require("../../icon/iconGlobe.png")}
          className="p-2 mr-4"
        ></img>
      </a>
    </nav>
  );
};

export default Nav;
