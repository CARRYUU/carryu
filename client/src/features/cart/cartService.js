import * as api from "../api";
import { toast } from "react-toastify";

const addCourseToCart = async (courseId, thunkAPI) => {
  try {
    console.log("Course to add to cart:", courseId);

    const response = await api.addCourseToCart(courseId);

    console.log(response);

    if (!response.data) {
      console.log("No data returned from addCourseToCart API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    toast.success("Course added to cart successfully.");

    return response.data;
  } catch (error) {
    console.log(error);

    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.response.data.message ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "addCourseToCartError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const removeCourseFromCart = async (courseId, thunkAPI) => {
  try {
    console.log("Course removed from cart: ", courseId);

    const response = await api.removeCourseFromCart(courseId);

    if (!response.data) {
      console.log("No data returned from removeCourseFromCart API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    toast.success("Course removed from cart successfully.");

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.response.data.message ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "removeCourseFromCartError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};

const getCartItems = async (thunkAPI) => {
  try {
    const response = await api.getCartItems();

    if (!response.data) {
      console.log("No data returned from getCartItems API call.");

      toast.error("Something went wrong. Please try again later.");

      return;
    }

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.err_msg) ||
      error.message ||
      error.toString();

    toast.error(message, {
      toastId: "getCartItemsError",
      theme: "colored",
    });

    return thunkAPI.rejectWithValue(message);
  }
};
const cartService = { addCourseToCart, removeCourseFromCart, getCartItems };

export default cartService;
