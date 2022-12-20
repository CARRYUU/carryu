import React, { useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../features/auth/authSlice";

const Dropdown = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const [open, setOpen] = useState(false);
  const Menus = [
    { key: "Login", value: "/auth/login" },
    { key: "Logout", value: "/auth/logout" },
    { key: "Profile", value: "/user/profile" },
    { key: "Register", value: "/user/register" },
    { key: "Edit Profile", value: "/user/profile/update" },
    { key: "Edit Password", value: "/user/password/update" },
  ];

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  return (
    <div>
      <div className="relative">
        <button
          ref={imgRef}
          onClick={() => setOpen(!open)}
          className="p-2
            object-cover cursor-pointer hover:ring-mainBlue rounded-xl"
        >
          <FaUserCircle size={27} className="pointer-events-none" />
        </button>

        {open && (
          <div
            ref={menuRef}
            className="bg-gray-100 text-mainBlue font-bold p-4 w-52 shadow-lg absolute -left-20 top-10"
          >
            <ul>
              <div>
                {Menus.map((obj) => {
                  if (user && obj.key === "Logout") {
                    return (
                      <li
                        onClick={handleLogout}
                        className="p-2 text-la cursor-pointer rounded hover:bg-mainBlue hover:text-white"
                        key={obj.key}
                      >
                        {obj.key}
                      </li>
                    );
                  } else if (
                    user &&
                    obj.key !== "Login" &&
                    obj.key !== "Register"
                  ) {
                    return (
                      <Link to={obj.value}>
                        <li
                          onClick={() => setOpen(false)}
                          className="p-2 text-la cursor-pointer rounded hover:bg-mainBlue hover:text-white"
                          key={obj.key}
                        >
                          {obj.key}
                        </li>
                      </Link>
                    );
                  } else if (
                    !user &&
                    obj.key !== "Logout" &&
                    obj.key !== "Profile" &&
                    obj.key !== "Edit Profile" &&
                    obj.key !== "Edit Password"
                  ) {
                    return (
                      <Link to={obj.value}>
                        <li
                          onClick={() => setOpen(false)}
                          className="p-2 text-la cursor-pointer rounded hover:bg-mainBlue hover:text-white"
                          key={obj.key}
                        >
                          {obj.key}
                        </li>
                      </Link>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
