const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlerware/auth-middleware");
const {
  addCourseToCart,
  getCartItems,
  removeCourseFromCart,
} = require("../controllers/cart-controller");

router
  .route("/")
  .get(isAuthenticatedUser, getCartItems)
  .post(isAuthenticatedUser, addCourseToCart)
  .delete(isAuthenticatedUser, removeCourseFromCart);

module.exports = router;
