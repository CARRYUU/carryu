const Course = require("../models/course-model");
const User = require("../models/user-model");
const courseValidation = require("../config/validation").courseValidation;

// @desc    Create new course
// @route   POST api/course/create
// @access  Private/Instructor
exports.createNewCourse = (req, res) => {
  // Desctructure the request body
  let { title, description, price, category } = req.body;
  const thumbnail = req.file ? req.file.filename : null;

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
// @route   POST api/course/:_id/info
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

      const { title, description, price, category } = req.body;
      const thumbnail = req.file ? req.file.filename : null;

      // Update the course info.
      course.title = title || course.title;
      course.description = description || course.description;
      course.price = price || course.price;
      course.thumbnail = thumbnail || course.thumbnail;
      course.category = category || course.category;

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
            err_msg: "Course info update failed in save()",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        msg: "Course info update failed in findById()",
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
          students_count: course.students.length,
          created: course.created,
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

  // fuzzy search by title
  const courses = await Course.find({
    title: { $regex: title, $options: "i" },
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
    title,
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
        created: new Date(),
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
// @route   GET api/course/:_id/comment
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
// @route   GET api/course/popular
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
// @route   GET api/course/newest
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
// @route   GET api/course/category/:category
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

// @desc    Get a course in random
// @route   GET api/course/random
// @access  Public
exports.getARandomCourse = async (req, res) => {
  Course.aggregate([{ $sample: { size: 1 } }])
    .then((course) => {
      res.status(200).json({
        msg: "Found a course",
        course_info: {
          title: course.title,
          instructor: instructor.username,
          description: course.description,
          price: course.price,
          thumbnail: course.thumbnail,
          category: course.category,
          students_count: course.students.length,
        },
      });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Get random course failed",
        error: err,
      });
    });
};

// @desc    Add course teaching assistant
// @route   PUT api/course/:_id/teaching-assistant
// @access  Private/Intructor
exports.addCourseTA = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then(async (course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      // Check if the user is the course instructor
      if (course.instructor.toString() !== req.user._id.toString()) {
        return res.status(401).json({
          err_msg: "You are not the course instructor",
        });
      }

      // Check if the user is exists
      User.findOne({ _id: req.body.ta_id })
        .then((ta) => {
          console.log(ta);
          if (!ta) {
            return res.status(404).json({
              err_msg: "TA id not found",
            });
          }

          // Check if the user is already a TA
          if (course.teaching_assistants.includes(ta._id)) {
            return res.status(400).json({
              err_msg: "The user is already a TA",
            });
          }

          // Add the TA to the course
          course.teaching_assistants.unshift(ta._id);

          // Save the course to the database
          course
            .save()
            .then((course) => {
              res.status(200).json({
                msg: "TA added successfully",
                ta: course.teaching_assistants[0],
                ta_name: ta.username,
              });
            })
            .catch((err) => {
              res.status(400).json({
                err_msg: "Course save failed, which lead to add TA failed",
                error: err,
              });
            });
        })
        .catch((err) => {
          res.status(400).json({
            err_msg: "Find user failed, which lead to add TA failed",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Find course failed, which lead to add TA failed",
        error: err,
      });
    });
};

// @desc    Remove course teaching assistant
// @route   DELETE api/course/:_id/teaching-assistant
// @access  Private/Intructor
exports.removeCourseTA = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then((course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      // Check if the user is the course instructor
      if (course.instructor.toString() !== req.user._id.toString()) {
        return res.status(401).json({
          err_msg: "Cannot remove TA. You are not the course instructor",
        });
      }

      // Check if the user is already a TA
      if (!course.teaching_assistants.includes(req.body.ta_id)) {
        return res.status(400).json({
          err_msg: "Cannot remove TA. The user is not a TA",
        });
      }

      // Remove the TA from the course
      const index = course.teaching_assistants.indexOf(req.body.ta_id);
      const removedTA = course.teaching_assistants[index];
      course.teaching_assistants.splice(index, 1);

      // Save the course to the database
      course
        .save()
        .then((course) => {
          res.status(200).json({
            msg: "TA removed successfully",
            removedTA_username: removedTA.username,
          });
        })
        .catch((err) => {
          res.status(400).json({
            err_msg: "Remove TA failed",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        err_msg: "Remove TA failed",
        error: err,
      });
    });
};

// @desc    Get course teaching assistants
// @route   GET api/course/:_id/teaching-assistant
// @access  Public
exports.getCourseTAs = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id)
    .then(async (course) => {
      if (!course) {
        return res.status(404).json({
          msg: "Course not found",
        });
      }

      // Return if there is no TA
      if (course.teaching_assistants.length === 0) {
        return res.status(200).json({
          msg: "No TA found",
        });
      }

      // Return the TA's username after get all the TAs' username
      let TAs = [];
      for (let i = 0; i < course.teaching_assistants.length; i++) {
        const ta = await User.findById(course.teaching_assistants[i])
          .then((ta) => {
            return ta;
          })
          .catch((err) => {
            console.log(err);
            return res.status(400).json({
              err_msg: "Get TA failed",
              error: err,
            });
          });
        TAs.push(ta.username);
      }

      return TAs;
    })
    .then((TAs) => {
      res.status(200).send({
        msg: `Found ${TAs.length} TAs`,
        TAs: TAs,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        err_msg: "Get TAs failed",
        error: err,
      });
    });
};

// @desc    Add student to course
// @route   POST api/course/:_id/student
// @access  Private
exports.addStudentToCourse = async (req, res) => {
  const { _id } = req.params;
  const { user_id } = req.body;

  Course.findById(_id).then(async (course) => {
    if (!course) {
      return res.status(404).json({
        msg: "Course not found",
      });
    }

    // Check if the user is exist in the database
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({
        err_msg: "Add student failed. The user is not exist",
      });
    }

    // Check if the user is already enrolled
    if (course.students.includes(user_id)) {
      return res.status(400).json({
        err_msg: "This student already enrolled in this course",
      });
    }

    // Add the student to the course
    course.students.unshift(user_id);
    course.students_count = course.students.length;

    // Save the course to the database
    course
      .save()
      .then((course) => {
        res.status(200).json({
          msg: "Student added successfully",
          student: course.students[0],
          students_count: course.students_count,
        });
      })
      .catch((err) => {
        res.status(400).json({
          err_msg: "Course save failed, which lead to add student failed",
          error: err,
        });
      });
  });
};

