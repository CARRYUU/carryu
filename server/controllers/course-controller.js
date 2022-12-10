const Course = require("../models/course-model");
const courseValidation = require("../config/validation").courseValidation;

// @desc    Create new course
// @route   GET api/course/create
// @access  Private
exports.createNewCourse = (req, res) => {
  // Desctructure the request body
  let { title, description, price, thumbnail, category } = req.body;

  // Get the user from the request object
  const user = req.user;

  // Validate the course data.
  const { error } = courseValidation({ title, price, category });
  if (error) return res.status(400).json({ err_msg: error.details[0].message });

  // Create new course object and save it into database.
  const course = new Course({
    title,
    description,
    price,
    thumbnail,
    category,
    instructor: user._id,
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

// @desc    Get course info by id
// @route   GET api/course/:_id/_info
// @access  public
exports.getCourseInfoById = async (req, res) => {
  const { _id } = req.params;

  const course = await Course.findById(_id);

  if (!course) {
    return res.status(404).json({
      msg: "Course not found",
    });
  }

  const {
    title,
    instructor,
    description,
    price,
    thumbnail,
    category,
    views_count,
    students_count,
    created,
  } = course;

  return res.status(200).json({
    msg: "Course found",
    course_info: {
      title,
      instructor,
      description,
      price,
      thumbnail,
      category,
      views_count,
      students_count,
      created,
    },
  });
};

// @desc    Get course content by id
// @route   GET api/course/:_id/content
// @access  private
exports.getCourseContentById = async (req, res) => {
  const { _id } = req.params;

  const course = await Course.findById(_id);

  if (!course) {
    return res.status(404).json({
      msg: "Course not found",
    });
  }

  return res.status(200).json({
    msg: "Course found",
    course,
  });
};

// @desc    Get courses by title (fuzzy search)
// @route   GET api/course/search/:title
// @access  public
exports.getCoursesByTitle = async (req, res) => {
  const { title } = req.params;

  const courses = await Course.find({
    title: { $regex: title },
    $orderby: { views_count: -1 },
  });

  console.log(courses);

  if (!courses) {
    return res.status(404).json({
      msg: "No course found",
    });
  }

  return res.status(200).json({
    msg: `Found ${courses.length} courses`,
    courses,
  });
};

// @desc    Delete course
// @route   GET api/course/delete
// @access  Private
exports.deleteCourseByInstructor = (req, res) => {};
