import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import allCoursesService from "./allCoursesService";

export const getCoursesByTitle = createAsyncThunk(
  "/course/search/:title",
  async (title, thunkAPI) => {
    return await allCoursesService.getCoursesByTitle(title, thunkAPI);
  }
);

export const getCourseInfoById = createAsyncThunk(
  "/course/:id/info",
  async (id, thunkAPI) => {
    return await allCoursesService.getCourseInfoById(id, thunkAPI);
  }
);

export const getTenMostPopularCourses = createAsyncThunk(
  "/course/popular",
  async (thunkAPI) => {
    return await allCoursesService.getTenMostPopularCourses(thunkAPI);
  }
);

export const getTenMostNewestCourses = createAsyncThunk(
  "/course/newest",
  async (thunkAPI) => {
    return await allCoursesService.getTenMostNewestCourses(thunkAPI);
  }
);

export const getAllCourses = createAsyncThunk(
  "/course/all",
  async (thunkAPI) => {
    return await allCoursesService.getAllCourses(thunkAPI);
  }
);

const initialState = {
  coursesByTitle: [],
  tenMostPopularCourses: [],
  tenMostNewestCourses: [],
  isLoading: false,
};

export const allCoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: {
    [getCoursesByTitle.fulfilled]: (state, action) => {
      state.coursesByTitle = action.payload;
      state.isLoading = false;
    },
    [getCoursesByTitle.pending]: (state) => {
      state.isLoading = true;
    },
    [getCoursesByTitle.rejected]: (state) => {
      state.isLoading = false;
      state.coursesByTitle = null;
    },
    [getCourseInfoById.fulfilled]: (state, action) => {
      state.courses = action.payload;
      state.isLoading = false;
    },
    [getCourseInfoById.pending]: (state) => {
      state.isLoading = true;
    },

    [getCourseInfoById.rejected]: (state) => {
      state.isLoading = false;
      state.courses = null;
    },
    [getTenMostPopularCourses.fulfilled]: (state, action) => {
      state.tenMostPopularCourses = action.payload;
      state.isLoading = false;
    },
    [getTenMostPopularCourses.pending]: (state) => {
      state.isLoading = true;
    },
    [getTenMostPopularCourses.rejected]: (state) => {
      state.isLoading = false;
      state.tenMostPopularCourses = null;
    },
    [getTenMostNewestCourses.fulfilled]: (state, action) => {
      state.tenMostNewestCourses = action.payload;
      state.isLoading = false;
    },

    [getTenMostNewestCourses.pending]: (state) => {
      state.isLoading = true;
    },
    [getTenMostNewestCourses.rejected]: (state) => {
      state.isLoading = false;
      state.tenMostNewestCourses = null;
    },
    [getAllCourses.fulfilled]: (state, action) => {
      state.courses = action.payload;
      state.isLoading = false;
    },

    [getAllCourses.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCourses.rejected]: (state) => {
      state.isLoading = false;
      state.courses = null;
    },
  },
});

export const { setSearchedText } = allCoursesSlice.actions;

export default allCoursesSlice.reducer;
