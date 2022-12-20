const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUserPurchaseHistory,
  updateUserPassword,
  switchUserRole,
  deleteUser,
} = require("../controllers/user-controller");
const {
  isAuthenticatedUser,
  isAdmin,
} = require("../middlerware/auth-middleware");

// register a new user
router.route("/register").post(registerUser);

// user profile
router
  .route("/profile")
  .get(isAuthenticatedUser, getUserProfile)
  .patch(isAuthenticatedUser, updateUserProfile);

// update user password
router.route("/password").patch(isAuthenticatedUser, updateUserPassword);

// get user purchase history
router
  .route("/purchase-history")
  .get(isAuthenticatedUser, getUserPurchaseHistory);

// switch user role
router.route("/switch-role").patch(isAuthenticatedUser, switchUserRole);

module.exports = router;
