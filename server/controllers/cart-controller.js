const User = require("../models/user-model");
const Course = require("../models/course-model");

// @desc    Add course to cart
// @route   POST api/cart/
// @access  Private
exports.addCourseToCart = async (req, res) => {
  console.log("Adding course to cart...");

  // Get course id from request body
  const { course_id } = req.body;

  // Check if course exists
  Course.findById(course_id)
    .then((course) => {
      if (!course) {
        return res.status(400).json({
          success: false,
          message: "Course does not exist",
        });
      }

      // Check if course is already in cart
      User.findById(req.user._id)
        .then((user) => {
          if (!user) {
            return res.status(400).json({
              success: false,
              message: "User does not exist",
            });
          }

          // Check if course is already in cart
          if (user.shopping_cart.includes(course_id)) {
            return res.status(400).json({
              success: false,
              message: "Course already in cart",
            });
          }

          // Check if course is already purchased
          if (
            user.purchase_history.some(
              (record) => record.course_id.toString() === course_id
            )
          ) {
            return res.status(400).json({
              success: false,
              message: "Course already purchased",
            });
          }

          // Add course to cart
          user.shopping_cart.push(course_id);
          user.save((err, user) => {
            if (err) {
              return res.status(400).json({
                success: false,
                message: "Failed to add course to cart",
              });
            }

            return res.status(200).json({
              success: true,
              message: "Course added to cart",
            });
          });
        })
        .catch((err) => {
          return res.status(400).json({
            success: false,
            message: "Save course to cart failed",
            err,
          });
        });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Add course to cart failed",
        err,
      });
    });
};

// @desc    Remove course from cart
// @route   DELETE api/cart/
// @access  Private
exports.removeCourseFromCart = async (req, res) => {
  console.log("Removing course from cart...");

  // Get course id from request body
  const { course_id } = req.body;

  // Check if course exists
  Course.findById(course_id)
    .then((course) => {
      if (!course) {
        return res.status(400).json({
          success: false,
          message: "Course does not exist",
        });
      }

      // Check if course is in cart
      User.findById(req.user._id)
        .then((user) => {
          if (!user) {
            return res.status(400).json({
              success: false,
              message: "User does not exist",
            });
          }

          // Check if course is in cart
          if (!user.shopping_cart.includes(course_id)) {
            return res.status(400).json({
              success: false,
              message: "Course not in cart",
            });
          }

          // Remove course from cart
          user.shopping_cart.pull(course_id);
          user.save((err, user) => {
            if (err) {
              return res.status(400).json({
                success: false,
                message: "Failed to remove course from cart",
              });
            }

            return res.status(200).json({
              success: true,
              message: "Course removed from cart",
            });
          });
        })
        .catch((err) => {
          return res.status(400).json({
            success: false,
            message: "Remove course from cart failed",
          });
        });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Remove course from cart failed",
        err,
      });
    });
};

// @desc    Get cart items
// @route   GET api/cart/
// @access  Private
exports.getCartItems = async (req, res) => {
  console.log("Getting cart items...");

  // Check if user exists
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User does not exist",
        });
      }

      // Get cart items
      Course.find({
        _id: {
          $in: user.shopping_cart,
        },
      })
        .select("-thumbnail")
        .exec((err, courses) => {
          if (err) {
            return res.status(400).json({
              success: false,
              message: "Failed to get cart items",
            });
          }

          courses = courses.map((course) => {
            return {
              _id: course._id,
              title: course.title,
              description: course.description,
              price: course.price,
              instructor: course.instructor,
              category: course.category,
              students_count: course.students_count,
              created: course.created,
            };
          });

          return res.status(200).json({
            success: true,
            message: `${courses.length} courses in cart returned.`,
            courses,
          });
        });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Get cart items failed",
        err,
      });
    });
};
