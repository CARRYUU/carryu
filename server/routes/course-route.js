const express = require("express");
const router = express.Router();

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
} = require("../controllers/course-controller");

router.route("/create").post(isAuthenticatedUser, isInstructor, createNewCourse);

router.route("/:_id/info").get(getCourseInfoById).patch(isAuthenticatedUser, updateCourseInfo);

router.route("/search/:title").get(getCoursesByTitle);

router.route("/:_id/content").get(isAuthenticatedUser, isCourseMember, getCourseContentById);

router
  .route("/:_id/comment")
  .get(isAuthenticatedUser, isCourseMember, getCourseAllComments)
  .post(isAuthenticatedUser, isCourseMember, addCourseComment);

router.route("/all").get(getAllCourses);
router.route("/popular").get(getTenMostPopularCourses);
router.route("/newest").get(getTenNewestCourses);
router.route("/category/:category").get(getCoursesByCategory);
router.route("/random").get(getARandomCourse);

router
  .route("/_id/teaching-assistants")
  .get(isAuthenticatedUser, getCourseTAs)
  .post(isAuthenticatedUser, addCourseTA)
  .delete(isAuthenticatedUser, removeCourseTA);

module.exports = router;
