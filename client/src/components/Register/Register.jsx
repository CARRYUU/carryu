import React from "react";
import Input from "../layout/Input";
import Title from "../layout/Title";
import Button from "../layout/Button";

const Register = () => {
  return (
    <div>
      <Title pageTitle="Register" />
      <div className="p-6 space-y-6">
        <div className="flex-col">
          <Input labelName="Username" type="text" placeholder="carrie" />
          <Input
            labelName="Email"
            type="email"
            placeholder="carrie777@gmail.com"
          />
          <Input labelName="Password" type="password" />
        </div>
      </div>
      <div className="mb-8">
        <Button buttonName="Register" />
      </div>
    </div>
  );
};

export default Register;
