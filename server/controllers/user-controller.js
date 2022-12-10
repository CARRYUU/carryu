const User = require("../models/user-model.js");
const registerValidation = require("../config/validation.js").registerValidation;
const updateProfileValidation = require("../config/validation.js").updateProfileValidation;
const passwordValidation = require("../config/validation.js").passwordValidation;

// @desc    Register new user
// @route   POST api/user/register
// @access  Public
exports.registerUser = async (req, res) => {
  // Destruct register data from request body.
  let { username, email, password, role } = req.body;

  // Check if register data is valid.
  const { error } = registerValidation({ username, email, password, role });
  if (error) return res.status(400).json({ err_msg: error.details[0].message });

  // Check if the email already exists.
  const emailExist = await User.findOne({ email: email });

  // If email exists, return error message.
  if (emailExist) {
    res.status(400);
    return res.status(400).json({
      err_msg: "Email has already been registered.",
    });
  }

  // Create new User object
  const newUser = new User({
    username,
    email,
    password,
    role,
  });

  try {
    // Save user into database
    const savedUser = await newUser.save();
    return res.status(200).json({
      msg: "Register successfully",
      savedObject: savedUser,
    });
  } catch (err) {
    return res.status(400).json({
      err_msg: "Register failed",
    });
  }
};

// @desc    Get user's profile
// @route   GET api/user/profile
// @access  Private
exports.getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({
      err_msg: "User not found",
    });
  }

  return res.status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    register_time: user.register_time,
  });
};

// @desc    Update user's profile
// @route   PATCH api/user/profile
// @access  Private
exports.updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({
      err_msg: "User not found",
    });
  }

  username = req.body.username || user.username;
  email = req.body.email || user.email;

  // Check if the updated data is valid.
  const { error } = updateProfileValidation({ username, email });
  if (error) return res.status(400).json({ err_msg: error.details[0].message });

  // If the updated data is valid, update the user's profile and save to database.
  user.username = username;
  user.email = email;

  const updatedUser = await user.save();

  return res.status(200).json({
    success: true,
    msg: "User updated successfully",
    user_profile: {
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      role: updatedUser.role,
      register_time: updatedUser.register_time,
    },
  });
};

// @desc    Update user's password
// @route   PATCH api/user/password/update
// @access  Private
exports.updateUserPassword = async (req, res) => {
  // Get user by id and select the password field
  // Use `+` to override schema-level `select: false` without making the projection inclusive
  const user = await User.findById(req.user._id).select("+password");

  if (!user) {
    return res.status(404).json({
      err_msg: "User not found",
    });
  }

  // Deconstruct the request body
  const { old_password, new_password, confirm_password } = req.body;

  // Three password fields are required.
  if (!(old_password && new_password && confirm_password)) {
    return res.status(400).json({
      err_msgs: "Please enter all password fields: old_password, new_password, confirm_password",
    });
  }

  // Compare the input old_password is correct.
  user.comparePassword(old_password, async function (err, isMatch) {
    if (err) return res.status(400).json({ msg: err });
    if (isMatch) {
      // Check if the new password is valid.
      const { error } = passwordValidation({ password: new_password });
      if (error) return res.status(400).json({ err_msg: error.details[0].message });

      // Check if the new password is equal to confirmation one.
      if (new_password !== confirm_password) {
        return res.status(400).json({
          err_msg: "New password and confirmation password do not match",
        });
      }

      // Update the user's password and save to database if everything is fine:).
      user.password = new_password;
      await user.save();

      res.status(200).json({
        msg: "Password updated successfully",
      });
    } else {
      return res.status(401).json({
        err_msg: "Old password is incorrect",
      });
    }
  });
};

// @desc    Switch a user role to student
// @route   PATCH api/user/swtich-role
// @access  Private
exports.switchUserRole = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({
      err_msg: "User not found",
    });
  }

  if (user.role === "student") {
    user.role = "instructor";
  } else if (user.role === "instructor") {
    user.role = "student";
  }

  const updatedUser = await user.save();

  return res.status(200).json({
    success: true,
    msg: "User role switched successfully",
    user_profile: {
      username: updatedUser.username,
      email: updatedUser.email,
      role: updatedUser.role,
    },
  });
};

// @desc    Delete a user by id
// @route   DELETE api/user/delete-user/:id
// @access  Private/Admin
exports.deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      err_msg: "User not found",
    });
  }

  const deletedUser = await User.findOneAndDelete({ email: req.body.email });

  res.status(200).json({
    success: true,
    msg: "User deleted successfully",
  });
};

// @desc    Get single user by id
// @route   GET api/user/:id
// @access  Private/Admin
exports.getSingleUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      err_msg: "User not found",
    });
  }

  return res.status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    register_time: user.register_time,
  });
};

// @desc    Get all user
// @route   GET api/user/get-all-user
// @access  Private/Admin
exports.getAllUser = async (req, res) => {
  const users = await User.find({});

  if (!users) {
    return res.status(404).json({
      err_msg: "User not found",
    });
  }

  return res.status(200).json({
    users,
  });
};
