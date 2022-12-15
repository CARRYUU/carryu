const User = require("../models/user-model");
const Course = require("../models/course-model");

// @desc    Add purchase record to user's purchase history
// @route   POST api/transaction/purchase/
// @access  Private
exports.addPurchaseRecord = async (req, res) => {
  const { user_id, course_id, payment_type } = req.body;

  User.findById(user_id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          err_msg: "User not found",
        });
      }

      // Get the course name and price then save to purchase record.
      Course.findById(course_id)
        .then((course) => {
          if (!course) {
            return res.status(404).json({
              err_msg: "Course not found",
            });
          }

          // Check whether the course is already in user's purchase history and the type is refund.
          const isCourseInRefundHistory = user.purchase_history.some(
            (record) => record.course_id.toString() === course_id && record.type === "refund"
          );

          if (isCourseInRefundHistory) {
            return res.status(400).json({
              err_msg: "Sorry, you cannot buy this course because you have refunded it before.",
            });
          }

          // Check whether the course is already in user's purchase history and the type is buy.
          const isCourseInPurchaseHistory = user.purchase_history.some(
            (record) => record.course_id.toString() === course_id && record.type === "buy"
          );

          if (isCourseInPurchaseHistory) {
            return res.status(400).json({
              err_msg: "Course already in user's purchase history",
            });
          }

          // Add purchase record to user's purchase history.
          const purchase_record = {
            type: "buy",
            course_id,
            course_name: course.name,
            price: course.price,
            payment_type: payment_type,
            date: new Date(),
          };

          user.purchase_history.push(purchase_record);
          user
            .save()
            .then((user) => {
              return res.status(200).json({
                msg: "Purchase record added to user's purchase history",
                user_purchase_history: user.purchase_history,
              });
            })
            .catch((err) => {
              return res.status(500).json({
                err_msg: "Cannot add purchase record to user's purchase history. Save user failed.",
                error: err,
              });
            });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({
            err_msg:
              "Cannot add purchase record to user's purchase history. Find course by id failed.",
            error: err,
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        err_msg: "Cannot add purchase record to user's purchase history. Find user by id failed.",
        error: err,
      });
    });
};

// @desc    Add refund record to user's purchase history
// @route   DELETE api/transaction/refund/
// @access  Private
exports.addRefundRecord = async (req, res) => {
  const { user_id, course_id } = req.body;

  User.findById(user_id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          err_msg: "User not found",
        });
      }

      // Get the course name and price then save to refund record.
      Course.findById(course_id)
        .then((course) => {
          if (!course) {
            return res.status(404).json({
              err_msg: "Course not found",
            });
          }

          const refund_record = {
            type: "refund",
            course_id,
            course_name: course.name,
            price: course.price,
            payment_type: "POINTS",
            date: new Date(),
          };

          user.purchase_history.push(refund_record);
          user
            .save()
            .then((user) => {
              return res.status(200).json({
                msg: "Refund record added to user's purchase history",
                user,
              });
            })
            .catch((err) => {
              return res.status(500).json({
                err_msg: "Cannot add refund record to user's purchase history. Save user failed.",
                error: err,
              });
            });
        })
        .catch((err) => {
          console.log(err);

          return res.status(500).json({
            err_msg:
              "Cannot add refund record to user's purchase history. Find course by id failed.",
            error: err,
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        err_msg: "Cannot add refund record to user's purchase history. Find user by id failed.",
        error: err,
      });
    });
};
