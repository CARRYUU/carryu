import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import cartService from "./cartService";

export const addCourseToCart = createAsyncThunk(
  "/cart",
  async (courseId, thunkAPI) => {
    return await cartService.addCourseToCart(courseId, thunkAPI);
  }
);

export const removeCourseFromCart = createAsyncThunk(
  "/cart",
  async (courseId, thunkAPI) => {
    return await cartService.removeCourseFromCart(courseId, thunkAPI);
  }
);

export const getCartItems = createAsyncThunk("/cart", async (thunkAPI) => {
  return await cartService.getCartItems(thunkAPI);
});

const initialState = {
  cartItems: [],
  status: "idle",
  error: null,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [addCourseToCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    [addCourseToCart.pending]: (state) => {
      state.isLoading = true;
    },
    [addCourseToCart.rejected]: (state) => {
      state.isLoading = false;
      state.cartItems = null;
    },
    [removeCourseFromCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload.courses;
      state.isLoading = false;
    },
    [removeCourseFromCart.pending]: (state) => {
      state.isLoading = true;
    },
    [removeCourseFromCart.rejected]: (state) => {
      state.isLoading = false;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload.courses;
      state.isLoading = false;
    },
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
      state.cartItems = null;
    },
  },
});

export default cartSlice.reducer;
