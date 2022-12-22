const User = require("../models/user-model.js");
const Course = require("../models/course-model.js");

//@desc Buy course
//@route GET api/payment
//@access Private
const processPayment = async (req, res) => {
  const { payment_method } = req.body;
  User.findById(req.user._id).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
  });

  if (payment_method === "atm") {
    return res.status(200).json({
      msg: "You choosed ATM payment",
    });
  } else if (payment_method === "creditcard") {
    return res.status(200).json({
      msg: "You choosed CreditCard payment",
    });
  } else if (payment_method === "points") {
    return res.status(200).json({
      msg: "You choosed Points payment",
    });
  }
};

module.exports = { processPayment };
