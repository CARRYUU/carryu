import React, { useState } from "react";
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

  const { user } = useSelector((state) => state.auth.user);

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
  };

  return (
    <div>
      <Title pageTitle="Profile & Setting" />
      <div className="p-6 space-y-6">
        <div className="flex flex-col items-center">
          <Input
            labelName="Username"
            name="username"
            type="text"
            placeholder={user.username}
            onChange={handleChange}
            value={username}
          />
          <Input
            labelName="Email"
            name="email"
            type="email"
            placeholder={user.email}
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
