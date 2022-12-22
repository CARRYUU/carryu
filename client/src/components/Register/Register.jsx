import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/user/userSlice";

import Input from "../layout/Input";
import Title from "../layout/Title";
import Button from "../layout/Button";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    console.log("Registering user...");

    const formData = {
      username,
      email,
      password,
    };

    console.log(formData);

    dispatch(registerUser(formData));
  };

  return (
    <div>
      <Title pageTitle="Register" />

      <div className="p-6 space-y-6">
        <div className="flex flex-col items-center">
          <Input
            labelName="Username"
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={username}
            palceholder="Enter your username..."
          />
          <Input
            labelName="Email"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={email}
            palceholder="Enter your email..."
          />
          <Input
            labelName="Password"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
            palceholder="Enter your password..."
          />

          <Button buttonName="Register" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default Register;
