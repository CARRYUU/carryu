import { toast } from "react-toastify";
import * as api from "../api";

import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const login = async (formData, thunkAPI) => {
  try {
    // Login the user...
    const response = await api.login(formData);

    if (!response.data) {
      console.log("No data returned from login API call.");
      return;
    }

    // Add the user to local storage...
    addUserToLocalStorage(response.data);

    const resolveAfterHalfSec = new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    toast
      .promise(
        resolveAfterHalfSec,
        {
          pending: "Logging in...",
          success: "Login succesfully!",
          error: "Login failed!",
        },
        {
          toastId: "loginSuccess",
          autoClose: 1000,
        }
      )
      .then(() => {
        window.location.href = "/";

        return response.data;
      });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "loginError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const logout = async (thunkAPI) => {
  console.log("hi");
  try {
    // Clear the user from local storage...
    removeUserFromLocalStorage();

    console.log("Logout succesfully!");

    const resolveAfterHalfSec = new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    toast
      .promise(
        resolveAfterHalfSec,
        {
          pending: "Logging out...",
          success: "Logout succesfully!",
          error: "Logoutfailed!",
        },
        {
          toastId: "LogoutSuccess",
          autoClose: 1000,
        }
      )
      .then(() => {
        // history.push("/");

        window.location.href = "/";

        return;
      });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "loginError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const authServices = {
  login,
  logout,
};

export default authServices;
