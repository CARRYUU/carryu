import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SmallLogo } from "../../assets/icons/carryu_small_logo.svg";
import { ReactComponent as BigLogo } from "../../assets/icons/carryu_big_logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <footer class="p-4 bg-white  shadow md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link to="/" class="flex items-center mb-4 sm:mb-0">
            <SmallLogo className="fill-currentColor ml-4 mr-0 h-12 flex flex-none" />
            <BigLogo className="flex ml-1 w-32" />
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
            <li>
              <Link to="/about" class="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="#" class="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center">
          © 2022{" "}
          <Link to="/" class="hover:underline">
            CarryU
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
