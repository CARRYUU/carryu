const express = require("express");
const router = express.Router();
const { buyCourse } = require("../controllers/payment-controller");
const { isAuthenticatedUser } = require("../middlerware/auth-middleware");

router.route("/buycourse").get(isAuthenticatedUser, buyCourse);

module.exports = router;
