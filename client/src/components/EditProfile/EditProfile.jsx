import React from "react";
import Title from "../layout/Title";
import Button from "../layout/Button";
import Input from "../layout/Input";

const EditProfile = () => {
  return (
    <div>
      <Title pageTitle="Profile & Setting" />
      <div className="p-6 space-y-6">
        <div className="flex-col">
          <Input labelName="User name" type="text" placeholder="carrie" />
          <Input
            labelName="Email"
            type="email"
            placeholder="carrie777@gmail.com"
          />
        </div>
      </div>
      <div className="mb-8">
        <Button buttonName="Save all" />
      </div>
    </div>
  );
};

export default EditProfile;
