import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "../layout/Title";
import Button from "../layout/Button";
import Input from "../layout/Input";

import { updateUserPassword } from "../../features/user/userSlice";

const EditPassword = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: ""
  });

  const { user } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserPassword(formData));
  };

  return (
    <div>
      <Title pageTitle="Password Setting" />
      <div className="flex flex-col items-center justfiy-center px-4 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center justfiy-center w-1/3 py-8 px-2 bg-white rounded-lg shadow dark:bg-gray-100">
          <Input
            labelName="Old password"
            type="password"
            onChange={handleChange}
            value={formData.old_password}
            name="old_password"
            placeholder="Enter your current password ..."
          />
          <Input
            labelName="New password"
            type="password"
            onChange={handleChange}
            value={formData.new_password}
            name="new_password"
            placeholder="Enter your new password ..."
          />
          <Input
            labelName="Confirm New password"
            type="password"
            onChange={handleChange}
            value={formData.confirm_password}
            name="confirm_password"
            placeholder="Enter your confimation password ..."
          />
          <Button buttonName="Save all" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
