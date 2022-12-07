const Course = require("../models/course-model");

// @desc    Get all courses
// @route   GET api/course/create
// @access  Private
const addNewCourse = (req, res) => {
  const { name, description, price, image, category, author } = req.body;
  const course = new Course({
    name,
    description,
    price,
    image,
    category,
    author,
  });
  course
    .save()
    .then((result) => {
      res.status(200).json({
        msg: "Course added successfully",
        savedObject: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        msg: "Course add failed",
        error: err,
      });
    });
};

// @desc    Delete course
// @route   GET api/course/delete
// @access  Private
const deleteCourseByInstructor = (req, res) => {};

module.exports = {
  addNewCourse,
};
