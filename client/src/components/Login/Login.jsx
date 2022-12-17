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
    password: "",
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
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    dispatch(login(formData));
  };

  return (
    <div>
      <Title pageTitle="Login" />
      <div className="p-6 space-y-6">
        <div className="flex-col">
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
        </div>
      </div>
      <div>
        <Checkbox labelName="Remember me" />
      </div>

      <div className="mb-8">
        <Button buttonName="Login" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
