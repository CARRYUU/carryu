const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const loginValidation = require("../config/validation.js").loginValidation;

// @desc    Login user
// @route   POST api/auth/login
// @access  Private
const login = (req, res) => {
  try {
    // Check if email and password are valid
    const { email, password } = req.body;
    const { error } = loginValidation({ email, password });
    if (error) return res.status(400).send(error.details[0].message);

    // Find user and compare password
    User.findOne({ email: email }, function (err, user) {
      // Check if user exists
      if (err) return res.status(400).send(err);
      if (!user) return res.status(401).send("User not found!");

      // Compare password
      user.comparePassword(password, function (err, isMatch) {
        if (err) return res.status(400).send(err);
        if (isMatch) {
          // Create  a token and assign it to user with 7 days for expiration time
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
          console.log("Login Successfully");

          return res.json({
            success: true,
            token: token,
            user: {
              _id: user._id,
              username: user.username,
              email: user.email,
            },
          });
        } else {
          return res.status(401).send("Password is incorrect!");
        }
      });
    }).select(["_id", "username", "email", "+password"]);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Could not sign in.",
    });
  }
};

// @desc    Logout user
// @route   POST api/auth/logout
// @access  Private
const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    success: true,
    message: "Logout successfully",
  });
};

module.exports = {
  login,
  logout,
};
