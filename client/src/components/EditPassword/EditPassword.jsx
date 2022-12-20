import React from "react";
import Title from "../layout/Title";
import Button from "../layout/Button";
import Input from "../layout/Input";

const EditPassword = () => {
  return (
    <div>
      <Title pageTitle="Password Setting" />
      <div className="p-6 space-y-6">
        <div className="flex-col">
          <Input labelName="Old password" type="password" />
          <Input labelName="New password" type="password" />
          <Input labelName="Confirm New password" type="password" />
        </div>
      </div>
      <div className="mb-8">
        <Button buttonName="Save all" />
      </div>
    </div>
  );
};

export default EditPassword;
