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
        // history.push("/");

        window.location.href = "/auth/login";

        return response.data;
      });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "registerUserError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const userServices = {
  registerUser,
};

export default userServices;
