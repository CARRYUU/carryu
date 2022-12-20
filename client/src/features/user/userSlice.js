import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
// import { getUserFromLocalStorage } from "../../utils/localStorage";

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

export const getUserProfile = createAsyncThunk(
  "/user/profile",
  async (thunkAPI) => {
    return await userService.getUserProfile(thunkAPI);
  }
);

export const getUserPurchaseHistory = createAsyncThunk(
  "/user/purchase-history",
  async (thunkAPI) => {
    return await userService.getUserPurchaseHistory(thunkAPI);
  }
);

export const updateUserProfile = createAsyncThunk(
  "/user/edit-profile",
  async (formData, thunkAPI) => {
    return await userService.updateUserProfile(formData, thunkAPI);
  }
);

export const updateUserPassword = createAsyncThunk(
  "/user/password/update",
  async (formData, thunkAPI) => {
    return await userService.updateUserPassword(formData, thunkAPI);
  }
);

export const switchUserRole = createAsyncThunk(
  "/user/switch-role",
  async (thunkAPI) => {
    return await userService.switchUserRole(thunkAPI);
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
    [getUserProfile.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [getUserProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserProfile.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
    },
    [getUserPurchaseHistory.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [getUserPurchaseHistory.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserPurchaseHistory.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
    },
    [updateUserProfile.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [updateUserProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUserProfile.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
    },
    [updateUserPassword.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [updateUserPassword.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUserPassword.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
    },
    [switchUserRole.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [switchUserRole.pending]: (state) => {
      state.isLoading = true;
    },
    [switchUserRole.rejected]: (state) => {
      state.isLoading = false;
      state.user = null;
    },
  },
});

export default userSlice.reducer;
