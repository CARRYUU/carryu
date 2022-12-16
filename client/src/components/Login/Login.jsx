import React from "react";
import Input from "../layout/Input";
import Checkbox from "./Checkbox";
import Title from "../layout/Title";
import Button from "../layout/Button";

const Login = () => {
  return (
    <div>
      <Title pageTitle="Login" />
      <div className="p-6 space-y-6">
        <div className="flex-col">
          <Input labelName="Email" type="email" />
          <Input labelName="Password" type="password" />
        </div>
      </div>
      <div>
        <Checkbox labelName="Remember me" />
      </div>

      <div className="mb-8">
        <Button buttonName="Login" />
      </div>
    </div>
  );
};

export default Login;
