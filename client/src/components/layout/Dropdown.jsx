import React, { useState, useRef, useSelector, useDispatch } from "react";
import userIcon from "../../icon/userIcon.svg";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { key: "Login", value: "/auth/login" },
    { key: "Register", value: "/user/register" },
    { key: "Edit Profile", value: "/user/edit-profile" },
    { key: "Edit Password", value: "/user/edit-password" },
    { key: "Logout", value: "" }
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
        <img
          ref={imgRef}
          onClick={() => setOpen(!open)}
          src={userIcon}
          className="p-2
      object-cover cursor-pointer hover:ring-mainBlue rounded-xl"
        />
        {open && (
          <div
            ref={menuRef}
            className="bg-gray-100 text-mainBlue font-bold p-4 w-52 shadow-lg absolute -left-20 top-10"
          >
            <ul>
              <div>
                {Menus.map((obj) => (
                  <Link to={obj.value}>
                    <li
                      onClick={() => setOpen(false)}
                      className="p-2 text-la cursor-pointer rounded hover:bg-mainBlue hover:text-white"
                    >
                      {obj.key}
                    </li>
                  </Link>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
