const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const Course = require("../models/course-model");

// Check if the user is authenticated.
const isAuthenticatedUser = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded._id).select("-password");
      if (!req.user) {
        return res.status(401).json({ err_msg: "User not found." });
      }

      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        err_msg: "Not authorized, token failed.",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      err_msg: "Not authorized, no token available. Please login first.",
    });
  }
};

// Check if the user is an admin.
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      err_msg: "Not authorized as an admin.",
    });
  }
};

// Check if the user is an instructor.
const isInstructor = (req, res, next) => {
  if (req.user && req.user.isInstructor()) {
    next();
  } else {
    return res.status(401).json({
      err_msg: "Only instructor can post a new course.",
    });
  }
};

// Check if the user is a course member, including the instructor or on of students of the course.
const isCourseMember = async (req, res, next) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      if (
        course.instructor.toString() === req.user._id.toString() ||
        course.students.includes(req.user._id)
      ) {
        next();
      } else {
        return res.status(401).json({
          err_msg: "Only course member can access this course.",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get course failed",
        error: err,
      });
    });
};

module.exports = { isAuthenticatedUser, isAdmin, isInstructor, isCourseMember };
