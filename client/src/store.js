import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";
import allCoursesReducer from "./features/allCourses/allCoursesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    courses: allCoursesReducer,
  },
});
