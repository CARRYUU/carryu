import { toast } from "react-toastify";
import * as api from "../api";

const getCourseByTitle = async (title, thunkAPI) => {
  try {
    const response = await api.getCourseByTitle(title);

    if (!response.data) {
      console.log("No data returned from getCoursesByTitle API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCoursesByTitleError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getCourseInfoById = async (id, thunkAPI) => {
  try {
    const response = await api.getCourseInfoById(id);

    if (!response.data) {
      console.log("No data returned from getCourseInfoById API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCourseInfoByIdError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getTenMostPopularCourses = async (thunkAPI) => {
  try {
    const response = await api.getTenMostPopularCourses();

    console.log("Get ten most popular courses response:", response.data);
    if (!response.data) {
      console.log("No data returned from getTenMostPopularCourses API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getTenMostPopularCoursesError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getTenMostNewestCourses = async (thunkAPI) => {
  try {
    const response = await api.getTenMostNewestCourses();

    if (!response.data) {
      console.log("No data returned from getTenMostNewestCourses API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getTenMostNewestCoursesError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getAllCourses = async (thunkAPI) => {
  try {
    const response = await api.getAllCourses();

    if (!response.data) {
      console.log("No data returned from getAllCourses API call.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getAllCoursesError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const courseServices = {
  getCourseByTitle,
  getCourseInfoById,
  getTenMostPopularCourses,
  getTenMostNewestCourses,
  getAllCourses,
};

export default courseServices;