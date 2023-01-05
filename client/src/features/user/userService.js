import { toast } from "react-toastify";
import * as api from "../api";

const registerUser = async (formData, thunkAPI) => {
  try {
    const response = await api.registerUser(formData);

    if (!response.data) {
      console.log("No data returned from registerUser API call.");

      return;
    }

    const resolveAfterHalfSec = new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    toast
      .promise(
        resolveAfterHalfSec,
        {
          pending: "Registering user...",
          success: "User registered succesfully!",
          error: "User registration failed!",
        },
        {
          toastId: "registerUserSuccess",
          autoClose: 1000,
        }
      )
      .then(() => {
        return response.data;
      });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.response.data.message ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "registerUserError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getUserProfile = async (thunkAPI) => {
  try {
    const response = await api.getUserProfile();

    if (!response.data) {
      console.log("No data returned from getUserProfile API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.response.data.message ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getUserProfileError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getUserPurchaseHistory = async (thunkAPI) => {
  try {
    console.log("Getting user purchase history...");

    const response = await api.getUserPurchaseHistory();

    if (!response.data) {
      console.log("No data returned from getUserPurchaseHistory API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.response.data.message ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getUserPurchaseHistoryError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const updateUserProfile = async (formData, thunkAPI) => {
  try {
    const response = await api.updateUserProfile(formData);

    if (!response.data) {
      console.log("No data returned from updateUserProfile API call.");

      return;
    }

    const resolveAfterHalfSec = new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    toast
      .promise(
        resolveAfterHalfSec,
        {
          pending: "Updating user profile...",
          success: "User profile updated succesfully!",
          error: "User profile update failed!",
        },
        {
          toastId: "updateUserProfileSuccess",
          autoClose: 1000,
        }
      )
      .then(() => {
        // history.push("/");
        window.location.href = "/";
        return response.data;
      });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.response.data.message ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "updateUserProfileError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const updateUserPassword = async (formData, thunkAPI) => {
  try {
    console.log("Updating user password...");

    const response = await api.updateUserPassword(formData);

    if (!response.data) {
      console.log("No data returned from updateUserPassword API call.");

      return;
    }

    const resolveAfterHalfSec = new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    toast
      .promise(
        resolveAfterHalfSec,
        {
          pending: "Updating user password...",
          success: "User password updated succesfully!",
          error: "User password update failed!",
        },
        {
          toastId: "updateUserPasswordSuccess",
          autoClose: 1000,
        }
      )
      .then(() => {
        // history.push("/");
        window.location.href = "/auth/login";
        return response.data;
      });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.response.data.message ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "updateUserPasswordError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const switchUserRole = async (thunkAPI) => {
  try {
    const response = await api.switchUserRole();

    if (!response.data) {
      console.log("No data returned from switchUserRole API call.");

      return;
    }

    const resolveAfterHalfSec = new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    toast
      .promise(
        resolveAfterHalfSec,
        {
          pending: "Switching user role...",
          success: "User role switched succesfully!",
          error: "User role switch failed!",
        },
        {
          toastId: "switchUserRoleSuccess",
          autoClose: 1000,
        }
      )
      .then(() => {
        // history.push("/");
        window.location.href = "/";
        return response.data;
      });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.response.data.message ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "switchUserRoleError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const userServices = {
  registerUser,
  getUserProfile,
  getUserPurchaseHistory,
  updateUserProfile,
  updateUserPassword,
  switchUserRole,
};

export default userServices;
