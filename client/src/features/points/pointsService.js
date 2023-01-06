import * as api from "../api";
import { toast } from "react-toastify";

const addPoints = async (data, thunkAPI) => {
  try {
    const response = await api.addPoints(data);

    if (!response.data) {
      console.log("No data returned from addPoints API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addPointsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const deletePoints = async (data, thunkAPI) => {
  try {
    const response = await api.deletePoints(data);

    if (!response.data) {
      console.log("No data returned from deletePoints API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "deletePointsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getPoints = async (thunkAPI) => {
  try {
    const response = await api.getPoints();

    if (!response.data) {
      console.log("No data returned from getPoints API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getPointsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const pointService = {
  addPoints,
  deletePoints,
  getPoints,
};

export default pointService;
