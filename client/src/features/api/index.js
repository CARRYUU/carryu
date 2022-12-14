import axios from "axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 2000,
});

API.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();

    if (user) {
      config.headers.authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Path: baseURL/auth/
export const login = (data) => API.post("auth/login", data);
export const logout = () => API.get("/auth/logout");

// Path: baseURL/user/
export const registerUser = (data) => API.post("/user/register", data);
export const getUserProfile = () => API.get("/user/profile");
export const updateUserProfile = (data) => API.patch("/user/profile", data);
export const getUserPurchaseHistory = () => API.get("/user/purchase-history");
export const updateUserPassword = (data) =>
  API.patch("/user/password/update", data);
export const switchUserRole = () => API.patch("/user/switch-role");

// Path: baseURL/course/
export const createNewCourse = (data) => API.post("/course/create", data);
export const getCoursesByTitle = (title) => API.get(`/course/search/${title}`);
export const updateCourseInfo = (id, data) =>
  API.patch(`/course/${id}/info`, data);
export const getCourseInfoById = (id) => API.get(`/course/${id}/info`);
export const getCourseContentById = (id) => API.get(`/course/${id}/content`);
export const getAllCourses = () => API.get("/course");
export const getCourseByCategory = (category) =>
  API.get(`/course/category/${category}`);
export const getTenMostPopularCourses = () =>
  API.get("/course/popular", {
    timeout: 20000,
  });
export const getTenMostNewestCourses = () =>
  API.get("/course/newest", {
    timeout: 20000,
  });
export const getARandomCourse = () => API.get("/course/random");
export const addCourseComment = (id, comment) =>
  API.post(`/course/${id}/comment`, comment);
export const getCourseAllComments = (id) => API.get(`/course/${id}/comment`);
export const addCourseTA = (id, data) =>
  API.post(`/course/${id}/teaching-assistant`, data);
export const removeCourseTA = (id, data) =>
  API.delete(`/course/${id}/teaching-assistant`, {
    data,
  });
export const getCourseTAs = (id) => API.get(`/course/${id}/teaching-assistant`);
export const addStudentToCourse = (data) => API.post(`/course/student`, data);
export const removeStudentFromCourse = (data) =>
  API.delete(`/course/student`, {
    data,
  });
export const getCourseStudents = (id) => API.get(`/course/${id}/student`);

// Path: baseURL/cart/
export const addCourseToCart = (data) => API.post(`/cart`, data);
export const removeCourseFromCart = (data) =>
  API.delete(`/cart`, {
    data,
  });
export const getCartItems = () => API.get("/cart");

// Path: baseURL/transaction/
export const addPurchaseRecord = (data) =>
  API.put("/transaction/purchase", data);
export const addRefundRecord = (data) => API.put("/transaction/refund", data);

// Path: baseURL/points/
export const addPoints = (data) => API.put("/points/add", data);
export const deletePoints = (data) => API.put("/points/delete", data);
export const getPoints = () => API.get("/points/get");

// Path: baseURL/payment/
export const processPayment = (data) => API.post("/payment", data);

// Path: baseURL/challenge
export const addChallengeRecord = (data) => API.put("/challenge/add", data);
export const getChallengeHistory = () => API.get(`/challenge`);
export const setChallengeToSuccess = (data) =>
  API.patch(`/challenge/set-to-success`, data);
export const setChallengeToFailed = (data) =>
  API.patch(`/challenge/set-to-failed`, data);
