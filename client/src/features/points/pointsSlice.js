import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pointsService from "./pointsService";

export const getPoints = createAsyncThunk("/points", async (thunkAPI) => {
  return await pointsService.getPoints(thunkAPI);
});

export const addPoints = createAsyncThunk(
  "/points/add",
  async (point, thunkAPI) => {
    return await pointsService.addPoints(point, thunkAPI);
  }
);

export const deletePoints = createAsyncThunk(
  "/points/delete",
  async (point, thunkAPI) => {
    return await pointsService.deletePoints(point, thunkAPI);
  }
);

const initialState = {
  points: 0,
  status: "idle",
  error: null,
  isLoading: false,
};

export const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {},
  extraReducers: {
    [getPoints.fulfilled]: (state, action) => {
      state.points = action.payload.points;
      state.isLoading = false;
    },

    [getPoints.pending]: (state) => {
      state.isLoading = true;
    },
    [getPoints.rejected]: (state) => {
      state.isLoading = false;
    },
    [addPoints.fulfilled]: (state, action) => {
      state.points = action.payload;
      state.isLoading = false;
    },
    [addPoints.pending]: (state) => {
      state.isLoading = true;
    },
    [addPoints.rejected]: (state) => {
      state.isLoading = false;
    },
    [deletePoints.fulfilled]: (state, action) => {
      state.points = action.payload;
      state.isLoading = false;
    },
    [deletePoints.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePoints.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default pointSlice.reducer;
