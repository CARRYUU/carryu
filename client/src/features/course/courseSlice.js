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
  "/course/students",
  async (data, thunkAPI) => {
    return await courseService.addStudentToCourse(data, thunkAPI);
  }
);

export const removeStudentFromCourse = createAsyncThunk(
  "/course/students",
  async (data, thunkAPI) => {
    return await courseService.removeStudentFromCourse(data, thunkAPI);
  }
);

export const getCourseStudents = createAsyncThunk(
  "/course/:id/students",
  async (id, thunkAPI) => {
    return await courseService.getCourseStudents(id, thunkAPI);
  }
);

const initialState = {
  courseInfo: {},
  aRandomCourse: null,
  courseContent: null,
  isLoading: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: {
    [createNewCourse.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createNewCourse.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createNewCourse.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getCourseInfoById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCourseInfoById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.courseInfo = action.payload.course_info;
    },
    [getCourseInfoById.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [updateCourseInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateCourseInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updateCourseInfo.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getCourseContentById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCourseContentById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.courseContent = action.payload;
    },
    [getCourseContentById.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getARandomCourse.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getARandomCourse.fulfilled]: (state, action) => {
      state.aRandomCourse = action.payload;
      state.isLoading = false;
    },
    [getARandomCourse.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [addCourseComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addCourseComment.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addCourseComment.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getCourseAllComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCourseAllComments.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [getCourseAllComments.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [addCourseTA.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addCourseTA.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addCourseTA.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [removeCourseTA.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeCourseTA.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [removeCourseTA.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getCourseTAs.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCourseTAs.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [getCourseTAs.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [addStudentToCourse.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addStudentToCourse.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addStudentToCourse.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [removeStudentFromCourse.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeStudentFromCourse.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [removeStudentFromCourse.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getCourseStudents.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCourseStudents.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [getCourseStudents.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default courseSlice.reducer;
