import React from "react";
import Search from "./Search";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 ">
      <header className="flex backdrop-blur shadow-md py-2 w-full  sticky top-0 flex-wrap items-center bg-gradient-to-t">
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src={require("../../icon/logo.png")}
            className="ml-4 mr-0 h-12 flex flex-none"
            alt="CarryU Logo"
          />
          <img
            src={require("../../icon/name.png")}
            className="text-mainBlue flex flex-none ml-1 w-32"
          ></img>
        </Link>
        <Search />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
