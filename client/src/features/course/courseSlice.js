import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import courseService from "./courseService";

export const createNewCourse = createAsyncThunk(
  "/course/create",
  async (courseData, thunkAPI) => {
    return await courseService.createNewCourse(courseData, thunkAPI);
  }
);
export const getCourseInfoById = createAsyncThunk(
  "/course/:id/info",
  async (id, thunkAPI) => {
    return await courseService.getCourseInfoById(id, thunkAPI);
  }
);

export const updateCourseInfo = createAsyncThunk(
  "/course/:id/update",
  async (course, thunkAPI) => {
    return await courseService.updateCourseInfo(course, thunkAPI);
  }
);

export const getCourseContentById = createAsyncThunk(
  "/course/:id/content",
  async (id, thunkAPI) => {
    return await courseService.getCourseContentById(id, thunkAPI);
  }
);

export const getARandomCourse = createAsyncThunk(
  "/course/random",
  async (thunkAPI) => {
    return await courseService.getARandomCourse(thunkAPI);
  }
);

export const addCourseComment = createAsyncThunk(
  "/course/:id/comment",
  async (commentData, thunkAPI) => {
    return await courseService.addCourseComment(commentData, thunkAPI);
  }
);

export const getCourseAllComments = createAsyncThunk(
  "/course/:id/comments",
  async (id, thunkAPI) => {
    return await courseService.getCourseAllComments(id, thunkAPI);
  }
);

export const addCourseTA = createAsyncThunk(
  "/course/:id/teaching-assistants",
  async (taData, thunkAPI) => {
    return await courseService.addCourseTA(taData, thunkAPI);
  }
);

export const removeCourseTA = createAsyncThunk(
  "/course/:id/teaching-assistants",
  async (taData, thunkAPI) => {
    return await courseService.removeCourseTA(taData, thunkAPI);
  }
);

export const getCourseTAs = createAsyncThunk(
  "/course/:id/teaching-assistants",
  async (id, thunkAPI) => {
    return await courseService.getCourseTAs(id, thunkAPI);
  }
);

export const addStudentToCourse = createAsyncThunk(
  "/course/:id/students",
  async (studentData, thunkAPI) => {
    return await courseService.addStudentToCourse(studentData, thunkAPI);
  }
);

export const removeStudentFromCourse = createAsyncThunk(
  "/course/:id/students",
  async (studentData, thunkAPI) => {
    return await courseService.removeStudentFromCourse(studentData, thunkAPI);
  }
);

export const getCourseStudents = createAsyncThunk(
  "/course/:id/students",
  async (id, thunkAPI) => {
    return await courseService.getCourseStudents(id, thunkAPI);
  }
);

const initialState = {
  courseInfo: {
    // title: "",
    // instructor: "",
    // description: "",
    // price: 0,
    // thumbnail: "",
  },
  courseContent: {
    // id: "",
    // instructor: "",
    // title: "",
    // description: "",
    // thumbnail: "",
    // price: 0,
    // category: "",
    // views_count: 0,
    // students_count: 0,
    // comments: [],
  },
  isLoading: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default courseSlice.reducer;
