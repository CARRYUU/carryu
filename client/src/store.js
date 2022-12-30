import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";
import allCoursesReducer from "./features/allCourses/allCoursesSlice";
import courseReducer from "./features/course/courseSlice";
import cartReducer from "./features/cart/cartSlice";
import transactionReducer from "./features/transaction/transactionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    courses: allCoursesReducer,
    course: courseReducer,
    cart: cartReducer,
    transaction: transactionReducer,
  },
});
