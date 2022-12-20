import React, { Component } from "react";
import Search from "./Search";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ReactComponent as LOGO } from "../../icon/LOGG.svg";
import { ReactComponent as CarryUlogo } from "../../icon/CarryUlogo.svg";

const Header = () => {
  return (
    <div className="sticky top-0 ">
      <header className="flex backdrop-blur shadow-md py-2 w-full  sticky top-0 flex-wrap items-center bg-gradient-to-t">
        <Link to="/Home" className="flex items-center mb-4 sm:mb-0">
          <CarryUlogo className="fill-currentColor ml-4 mr-0 h-12 flex flex-none" />
        </Link>
        <Link to="/Home" className="flex items-center mb-4 sm:mb-0">
          <LOGO className=" flex  ml-1 w-32"/>

        </Link>

        <Search />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
