import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";
import "react-toastify/dist/ReactToastify.css";

import Input from "../layout/Input";
import Checkbox from "./Checkbox";
import Title from "../layout/Title";
import Button from "../layout/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      console.log("Already logged in.");
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    dispatch(login(formData));
  };

  return (
    <div>
      <div className="h-4/6">
        <Title pageTitle="Login" />
        <div className="flex max-w-md flex-col items-center justfiy-center px-4 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex flex-col items-center justfiy-center w-full py-8 px-2 bg-white rounded-lg shadow dark:bg-gray-100">
            <Input
              labelName="Email"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Enter your email..."
            />
            <Input
              labelName="Password"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={password}
              placeholder="Enter your password..."
            />

            <Checkbox labelName="Remember me" />
            <Button buttonName="Login" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
