import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  user: null,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "/user/register",
  async (formData, thunkAPI) => {
    return await userService.registerUser(formData, thunkAPI);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
    },
  },
});

export default userSlice.reducer;
