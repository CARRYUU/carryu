const User = require("../models/user-model.js");
const Course = require("../models/course-model.js");
<<<<<<< HEAD

//@desc Buy course
//@route GET api/payment
//@access Private
const processPayment = async (req, res) => {
=======
// const pointcontroller = require("./point-controller.js");

//@desc Buy course
//@route Get api/payment/buycourse
//@access Private
const buyCourse = async (req, res) => {
>>>>>>> 251e96d (add:payment-controller/payment-route)
  const { ATM, CreditCard, Points } = req.body;
  User.findById(req.user._id).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
  });

  if (ATM) {
    return res.status(200).json({
      msg: "You choosed ATM payment",
    });
  } else if (CreditCard) {
    return res.status(200).json({
      msg: "You choosed CreditCard payment",
    });
  } else if (Points) {
    return res.status(200).json({
      msg: "You choosed Points payment",
    });
  }
};

<<<<<<< HEAD
module.exports = { processPayment };
=======
module.exports = { buyCourse };
>>>>>>> 251e96d (add:payment-controller/payment-route)
