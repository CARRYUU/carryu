import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Title from "../layout/Title";
import Button from "../layout/Button";
import Input from "../layout/Input";

import { updateUserProfile } from "../../features/user/userSlice";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

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
        <div className="flex-col">
          <Input
            labelName="Username"
            name="username"
            type="text"
            placeholder="Enter your new username..."
            onChange={handleChange}
            value={username}
          />
          <Input
            labelName="Email"
            name="email"
            type="email"
            placeholder="Enter your new email..."
            onChange={handleChange}
            value={email}
          />
        </div>
      </div>
      <div className="mb-8">
        <Button buttonName="Save all" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default EditProfile;
