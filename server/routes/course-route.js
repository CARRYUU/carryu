const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, isAdmin, isInstructor } = require("../middlerware/auth-middleware");
const {
  createNewCourse,
  getCourseInfoById,
  getCourseContentById,
  getCoursesByTitle,
} = require("../controllers/course-controller");

router.post("/create", isAuthenticatedUser, isInstructor, createNewCourse);
router.get("/:_id/info", getCourseInfoById);
router.get("/search/:title", getCoursesByTitle);

module.exports = router;
