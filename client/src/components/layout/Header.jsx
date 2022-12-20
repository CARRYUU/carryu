import React from "react";
import Search from "./Search";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ReactComponent as SmallLogo } from "../../icon/carryu_small_logo.svg";
import { ReactComponent as BigLogo } from "../../icon/carryu_big_logo.svg";

const Header = () => {
  return (
    <div className="sticky top-0 z-20">
      <header className="flex backdrop-blur shadow-md py-2 w-full  sticky top-0 flex-wrap items-center bg-gradient-to-t">
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
          <SmallLogo className="fill-currentColor ml-4 mr-0 h-12 flex flex-none" />
          <BigLogo className="flex ml-1 w-32" />
        </Link>
        <Search />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
