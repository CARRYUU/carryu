import React from "react";

const footer = () => {
  return (
    <div className="footer">
      <footer class="p-4 bg-white  shadow md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/logo" class="flex items-center mb-4 sm:mb-0">
            <img
              src={require("../../icon/logo.png")}
              className="mr-0 h-12 flex flex-none"
              alt="CarryU Logo"
            />
            <img
              src={require("../../icon/name.png")}
              className="text-mainBlue flex flex-none ml-1 w-32"
            ></img>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center">
          © 2022{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            CarryU
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default footer;
