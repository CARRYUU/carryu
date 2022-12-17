import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService from "./authService";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const user = getUserFromLocalStorage();

const initialState = {
  user,
  token: user?.token,
  isLoggedIn: !!user?.token,
  isLoading: false,
};

export const login = createAsyncThunk(
  "/auth/login",
  async (formData, thunkAPI) => {
    return await authService.login(formData, thunkAPI);
  }
);

export const logout = createAsyncThunk("/auth/logout", async (thunkAPI) => {
  return await authService.logout(thunkAPI);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.pending]: (state) => {
      state.isLoading = true;
    },
    [logout.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
