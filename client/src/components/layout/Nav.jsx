import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { BsBook } from "react-icons/bs";

import Dropdown from "./Dropdown";

import { switchUserRole } from "../../features/user/userSlice";

const Nav = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const Menus = [
    { key: "Sign in", value: "/auth/login" },
    { key: "Switch", value: "/intructor/homepage" },
    { key: "Sign up", value: "/user/register" },
  ];

  return (
    <nav className="flex flex-end justify-around flex-[2_1_400px] w-full items-center">
      <div className="">
        <ul className="text-mainBlue font-semibold flex flex-end flex-auto w-60 px-6 justify-around text-center">
          <li className="px-0.1 w-14">
            <Link to="/about">About</Link>
          </li>
          <li className="px-0.1 w-14">
            <Link to="/challenge">Challenge</Link>
          </li>
        </ul>
      </div>

      {/* switch role button must be spexial */}
      <div className="space-x-2">
        {Menus.map((obj) => {
          if (user && obj.key === "Logout") {
            // Logout button
            return (
              <button
                type="button"
                onClick={handleLogout}
                className="text-white font-bold bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center mb-0"
                key={obj.key}
              >
                {obj.key}
              </button>
            );
          } else if (user && obj.key === "Switch") {
            // Switch role button
            return (
              <Link to={obj.value}>
                <button
                  type="button"
                  onClick={() => dispatch(switchUserRole())}
                  className="text-white font-bold bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center mb-0"
                  key={obj.key}
                >
                  {obj.key}
                </button>
              </Link>
            );
          } else if (user && obj.key !== "Sign in" && obj.key !== "Sign up") {
            return (
              <Link to={obj.value}>
                <button
                  className="text-white font-bold bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center  mb-0"
                  key={obj.key}
                >
                  {obj.key}
                </button>
              </Link>
            );
          } else if (
            !user &&
            obj.key !== "Switch" &&
            obj.key !== "Logout" &&
            obj.key !== "Profile & Settings" &&
            obj.key !== "Edit Password"
          ) {
            return (
              <Link to={obj.value}>
                <button
                  className="text-white font-bold bg-gradient-to-br from-orange-500 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm px-5 py-2.5 text-center  mb-0"
                  key={obj.key}
                >
                  {obj.key}
                </button>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>

      {user && (
        <div className="flex items-center justify-center space-x-2">
          <Dropdown className="mx-4" />
          <Link to="/cart">
            <div className="flex justify-center items-center p-2 ">
              <FaShoppingCart size={36} />
            </div>
          </Link>
          <Link to="/mycourse">
            <div className="flex justify-center items-center p-2">
              <BsBook size={36} />
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Nav;
