const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const {
  isAuthenticatedUser,
  isAdmin,
  isInstructor,
  isCourseMember,
} = require("../middlerware/auth-middleware");

const {
  createNewCourse,
  getCourseInfoById,
  updateCourseInfo,
  getCourseContentById,
  getCoursesByTitle,
  addCourseComment,
  getCourseAllComments,
  getAllCourses,
  getTenMostPopularCourses,
  getTenNewestCourses,
  getCoursesByCategory,
  getARandomCourse,
  addCourseTA,
  removeCourseTA,
  getCourseTAs,
  addStudentToCourse,
  removeStudentFromCourse,
  getCourseStudents,
} = require("../controllers/course-controller");

// create a new course
router
  .route("/create")
  .post(isAuthenticatedUser, isInstructor, createNewCourse);

// course info
router
  .route("/:_id/info")
  .get(getCourseInfoById)
  .post(upload.single("thumbnail"), isAuthenticatedUser, updateCourseInfo);

// search course by title
router.route("/search/:title").get(getCoursesByTitle);

// course content
router
  .route("/:_id/content")
  .get(isAuthenticatedUser, isCourseMember, getCourseContentById);

// course comment
router
  .route("/:_id/comment")
  .get(isAuthenticatedUser, isCourseMember, getCourseAllComments)
  .post(isAuthenticatedUser, isCourseMember, addCourseComment);

// list courses by different criteria
router.route("/all").get(getAllCourses);
router.route("/popular").get(getTenMostPopularCourses);
router.route("/newest").get(getTenNewestCourses);
router.route("/category/:category").get(getCoursesByCategory);
router.route("/random").get(getARandomCourse);

// course teaching assistants
router
  .route("/:_id/teaching-assistant")
  .get(getCourseTAs)
  .put(isAuthenticatedUser, addCourseTA)
  .delete(isAuthenticatedUser, removeCourseTA);

// course students
router
  .route("/:_id/student")
  .get(getCourseStudents)
  .post(isAuthenticatedUser, addStudentToCourse)
  .delete(isAuthenticatedUser, removeStudentFromCourse);

module.exports = router;
