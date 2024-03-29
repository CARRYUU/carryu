import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Title from "../layout/Title";
import Button from "../layout/Button";
import Input from "../layout/Input";

import {
  updateUserProfile,
  getUserProfile,
} from "../../features/user/userSlice";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const { user } = useSelector((state) => state.user);

  const { username, email } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    dispatch(updateUserProfile(formData));
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  };

  useEffect(() => {
    dispatch(getUserProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Title pageTitle="Profile & Setting" />
      <div className="flex max-w-md flex-col items-center justfiy-center px-4 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center justfiy-center w-full py-8 px-2 bg-white rounded-lg shadow dark:bg-gray-100">
          <Input
            labelName="Username"
            name="username"
            type="text"
            placeholder={user?.username}
            onChange={handleChange}
            value={username}
          />
          <Input
            labelName="Email"
            name="email"
            type="email"
            placeholder={user?.email}
            onChange={handleChange}
            value={email}
          />
          <Button buttonName="Save all" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
