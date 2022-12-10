const Course = require("../models/course-model");
const User = require("../models/user-model");
const courseValidation = require("../config/validation").courseValidation;

// @desc    Create new course
// @route   GET api/course/create
// @access  Private/Instructor
exports.createNewCourse = (req, res) => {
  // Desctructure the request body
  let { title, description, price, thumbnail, category } = req.body;

  // Get the user from the request object
  const user = req.user;

  // Validate the course data.
  const { error } = courseValidation({ title, price, category });
  if (error) return res.status(400).json({ msg: error.details[0].message });

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

// @desc    Update course info (title, description, price, thumbnail, category)
// @route   PATCH api/course/:_id/info
// @access  Private/Instructor
exports.updateCourseInfo = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      // Check if the user is the instructor of the course.
      if (course.instructor.toString() !== req.user._id.toString()) {
        return res.status(403).json({
          msg: "Permission denied. You are not the instructor of this course.",
        });
      }

      // Update the course info.
      course.title = req.body.title || course.title;
      course.description = req.body.description || course.description;
      course.price = req.body.price || course.price;
      course.thumbnail = req.body.thumbnail || course.thumbnail;
      course.category = req.body.category || course.category;

      //Validate the course data.
      const { error } = courseValidation({
        title: course.title,
        price: course.price,
        category: course.category,
      });
      if (error) return res.status(400).json({ msg: error.details[0].message });

      // Save the updated course info.
      course
        .save()
        .then((course) => {
          res.status(200).json({
            msg: "Course info updated successfully",
            course_info: {
              title: course.title,
              description: course.description,
              price: course.price,
              thumbnail: course.thumbnail,
              category: course.category,
            },
          });
        })
        .catch((err) => {
          res.status(400).json({
            err_msg: "Course info update failed",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        msg: "Course info update failed",
        error: err,
      });
    });
};

// @desc    Get course info by id
// @route   GET api/course/:_id/_info
// @access  Public
exports.getCourseInfoById = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then(async (course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      // Get instructor name.
      const instructor = await User.findById(course.instructor);

      // Return the course info.
      res.status(200).json({
        msg: "Course found",
        course_info: {
          title: course.title,
          instructor: instructor.username,
          description: course.description,
          price: course.price,
          thumbnail: course.thumbnail,
          category: course.category,
        },
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get course info failed",
        error: err,
      });
    });
};

// @desc    Get course content by id
// @route   GET api/course/:_id/content
// @access  Private/CourseMember
exports.getCourseContentById = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      // Return the course content.
      res.status(200).json({
        msg: "Course found",
        course_content: course,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get course content failed",
        error: err,
      });
    });
};

// @desc    Get courses by title (fuzzy search)
// @route   GET api/course/search/:title
// @access  Public
exports.getCoursesByTitle = async (req, res) => {
  const { title } = req.params;

  const courses = await Course.find({
    title: { $regex: title },
    $orderby: { views_count: -1 },
  });

  console.log(courses);

  if (!courses) {
    return res.status(404).json({
      err_msg: "No course found",
    });
  }

  return res.status(200).json({
    msg: `Found ${courses.length} courses`,
    courses,
  });
};

// @desc    Add course comment
// @route   POST api/course/:_id/comment
// @access  Private/CourseMember
exports.addCourseComment = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      // Desctructure the request body
      let { comment } = req.body;

      if (!comment) {
        return res.status(400).json({
          err_msg: "Cannot add an empty comment",
        });
      }

      // Create a new comment object.
      const newComment = {
        user: req.user._id,
        comment,
        date: new Date(),
      };

      // Add the new comment to the course and save to database.
      course.comments.unshift(newComment);
      course
        .save()
        .then((course) => {
          res.status(200).json({
            msg: "Comment added successfully",
            new_comment: course.comments[0],
          });
        })
        .catch((err) => {
          res.status(400).json({
            err_msg: "Add course comment failed",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Add course comment failed",
        error: err,
      });
    });
};

// @desc    Get course all comments
// @route   Get api/course/:_id/comment
// @access  Private/CourseMember
exports.getCourseAllComments = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      // Return the course comments.
      res.status(200).json({
        msg: `Found ${course.comments.length} comments`,
        comments: course.comments,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get course comments failed",
        error: err,
      });
    });
};

// @desc    Get all courses (descending order by views count)
// @route   Get api/course/all
// @access  Public
exports.getAllCourses = async (req, res) => {
  Course.find({})
    .then((courses) => {
      res.status(200).json({
        msg: `Found ${courses.length} courses`,
        courses,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get all courses failed",
        error: err,
      });
    });
};

// @desc    Get ten most popular courses (descending order by students count)
// @route   Get api/course/popular
// @access  Public
exports.getTenMostPopularCourses = async (req, res) => {
  Course.find({})
    .sort({ students_count: -1 })
    .limit(10)
    .then((courses) => {
      res.status(200).json({
        msg: `Found ${courses.length} courses`,
        courses,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get most popular courses failed",
        error: err,
      });
    });
};

// @desc    Get most ten popular newest
// @route   Get api/course/newest
// @access  Public
exports.getTenNewestCourses = async (req, res) => {
  Course.find({})
    .sort({ created: -1 })
    .limit(10)
    .then((courses) => {
      res.status(200).json({
        msg: `Found ${courses.length} courses`,
        courses,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get newest courses failed",
        error: err,
      });
    });
};

// @desc    Get courses by category (sort by views count)
// @route   Get api/course/category/:category
// @access  Public
exports.getCoursesByCategory = async (req, res) => {
  const { category } = req.params;

  const allCategories = [
    "web-development",
    "programming-language",
    "finance",
    "it-and-software",
    "art-design",
    "music",
    "system-design",
    "music",
    "marketing",
    "others",
  ];

  if (!allCategories.includes(category)) {
    return res.status(400).json({
      err_msg: `Sorry, we don't have ${category} category`,
    });
  }

  Course.find({ category })
    .sort({ views_count: -1 })
    .then((courses) => {
      res.status(200).json({
        msg: `Found ${courses.length} courses`,
        courses,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get courses by category failed",
        error: err,
      });
    });
};

// @desc    Get a  course in random
// @route   Get api/course/random
// @access  Public
exports.getARandomCourse = async (req, res) => {
  Course.aggregate([{ $sample: { size: 1 } }])
    .then((course) => {
      res.status(200).json({
        msg: "Found a course",
        course,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get random course failed",
        error: err,
      });
    });
};

// @desc    Add course video
// @route   POST api/course/:_id/video
// @access  Private/Instructor
const uploadVideo = async (req, res) => {};
