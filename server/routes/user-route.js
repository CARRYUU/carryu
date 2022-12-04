const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
  deleteUser,
} = require("../controllers/user-controller");
const { isAuthenticatedUser, isAdmin } = require("../middlerware/auth-middleware");

router.route("/register").post(registerUser);
router
  .route("/profile")
  .get(isAuthenticatedUser, getUserProfile)
  .put(isAuthenticatedUser, updateUserProfile);
router.route("/password/update").put(isAuthenticatedUser, updateUserPassword);

module.exports = router;