// @desc    Remove student from course
// @route   DELETE api/course/:_id/student
// @access  Private
exports.removeStudentFromCourse = async (req, res) => {
  const { _id } = req.params;
  const { user_id } = req.body;

  Course.findById(_id).then(async (course) => {
    if (!course) {
      return res.status(404).json({
        msg: "Course not found",
      });
    }

    // Check if the user is exist in the database
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({
        err_msg: "Remove student failed. The user is not exist",
      });
    }
    // Check if the user is enrolled
    if (!course.students.includes(user_id)) {
      return res.status(400).json({
        err_msg:
          "Cannot remove this student from the course. This student is not enrolled in this course",
      });
    }

    // Remove the student from the course
    const index = course.students.indexOf(user_id);
    course.students.splice(index, 1);

    // Save the course to the database
    course
      .save()
      .then((course) => {
        res.status(200).json({
          msg: "Student removed successfully",
        });
      })
      .catch((err) => {
        res.status(400).json({
          err_msg:
            "Course save failed, which lead to remove student from course failed",
          error: err,
        });
      });
  });
};

// @desc    Get course students
// @route   GET api/course/:_id/student
// @access  Public
exports.getCourseStudents = async (req, res) => {
  const { _id } = req.params;

  Course.findById(_id).then((course) => {
    if (!course) {
      return res.status(404).json({
        msg: "Course not found",
      });
    }

    // Return if there is no student
    if (course.students.length === 0) {
      return res.status(200).json({
        msg: "No student found",
      });
    }

    // Get all the students' username
    let students = [];
    course.students.forEach((student_id) => {
      User.findById(student_id)
        .then(async (user) => {
          students.push(user.username);

          return students;
        })
        .then((students) => {
          console.log("students: ", students);
          // Return the students' username
          res.status(200).json({
            msg: `Found ${students.length} students`,
            students: students,
          });
        })
        .catch((err) => {
          res.status(400).json({
            err_msg: "Get students failed",
            error: err,
          });
        });
    });
  });
};

// @desc    Add course video
// @route   POST api/course/:_id/video
// @access  Private/Instructor
const uploadVideo = async (req, res) => {};
